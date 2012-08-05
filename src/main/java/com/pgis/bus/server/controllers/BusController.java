package com.pgis.bus.server.controllers;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
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
import java.util.Locale;

import com.pgis.bus.data.*;

@Controller
@RequestMapping(value="")
public class BusController{
	private static final Logger log = LoggerFactory
			.getLogger(BusController.class);
	
	@RequestMapping(value="")
	public ModelAndView main(){
		return new ModelAndView("redirect:index.htm");
	}

	@RequestMapping(value="/index.htm")
	public ModelAndView index(){
		return new ModelAndView("/jsp/bus.jsp");
	}
}