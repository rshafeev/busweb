package com.pgis.bus.server.helpers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;

import com.pgis.bus.data.helpers.DateTimeHelper;
import com.pgis.bus.data.orm.WayElem;
import com.pgis.bus.net.models.PathsModel;
import com.pgis.bus.net.models.path.InputWayModel;
import com.pgis.bus.net.models.path.OutWayModel;
import com.pgis.bus.net.models.path.PathModel;
import com.pgis.bus.net.models.path.RouteWayModel;
import com.pgis.bus.net.models.path.TransitionWayModel;

public class PathsModelConverter {

	public static PathsModel makePathsModel(Collection<WayElem> elems) {
		PathsModel model = new PathsModel();

		HashMap<Integer, List<WayElem>> arr = new HashMap<Integer, List<WayElem>>();
		for (WayElem elem : elems) {
			if (arr.get(elem.path_id) == null) {
				List<WayElem> pathWays = new ArrayList<WayElem>();
				pathWays.add(elem);
				arr.put(elem.path_id, pathWays);
			} else {
				Collection<WayElem> pathWays = arr.get(elem.path_id);
				pathWays.add(elem);
			}
		}

		Collection<PathModel> paths = new ArrayList<PathModel>();

		for (List<WayElem> pathElems : arr.values()) {
			PathModel p = makePathModel(pathElems);
			if (p != null)
				paths.add(p);
		}
		model.setPaths(paths);
		return model;
	}

	public static PathModel makePathModel(List<WayElem> elems) {
		if (elems.size() < 3) {
			return null;
		}
		// добавим первый маршрут: "пешком от точки А до первой остановки"
		InputWayModel input = new InputWayModel();
		input.setDistance(elems.get(0).distance);
		input.setMoveTimeSecs(DateTimeHelper.toSeconds(elems.get(0).move_time));
		input.setToRouteID(elems.get(0).direct_route_id);

		Collection<TransitionWayModel> transitions = new ArrayList<TransitionWayModel>();
		Collection<RouteWayModel> routes = new ArrayList<RouteWayModel>();
		// добавим все послед. машруты
		for (int i = 0; i < elems.size() - 1; i += 2) {
			WayElem elem1 = elems.get(i);
			WayElem elem2 = elems.get(i + 1);
			RouteWayModel route = new RouteWayModel();
			route.setCost(elem1.cost);
			route.setDistance(elem2.distance);
			route.setID(elem1.direct_route_id);
			route.setName(elem1.route_name);
			route.setType(elem1.route_type);
			route.setMoveTimeSecs(DateTimeHelper.toSeconds(elem2.move_time));
			route.setWaitBeforeTimeSecs(DateTimeHelper
					.toSeconds(elem1.wait_time));
			route.setStartStation(elem1.station_name);
			route.setStartRelationIndex(elem1.relation_index);
			route.setFinishStation(elem2.station_name);
			route.setFinishRelationIndex(elem2.relation_index);

			if (i != 0 && i != elems.size() - 2) {
				TransitionWayModel transition = new TransitionWayModel();
				transition.setDistance(elem1.distance);
				transition.setMoveTimeSecs(DateTimeHelper
						.toSeconds(elem1.move_time));
				transition.setFromRouteID(elems.get(i - 1).direct_route_id);
				transition.setToRouteID(elem1.direct_route_id);
				transitions.add(transition);
			}
			routes.add(route);
		}

		// добавим последний маршрут:
		// "пешком последней остановки до точки назначения B"
		WayElem finishElem = elems.get(elems.size() - 1);
		OutWayModel output = new OutWayModel();
		output.setDistance(finishElem.distance);
		output.setMoveTimeSecs(DateTimeHelper.toSeconds(finishElem.move_time));
		output.setFromRouteID(elems.get(elems.size() - 2).direct_route_id);

		// Формируем путь
		PathModel path = new PathModel();
		path.setPathID(finishElem.path_id);
		path.setInput(input);
		path.setOut(output);
		path.setRoutes(routes);
		path.setTransitions(transitions);
		return path;
	}
}

