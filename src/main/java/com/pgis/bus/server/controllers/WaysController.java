package com.pgis.bus.server.controllers;

import java.sql.Time;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Locale;

import org.postgis.Point;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.pgis.bus.data.IDataBaseService;
import com.pgis.bus.data.impl.DataBaseService;
import com.pgis.bus.data.models.FindWaysOptions;
import com.pgis.bus.data.models.RouteTypeDiscount;
import com.pgis.bus.data.models.WaysModel;
import com.pgis.bus.data.orm.City;
import com.pgis.bus.data.orm.WayElem;
import com.pgis.bus.data.orm.type.AlgStrategyEnum;
import com.pgis.bus.data.orm.type.DayEnum;
import com.pgis.bus.data.repositories.IWaysRepository;
import com.pgis.bus.data.repositories.RepositoryException;
import com.pgis.bus.data.repositories.impl.WaysRepository;
import com.pgis.bus.server.models.BasicModel;
import com.pgis.bus.server.models.CityModel;
import com.pgis.bus.server.models.ShortestWayModel;

@Controller
@RequestMapping(value = "ways/")
public class WaysController {
	private static final Logger log = LoggerFactory
			.getLogger(WaysController.class);

	
	@RequestMapping(value = "find.json", method = RequestMethod.POST)
	public ModelAndView find() {
		log.debug("find.json");
		ModelAndView modelView = new ModelAndView("comps/ways_panel");
		try {
			// prepare data
			Point p1 = new Point(50.026350246659, 36.3360857963562);
			p1.setSrid(4326);
			// Point p2 = new Point(50.004634132497, 36.2337112426758);
			Point p2 = new Point(50.0355169337227, 36.2198925018311);
			p2.setSrid(4326);

			ArrayList<RouteTypeDiscount> route_types = new ArrayList<RouteTypeDiscount>();
			route_types
					.add(new RouteTypeDiscount("c_route_station_input", 1.0));
			route_types.add(new RouteTypeDiscount("c_route_transition", 1.0));
			route_types.add(new RouteTypeDiscount("c_route_trolley", 1.0));
			route_types.add(new RouteTypeDiscount("c_route_metro", 0.5));
			route_types.add(new RouteTypeDiscount("c_route_bus", 1.0));

			FindWaysOptions opts = new FindWaysOptions();
			opts.setCity_id(1);
			opts.setP1(p1);
			opts.setP2(p2);
			opts.setDay_id(DayEnum.c_Monday);
			opts.setTime_start(new Time(10, 0, 0));
			opts.setMaxDistance(300);
			opts.setUsage_routeTypes(route_types);
			opts.setAlg_strategy(AlgStrategyEnum.c_cost);
			opts.setLang_id("c_ru");
			// get ways
			IDataBaseService db = new DataBaseService();
			Collection<WayElem> ways = db.getShortestWays(opts);
			WaysModel waysModel = new WaysModel(ways);
			System.out.println(waysModel.toString());
			// Отправим модель в формате GSON клиенту
			modelView.addObject("model", waysModel);
			return modelView;

		} catch (RepositoryException e) {
			e.printStackTrace();
		}
		return null;

	}

}
