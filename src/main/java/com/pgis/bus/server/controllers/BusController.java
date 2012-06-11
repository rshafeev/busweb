package com.pgis.bus.server.controllers; 

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.mvc.Controller; 
import org.springframework.web.servlet.ModelAndView; 

import javax.naming.NamingException;
import javax.servlet.ServletException; 
import javax.servlet.http.HttpServletRequest; 
import javax.servlet.http.HttpServletResponse; 

import java.io.IOException; 
import java.sql.Connection;
import java.sql.SQLException;

import com.pgis.bus.server.db.*;


public class BusController implements Controller { 
	private  static final Logger log = LoggerFactory.getLogger( BusController.class ); // 1. Объявляем переменную логгера

    public ModelAndView handleRequest(HttpServletRequest request, 
            HttpServletResponse response) throws ServletException, IOException { 
    	log.info("Open BusController...");
    	
    	try {
			Connection c = DBConnectionFactory.getConnectionFactory();
			
		} catch (NamingException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        return new ModelAndView("jsp/bus.jsp"); 
    } 
}