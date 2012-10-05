package com.pgis.bus.server.controllers;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import java.util.Collection;
import java.util.Iterator;
import java.util.Locale;

import com.pgis.bus.data.*;
import com.pgis.bus.data.impl.DataBaseService;
import com.pgis.bus.data.orm.City;
import com.pgis.bus.data.repositories.RepositoryException;
import com.pgis.bus.server.models.BasicModel;
import com.pgis.bus.server.models.CityModel;
import com.pgis.bus.server.models.MainPageModel;

@Controller
@RequestMapping(value = "")
public class IndexController {
	private static final Logger log = LoggerFactory
			.getLogger(IndexController.class);

	private BasicModel prepareBasicModel() {
		try {

			// Получим объект с информацией о текущей локали
			Locale locale = LocaleContextHolder.getLocale();

			// Загрузим список всех городов из БД
			IDataBaseService db = new DataBaseService();

			Collection<City> cities = db.getAllCities();

			// Создадим модель CitiesModel на базе списка cities
			BasicModel model = new BasicModel();

			
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
			log.debug("Error:",e);
			return null;
		}
	}

	@RequestMapping(value = "")
	public ModelAndView main() {
		return new ModelAndView("redirect:index.htm");
	}

	@RequestMapping(value = "/index.htm")
	public ModelAndView index() {
		MainPageModel model = new MainPageModel();
		model.setBasicModel(prepareBasicModel());
		return new ModelAndView("index", "model", model);
	}
}