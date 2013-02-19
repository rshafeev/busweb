package com.pgis.bus.server.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.pgis.bus.data.models.RouteGeoData;
import com.pgis.bus.data.models.RoutePart;
import com.pgis.bus.data.orm.type.Path_t;
import com.pgis.bus.net.models.PathsModel;
import com.pgis.bus.net.request.FindPathsOptions;
import com.pgis.bus.net.request.data.RouteTypeDiscount;
import com.pgis.bus.server.helpers.LanguageHelper;
import com.pgis.bus.server.helpers.PathsModelConverter;
import com.pgis.bus.server.models.data.RouteGeoDataModel;
import com.pgis.bus.server.models.data.WayGeoDataModel;
import com.pgis.bus.server.models.request.LoadWayOptions;

@Controller
@RequestMapping(value = "paths/")
public class PathsController extends BaseController {
	private static final Logger log = LoggerFactory
			.getLogger(PathsController.class);

	private PathsModel findShortestPaths(FindPathsOptions options)
			throws Exception {
		if (options == null)
			throw new Exception("Options error");
		// get ways
		long findTime = System.currentTimeMillis();
		Collection<Path_t> ways = db.getShortestPaths(options);
		log.debug("Ways elems: " + ways.size());
		findTime = System.currentTimeMillis() - findTime;
		PathsModel model = PathsModelConverter.makePathsModel(ways);
		model.setFindTime(findTime);
		return model;
	}

	@RequestMapping(value = "load_way.json", method = RequestMethod.POST)
	public ModelAndView loadWay(String data) {
		ModelAndView modelView = new ModelAndView("ajax/map_routes");
		try {
			log.debug("load_way.json");
			LoadWayOptions wayOptions = (new Gson()).fromJson(data,
					LoadWayOptions.class);
			Locale locale = LocaleContextHolder.getLocale();
			String lang_id = LanguageHelper.getDataBaseLanguage(locale);

			WayGeoDataModel geoWayModel = new WayGeoDataModel(wayOptions);

			RoutePart[] parts = wayOptions.getRouteParts();
			for (int i = 0; i < parts.length; i++) {
				Collection<RouteGeoData> routeData = db.getGeoDataByRoutePart(
						parts[i], lang_id);
				RouteGeoDataModel routeModel = new RouteGeoDataModel(parts[i],
						routeData);
				geoWayModel.addRouteGeoDataModel(routeModel);
			}

			modelView.addObject("model", geoWayModel);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return modelView;
	}

	@ResponseBody
	@RequestMapping(value = "find.json", method = RequestMethod.POST)
	public String find(String data) {
		try {
			log.debug("find.json");
			FindPathsOptions options = (new Gson()).fromJson(data,
					FindPathsOptions.class);

			if (options == null)
				throw new Exception("Options error");
			for (RouteTypeDiscount routeType : options.getRouteTypes()) {
				routeType.setRouteType("c_route_" + routeType.getRouteType());
			}
			
			// Получим объект с информацией о текущей локали
			Locale locale = LocaleContextHolder.getLocale();
			options.setMaxDistance(500);
			options.setLangID(LanguageHelper.getDataBaseLanguage(locale));
			log.debug(options.toString());

			// get ways
			PathsModel model = findShortestPaths(options);

			return (new Gson()).toJson(model);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return "error";
	}

}
