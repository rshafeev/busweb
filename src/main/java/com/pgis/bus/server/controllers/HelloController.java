package com.pgis.bus.server.controllers; 

import org.springframework.web.servlet.mvc.Controller; 
import org.springframework.web.servlet.ModelAndView; 
import javax.servlet.ServletException; 
import javax.servlet.http.HttpServletRequest; 
import javax.servlet.http.HttpServletResponse; 

import java.io.IOException; 

public class HelloController implements Controller { 

    public ModelAndView handleRequest(HttpServletRequest request, 
            HttpServletResponse response) throws ServletException, IOException { 
        return new ModelAndView("jsp/hello.jsp"); 
    } 
}