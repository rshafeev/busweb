package com.pgis.bus.server.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;



@Controller
@RequestMapping(value = "stations")
public class StationsController {
	private static final Logger log = LoggerFactory
			.getLogger(StationsController.class);

	@ResponseBody
	@RequestMapping(value = "find_by_phrase.json", method = RequestMethod.POST)
	public String loadWay(String phrase,String city_id, String lang_id ) {
		log.info(city_id);
		log.info(phrase);
		log.info(lang_id);

		return "";
	}
}
