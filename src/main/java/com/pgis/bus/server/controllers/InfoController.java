package com.pgis.bus.server.controllers;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
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
import com.pgis.bus.server.models.NavigationModel;
import com.pgis.bus.server.models.data.CitiesModel;
import com.pgis.bus.server.models.data.CityModel;
import com.pgis.bus.server.models.page.ArticlesPageModel;
import com.pgis.bus.server.models.page.MainPageModel;

@Controller
@RequestMapping(value = "")
public class InfoController {
	private static final Logger log = LoggerFactory
			.getLogger(InfoController.class);

	@Autowired
	private MessageSource messageSource;

	@RequestMapping(value = "error")
	public ModelAndView error() {
		Locale locale = LocaleContextHolder.getLocale();
		NavigationModel navModel = new NavigationModel(messageSource, locale);
		ArticlesPageModel model = new ArticlesPageModel(navModel);
		return new ModelAndView("error", "model", model);
	}
	
	@RequestMapping(value = "help")
	public ModelAndView help() {
		Locale locale = LocaleContextHolder.getLocale();
		NavigationModel navModel = new NavigationModel(messageSource, locale,
				NavigationModel.pages_enum.c_Help);
		ArticlesPageModel model = new ArticlesPageModel(navModel);
		return new ModelAndView("help", "model", model);
	}

	@RequestMapping(value = "about")
	public ModelAndView about() {
		Locale locale = LocaleContextHolder.getLocale();
		NavigationModel navModel = new NavigationModel(messageSource, locale,
				NavigationModel.pages_enum.c_About);
		ArticlesPageModel model = new ArticlesPageModel(navModel);
		return new ModelAndView("about", "model", model);
	}

}