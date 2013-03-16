package com.pgis.bus.server.controllers;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.context.support.StaticMessageSource;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.Locale;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.pgis.bus.data.*;
import com.pgis.bus.data.impl.DataBaseService;
import com.pgis.bus.data.orm.City;
import com.pgis.bus.data.repositories.RepositoryException;
import com.pgis.bus.server.AppProperties;
import com.pgis.bus.server.models.NavigationModel;
import com.pgis.bus.server.models.data.CitiesModel;
import com.pgis.bus.server.models.data.CityModel;
import com.pgis.bus.server.models.data.RouteTypeModel;
import com.pgis.bus.server.models.page.ArticlesPageModel;
import com.pgis.bus.server.models.page.MainPageModel;

@Controller
@RequestMapping(value = "")
public class HomeController extends BaseController {

	private static final Logger log = LoggerFactory
			.getLogger(HomeController.class);

	public HomeController() {
		super();
	}

	public HomeController(IDataBaseService db) {
		super(db);
		
	}

	@Autowired
	private MessageSource messageSource;

	public static CitiesModel prepareCitiesModel(Collection<City> cities,
			String selectedCityKey) {
		try {

			// Получим объект с информацией о текущей локали
			Locale locale = LocaleContextHolder.getLocale();

			// Загрузим список всех городов из БД

			// Создадим модель CitiesModel на базе списка cities
			CitiesModel model = new CitiesModel();

			CityModel selectedCity = null;
			for (City city : cities) {
				if (city.key.equals(selectedCityKey) == true) {
					selectedCity = new CityModel(city, locale);
					model.addCity(selectedCity);
				} else {
					model.addCity(new CityModel(city, locale));
				}

			}
			model.setSelectedCity(selectedCity);
			// Отправим модель в формате GSON клиенту

			return model;
		} catch (Exception e) {
			log.debug("Error:", e);
			return null;
		}
	}

	@RequestMapping(value = { "", "/", "home" })
	public ModelAndView home(
			@CookieValue(value = "city_key", defaultValue = "") String city_key) {
		StaticMessageSource source = new StaticMessageSource();
		log.debug("city_key(CookieValue): " + city_key);
		if (city_key == null || city_key.toString().length() == 0)
			city_key = AppProperties.DefaultCity;
		return new ModelAndView("redirect:/home/" + city_key);
	}

	@RequestMapping(value = "home/{city_key}")
	public ModelAndView homeCity(@PathVariable String city_key,
			HttpServletRequest request, HttpServletResponse response) {
		try {
			log.debug("city_key: " + city_key);
			Locale locale = LocaleContextHolder.getLocale();
			CitiesModel citiesModel = prepareCitiesModel(super.getDB().Cities().getAllCities(),
					city_key);
			if (citiesModel == null || citiesModel.getSelectedCity() == null) {
				return new ModelAndView("redirect:/error");
			}
			NavigationModel navModel = new NavigationModel(messageSource,
					locale, NavigationModel.pages_enum.c_Home);
			
			Collection<RouteTypeModel> routeTypes = new ArrayList<RouteTypeModel>();
			for(String routeType :super.getDB().Cities().getRouteTypesForCity(citiesModel
					.getSelectedCity().getId()) ){
				routeTypes.add(new RouteTypeModel(routeType));
			}
			
			MainPageModel model = new MainPageModel(navModel);
			model.setCitiesModel(citiesModel);
			model.setRouteTypes(routeTypes);
			model.setLanguage(locale);
			Cookie cityCookie = new Cookie("city_key", city_key);
			cityCookie.setPath(request.getContextPath());
			response.addCookie(cityCookie);
			return new ModelAndView("main", "model", model);
		} catch (RepositoryException e) {
			log.debug("Error:", e);
			return null;
		}

	}

}