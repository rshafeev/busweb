package com.pgis.bus.server.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.Controller;
import org.springframework.web.servlet.support.RequestContextUtils;
import org.springframework.web.servlet.ModelAndView;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.Locale;

public class HelloController implements Controller {

	private static final Logger log = LoggerFactory
			.getLogger(BusController.class);

	public ModelAndView handleRequest(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		// Получим объект с информацией о текущей локали
		Locale locale = LocaleContextHolder.getLocale();
		// Выведем в логгер текущий язык
		log.debug("Current language:" + locale.getLanguage());
		return new ModelAndView("jsp/hello.jsp");
	}
}