package com.pgis.bus.server.controllers;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

public class CityContoller extends MultiActionController {
	private static final Logger log = LoggerFactory
			.getLogger(BusController.class);

	public ModelAndView get_all(HttpServletRequest request,
			HttpServletResponse response) {

		// Получим объект с информацией о текущей локали
		Locale locale = LocaleContextHolder.getLocale();
		// Выведем в логгер текущий язык
		log.debug("Current language:" + locale.getLanguage());
		return new ModelAndView("jsp/hello.jsp");
	}

}
