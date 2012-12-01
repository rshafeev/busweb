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
import org.springframework.web.servlet.ModelAndView;

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
import com.pgis.bus.server.models.page.ArticlesPageModel;
import com.pgis.bus.server.models.page.MainPageModel;
import com.pgis.bus.server.models.page.RoutesPageModel;

@Controller
@RequestMapping(value = "routes")
public class RoutesController {
	private static final Logger log = LoggerFactory
			.getLogger(RoutesController.class);

	@Autowired
	private MessageSource messageSource;

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
		CitiesModel citiesModel = HomeController.prepareCitiesModel(city_key);
		if (citiesModel==null || citiesModel.getSelectedCity() == null) {
			return new ModelAndView("redirect:/error");
		}
		Locale locale = LocaleContextHolder.getLocale();
		NavigationModel navModel = new NavigationModel(messageSource, locale,
				NavigationModel.pages_enum.c_Routes);
		ArticlesPageModel armodel = new ArticlesPageModel(navModel);
		RoutesPageModel model = new RoutesPageModel(navModel);
		model.setCitiesModel(citiesModel);
		Cookie cityCookie = new Cookie("city_key", city_key);
		cityCookie.setPath(request.getContextPath());
		response.addCookie(cityCookie);
		return new ModelAndView("routes", "model", model);
	}

}