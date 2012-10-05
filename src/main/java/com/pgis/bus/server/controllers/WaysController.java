package com.pgis.bus.server.controllers;

import java.util.Collection;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.pgis.bus.data.IDataBaseService;
import com.pgis.bus.data.impl.DataBaseService;
import com.pgis.bus.data.models.FindWaysOptions;

import com.pgis.bus.data.models.WaysModel;
import com.pgis.bus.data.orm.WayElem;
import com.pgis.bus.data.repositories.RepositoryException;
import com.pgis.bus.server.helpers.LanguageHelper;

@Controller
@RequestMapping(value = "ways/")
public class WaysController {
	private static final Logger log = LoggerFactory
			.getLogger(WaysController.class);

	@RequestMapping(value = "load_routes.json", method = RequestMethod.POST)
	public ModelAndView loadRoutes(String data) {
		return null;
	}

	@RequestMapping(value = "find.json", method = RequestMethod.POST)
	public ModelAndView find(String data) {
		ModelAndView modelView = new ModelAndView("ajax/ways_panel");
		try {
			log.debug("find.json");
			FindWaysOptions options = (new Gson()).fromJson(data,
					FindWaysOptions.class);
			if (options == null)
				return modelView;
			// Получим объект с информацией о текущей локали
			Locale locale = LocaleContextHolder.getLocale();
			options.getP1().setSrid(4326);
			options.getP2().setSrid(4326);
			options.setMaxDistance(500);
			options.setLang_id(LanguageHelper.getDataBaseLanguage(locale));
			log.debug(options.toString());
			// get ways
			IDataBaseService db = new DataBaseService();
			Collection<WayElem> ways = db.getShortestWays(options);
			WaysModel waysModel = new WaysModel(ways);

			// Отправим модель во view
			modelView.addObject("model", waysModel);
			return modelView;

		} catch (RepositoryException e) {
			e.printStackTrace();
		} catch (JsonSyntaxException e) {
			e.printStackTrace();
		}

		return modelView;

	}
}
