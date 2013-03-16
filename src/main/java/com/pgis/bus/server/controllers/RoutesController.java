package com.pgis.bus.server.controllers;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.Locale;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.pgis.bus.data.*;
import com.pgis.bus.data.helpers.LoadDirectRouteOptions;
import com.pgis.bus.data.helpers.LoadRouteOptions;
import com.pgis.bus.data.helpers.LoadRouteRelationOptions;
import com.pgis.bus.data.impl.DataBaseService;
import com.pgis.bus.data.models.RouteGeoData;
import com.pgis.bus.data.models.RoutePart;
import com.pgis.bus.data.orm.City;
import com.pgis.bus.data.orm.Route;
import com.pgis.bus.data.repositories.RepositoryException;
import com.pgis.bus.server.AppProperties;
import com.pgis.bus.server.helpers.LanguageHelper;
import com.pgis.bus.server.models.NavigationModel;
import com.pgis.bus.server.models.data.CitiesModel;
import com.pgis.bus.server.models.data.CityModel;
import com.pgis.bus.server.models.data.RouteSchemeModel;
import com.pgis.bus.server.models.data.RouteTypeModel;
import com.pgis.bus.server.models.page.ArticlesPageModel;
import com.pgis.bus.server.models.page.MainPageModel;
import com.pgis.bus.server.models.page.RoutesPageModel;
import com.pgis.bus.server.models.request.LoadPathOptions;
import com.pgis.bus.server.models.response.ErrorModel;
import com.pgis.bus.server.models.response.GeomPathModel;
import com.pgis.bus.server.models.response.GeomRouteModel;
import com.pgis.bus.server.models.response.RouteModel;
import com.pgis.bus.server.models.response.RoutesModel;

@Controller
@RequestMapping(value = "routes")
public class RoutesController extends BaseController {
	private static final Logger log = LoggerFactory
			.getLogger(RoutesController.class);

	public RoutesController() {
		super();
	}

	public RoutesController(IDataBaseService db) {
		super(db);
	}

	@Autowired
	private MessageSource messageSource;

	@ResponseBody
	@RequestMapping(value = "get/{route_id}", method = RequestMethod.GET)
	public String get(@PathVariable String route_id) {
		try {
			log.debug("getRoute");

			Locale locale = LocaleContextHolder.getLocale();
			String lang_id = LanguageHelper.getDataBaseLanguage(locale);

			LoadRouteRelationOptions loadRouteRelationOptions = new LoadRouteRelationOptions();
			loadRouteRelationOptions.setLoadStationsData(true);

			LoadDirectRouteOptions loadDirectRouteOptions = new LoadDirectRouteOptions();
			loadDirectRouteOptions.setLoadScheduleData(false);
			loadDirectRouteOptions
					.setLoadRouteRelationOptions(loadRouteRelationOptions);
			LoadRouteOptions opts = new LoadRouteOptions();
			opts.setLoadRouteNamesData(true);
			opts.setDirectRouteOptions(loadDirectRouteOptions);

			Route route = super.getDB().Routes()
					.getRoute(Integer.valueOf(route_id), opts);
			RouteModel model = new RouteModel(route, locale);
			return (new Gson()).toJson(model);
		} catch (Exception e) {
			log.debug("error", e);
			return (new Gson()).toJson(new ErrorModel(e));
		}
	}

	@RequestMapping(value = "")
	public ModelAndView routes(
			@CookieValue(value = "city_key", defaultValue = "") String city_key) {
		log.debug("city_key(CookieValue): " + city_key);
		if (city_key == null || city_key.length() == 0)
			city_key = AppProperties.DefaultCity;
		return new ModelAndView("redirect:/routes/" + city_key);

	}

	@RequestMapping(value = "{city_key}")
	public ModelAndView routesCity(@PathVariable String city_key,
			HttpServletRequest request, HttpServletResponse response) {
		try {
			// Создали модель, которая хранит в себе список городов и
			// выбранный город(текущий)
			CitiesModel citiesModel = HomeController.prepareCitiesModel(super
					.getDB().Cities().getAllCities(), city_key);

			// Если city_key нет в БД, то переходим на страницу "Ошибка"
			if (citiesModel == null || citiesModel.getSelectedCity() == null) {
				return new ModelAndView("redirect:/error");
			}

			// Передаем cookie клиенту
			Cookie cityCookie = new Cookie("city_key", city_key);
			cityCookie.setPath(request.getContextPath());
			response.addCookie(cityCookie);

			// Получаем текущий язык (локаль)
			Locale locale = LocaleContextHolder.getLocale();

			// Создаем модель навигации
			NavigationModel navModel = new NavigationModel(messageSource,
					locale, NavigationModel.pages_enum.c_Routes);

			// Создаем модель маршрутов
			Collection<RoutesModel> routesModel = prepareRoutesModels(
					citiesModel.getSelectedCity().getId(), locale);

			RoutesPageModel model = new RoutesPageModel(navModel);
			model.setRoutes(routesModel);
			model.setCitiesModel(citiesModel);
			model.setLanguage(locale);
			return new ModelAndView("routes", "model", model);

		} catch (RepositoryException e) {
			log.debug("Error:", e);
			return null;
		}
	}

	private Collection<RoutesModel> prepareRoutesModels(int cityID,
			Locale locale) {

		Collection<RoutesModel> models = null;
		try {
			Collection<String> types = super.getDB().Cities()
					.getRouteTypesForCity(cityID);
			String lang_id = LanguageHelper.getDataBaseLanguage(locale);

			models = new ArrayList<RoutesModel>();
			for (String routeTypeID : types) {
				String routeTypeName = messageSource.getMessage("basic."
						+ routeTypeID, null, locale);

				Collection<Route> routes = super.getDB().Routes()
						.getRoutes(routeTypeID, cityID, lang_id);
				log.debug(Integer.toString(routes.size()));
				RoutesModel routesModel = new RoutesModel();

				Collection<RouteSchemeModel> routeSchemes = new ArrayList<RouteSchemeModel>();
				for (Route r : routes) {

					RouteSchemeModel routeSchemeModel = new RouteSchemeModel();
					routeSchemeModel.setName(r.getFullName(lang_id));
					routeSchemeModel.setRouteID(r.getId());
					routeSchemeModel.setCost(r.getCost());
					routeSchemes.add(routeSchemeModel);
					log.debug(routeSchemeModel.toString());
				}

				routesModel.setRoutes(routeSchemes);
				routesModel.setRouteType(new RouteTypeModel(routeTypeID));
				models.add(routesModel);
			}

		} catch (RepositoryException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return models;
	}

}