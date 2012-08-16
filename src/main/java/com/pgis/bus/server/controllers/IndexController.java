package com.pgis.bus.server.controllers;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.naming.NamingException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.Locale;

import com.google.gson.Gson;
import com.pgis.bus.data.*;
import com.pgis.bus.data.impl.DataBaseService;
import com.pgis.bus.data.orm.City;
import com.pgis.bus.data.repositories.RepositoryException;
import com.pgis.bus.server.models.CitiesModel;
import com.pgis.bus.server.models.CityModel;
import com.pgis.bus.server.models.MainPageModel;

@Controller
@RequestMapping(value = "")
public class IndexController {
	private static final Logger log = LoggerFactory
			.getLogger(IndexController.class);

	private CitiesModel getCitiesModel() {
		try {

			// Получим объект с информацией о текущей локали
			Locale locale = LocaleContextHolder.getLocale();

			// Загрузим список всех городов из БД
			IDataBaseService db = new DataBaseService();

			Collection<City> cities = db.getAllCities();

			// Создадим модель CitiesModel на базе списка cities
			CitiesModel model = new CitiesModel();

			ArrayList<CityModel> citiesModel = new ArrayList<CityModel>();
			Iterator<City> i = cities.iterator();
			while (i.hasNext()) {
				City city = i.next();
				model.addCity(new CityModel(city, locale));
			}

			// Отправим модель в формате GSON клиенту

			return model;
		} catch (RepositoryException e) {
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
		model.citiesModel = getCitiesModel();
		return new ModelAndView("index", "model", model);
	}
}