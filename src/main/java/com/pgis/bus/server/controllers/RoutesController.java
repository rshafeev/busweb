package com.pgis.bus.server.controllers;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Locale;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.pgis.bus.data.orm.Route;
import com.pgis.bus.data.orm.RouteWay;
import com.pgis.bus.data.orm.type.LangEnum;
import com.pgis.bus.net.models.route.RouteWayModel;
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

import com.pgis.bus.data.helpers.LocaleHelper;
import com.pgis.bus.data.service.IDataBaseService;
import com.pgis.bus.data.service.IDataModelsService;
import com.pgis.bus.net.models.city.CitiesModel;
import com.pgis.bus.net.models.route.RouteModel;
import com.pgis.bus.net.models.route.RouteTypeModel;
import com.pgis.bus.net.models.route.RoutesListModel;
import com.pgis.bus.server.AppProperties;
import com.pgis.bus.server.models.NavigationModel;
import com.pgis.bus.server.models.data.RoutesListExtModel;
import com.pgis.bus.server.models.page.RoutesPageModel;
import com.pgis.bus.server.models.response.ErrorModel;

@Controller
@RequestMapping(value = "routes")
public class RoutesController extends BaseController {
	private static final Logger log = LoggerFactory.getLogger(RoutesController.class);

	public RoutesController() {
		super();
	}

	public RoutesController(IDataBaseService dbService, IDataModelsService modelsService) {
		super(dbService, modelsService);
	}

	@Autowired
	private MessageSource messageSource;

	@RequestMapping(value = "get/{routeID}", method = RequestMethod.GET)
	@ResponseBody
	public Object get(@PathVariable Integer routeID) {
		try {
			log.debug("get()");
			Locale locale = LocaleContextHolder.getLocale();
			LangEnum lang = LangEnum.valueOf(locale);
			Route route = this.getDbService().Routes().get(routeID);
			RouteWay directWay = route.getDirectRouteWay();
			RouteWay reverseWay = route.getReverseRouteWay();
			directWay.getRouteRelations();
			reverseWay.getRouteRelations();
			
			RouteModel model = route.toModel(lang);
			RouteWayModel directWayModel =  directWay.toModel(lang);
			RouteWayModel reverseWayModel =  reverseWay.toModel(lang);
			model.setDirectWay(directWayModel);
			model.setReverseWay(reverseWayModel);

			//RouteModel route = super.getModelsService().Routes().get(routeID);
			log.debug("route:" +  model);
			return model;
		} catch (Exception e) {
			log.debug("error", e);
			return new ErrorModel(e);
		}
	}

	@RequestMapping(value = "")
	public ModelAndView routes(@CookieValue(value = "city_key", defaultValue = "") String city_key) {
		log.debug("city_key(CookieValue): " + city_key);
		if (city_key == null || city_key.length() == 0)
			city_key = AppProperties.DefaultCity;
		return new ModelAndView("redirect:/routes/" + city_key);
	}

	@RequestMapping(value = "{city_key}")
	public ModelAndView routesCity(@PathVariable String city_key, HttpServletRequest request,
			HttpServletResponse response) {
		try {
			// Создали модель, которая хранит в себе список городов и
			// выбранный город(текущий)
			CitiesModel citiesModel = HomeController.prepareCitiesModel(super.getDbService().Cities().getAll(),
					city_key);

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
			NavigationModel navModel = new NavigationModel(messageSource, locale, NavigationModel.pages_enum.c_Routes);

			//
			int cityID = citiesModel.getSelectedCity().getId();
			Collection<RouteTypeModel> routeTypes = prepareRouteTypesModel(cityID, locale);
			// Создаем модель данных

			RoutesPageModel model = new RoutesPageModel(navModel);
			model.setRoutesLists(prepareRoutesListModel(cityID, routeTypes));
			model.setCitiesModel(citiesModel);
			model.setLanguage(locale);
			return new ModelAndView("routes", "model", model);

		} catch (SQLException e) {
			log.debug("Error:", e);
			return null;
		}
	}

	private Collection<RouteTypeModel> prepareRouteTypesModel(int cityID, Locale locale) throws SQLException {
		Collection<RouteTypeModel> routeTypes = super.getModelsService().Cities().getRouteTypesByCity(cityID);
		for (RouteTypeModel routeType : routeTypes) {
			String routeTypeName = messageSource.getMessage("basic." + routeType.getId(), null, locale);
			routeType.setName(routeTypeName);
		}
		return routeTypes;
	}

	private Collection<RoutesListExtModel> prepareRoutesListModel(int cityID, Collection<RouteTypeModel> types)
			throws SQLException {
		// Получаем текущий язык (локаль)
		Locale locale = LocaleContextHolder.getLocale();
		String langID = LocaleHelper.getDataBaseLanguage(locale);
		Collection<RoutesListExtModel> model = new ArrayList<RoutesListExtModel>();
		for (RouteTypeModel routeType : types) {
			RoutesListModel dbRoutesList = super.getModelsService().Routes().getRoutesList(cityID, routeType.getDbId());
			RoutesListExtModel routesList = new RoutesListExtModel();
			routesList.setRoutesList(locale, messageSource, dbRoutesList);
			routesList.setRouteType(routeType);
			model.add(routesList);
		}
		return model;
	}

}