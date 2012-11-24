package com.pgis.bus.server.controllers;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.Locale;

import com.pgis.bus.data.*;
import com.pgis.bus.data.impl.DataBaseService;
import com.pgis.bus.data.orm.City;
import com.pgis.bus.data.repositories.RepositoryException;
import com.pgis.bus.server.models.LinkModel;
import com.pgis.bus.server.models.NavigationModel;
import com.pgis.bus.server.models.data.CitiesModel;
import com.pgis.bus.server.models.data.CityModel;
import com.pgis.bus.server.models.page.ArticlesPageModel;
import com.pgis.bus.server.models.page.MainPageModel;

@Controller
@RequestMapping(value = "")
public class IndexController {
	private static final Logger log = LoggerFactory
			.getLogger(IndexController.class);

	@Autowired
	private MessageSource messageSource;

	private CitiesModel prepareCitiesModel() {
		try {

			// Получим объект с информацией о текущей локали
			Locale locale = LocaleContextHolder.getLocale();

			// Загрузим список всех городов из БД
			IDataBaseService db = new DataBaseService();

			Collection<City> cities = db.getAllCities();

			// Создадим модель CitiesModel на базе списка cities
			CitiesModel model = new CitiesModel();

			Iterator<City> i = cities.iterator();
			int default_city_id = -1;
			while (i.hasNext()) {
				City city = i.next();
				if (default_city_id == -1) {
					default_city_id = city.id;
				}
				model.addCity(new CityModel(city, locale));
			}
			if (default_city_id > 0) {
				model.setDefaultCity(model.getCity(default_city_id));

			}
			// Отправим модель в формате GSON клиенту

			return model;
		} catch (RepositoryException e) {
			log.debug("Error:", e);
			return null;
		}
	}

	@RequestMapping(value = "")
	public ModelAndView main() {
		return new ModelAndView("redirect:index.htm");
	}

	@RequestMapping(value = "/index.htm")
	public ModelAndView index() {

		Locale locale = LocaleContextHolder.getLocale();
		NavigationModel navModel = new NavigationModel(messageSource, locale,
				NavigationModel.pages_enum.c_Home);
		MainPageModel model = new MainPageModel(navModel);
		model.setCitiesModel(prepareCitiesModel());
		return new ModelAndView("main", "model", model);
	}

	@RequestMapping(value = "/help.htm")
	public ModelAndView help() {
		Locale locale = LocaleContextHolder.getLocale();
		NavigationModel navModel = new NavigationModel(messageSource, locale,
				NavigationModel.pages_enum.c_Help);
		ArticlesPageModel model = new ArticlesPageModel(navModel);
		return new ModelAndView("help", "model", model);
	}

	@RequestMapping(value = "/about.htm")
	public ModelAndView aboutpr() {
		Locale locale = LocaleContextHolder.getLocale();
		NavigationModel navModel = new NavigationModel(messageSource, locale,
				NavigationModel.pages_enum.c_About);
		ArticlesPageModel model = new ArticlesPageModel(navModel);
		return new ModelAndView("about", "model", model);
	}
	
	@RequestMapping(value = "/routes.htm")
	public ModelAndView routes() {
		Locale locale = LocaleContextHolder.getLocale();
		NavigationModel navModel = new NavigationModel(messageSource, locale,
				NavigationModel.pages_enum.c_Routes);
		ArticlesPageModel model = new ArticlesPageModel(navModel);
		return new ModelAndView("routes", "model", model);
	}

}