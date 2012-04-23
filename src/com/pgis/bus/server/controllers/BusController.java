package com.pgis.bus.server.controllers; 

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.mvc.Controller; 
import org.springframework.web.servlet.ModelAndView; 

import javax.servlet.ServletException; 
import javax.servlet.http.HttpServletRequest; 
import javax.servlet.http.HttpServletResponse; 

import java.io.IOException; 

public class BusController implements Controller { 
	private  static final Logger log = LoggerFactory.getLogger( BusController.class ); // 1. Объявляем переменную логгера

    public ModelAndView handleRequest(HttpServletRequest request, 
            HttpServletResponse response) throws ServletException, IOException { 
    	log.info("Open BusController...");
        return new ModelAndView("jsp/bus.jsp"); 
    } 
}