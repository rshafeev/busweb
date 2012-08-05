package com.pgis.bus.server.controllers;

import java.io.IOException;
import java.util.Locale;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value="/users")
public class UserController{
	private static final Logger log = LoggerFactory
			.getLogger(BusController.class);
	
    @RequestMapping(value="test.htm", method=RequestMethod.POST)
    public String test() 
    {
        return new String("First ajax request!");
    }
    
    @RequestMapping(value="users.htm")
	public ModelAndView handleRequest()  {
		// Получим объект с информацией о текущей локали
		Locale locale = LocaleContextHolder.getLocale();
		// Выведем в логгер текущий язык
		log.debug("Current language:" + locale.getLanguage());
		return new ModelAndView("/jsp/hello.jsp");
	}
}