package com.pgis.bus.server.controllers;

import java.util.ArrayList;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.pgis.bus.data.IDataBaseService;
import com.pgis.bus.data.impl.DataBaseService;
import com.pgis.bus.data.orm.City;
import com.pgis.bus.data.repositories.RepositoryException;
import com.pgis.bus.server.models.CitiesModel;
import com.pgis.bus.server.models.CityModel;
import com.pgis.bus.server.models.ShortestWayModel;

@Controller
@RequestMapping(value = "ways/")
public class WaysController {
	private static final Logger log = LoggerFactory
			.getLogger(WaysController.class);

	@ResponseBody
	@RequestMapping(value = "calculate.htm", method = RequestMethod.POST)
	public String calculate() {
		log.debug("calculate.htm");
		ShortestWayModel model = new ShortestWayModel();
		// Отправим модель в формате GSON клиенту
		return (new Gson()).toJson(model);

	}

}
