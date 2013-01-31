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
		PathModel path = new PathModel();

		if (elems.size() < 3) {
			return path;
		}
		ArrayList<TransitionWayModel> transitions = new ArrayList<TransitionWayModel>();
		ArrayList<RouteWayModel> routes = new ArrayList<RouteWayModel>();

		int i = 0;
		double distance = 0.0;
		int moveTime = 0;
		while (i < elems.size()) {
			WayElem elem = elems.get(i);
			if (elem.direct_route_id == null || elem.direct_route_id <= 0) {
				distance += elem.distance;
				moveTime += DateTimeHelper.toSeconds(elem.move_time);

				if (i == elems.size() - 1) {
					if (routes.size() == 0)
						return path;
					OutWayModel output = new OutWayModel();
					output.setDistance(distance);
					output.setMoveTimeSecs(moveTime);
					output.setFromRouteID(routes.get(routes.size() - 1).getID());
					path.setOut(output);

					break;
				}
				i++;
				continue;
			}

			if (path.getInput() == null) {
				InputWayModel input = new InputWayModel();
				input.setDistance(distance);
				input.setMoveTimeSecs(moveTime);
				input.setToRouteID(elem.direct_route_id);
				path.setInput(input);
			} else if (moveTime > 0 && routes.size() > 0) {
				TransitionWayModel transition = new TransitionWayModel();
				transition.setDistance(distance);
				transition.setMoveTimeSecs(moveTime);
				transition
						.setFromRouteID(routes.get(routes.size() - 1).getID());
				transition.setToRouteID(elem.direct_route_id);
				transitions.add(transition);
			}

			if (i < elems.size() - 1) {
				WayElem nextElem = elems.get(i + 1);
				RouteWayModel route = new RouteWayModel();
				route.setCost(elem.cost);
				route.setDistance(elem.distance);
				route.setID(elem.direct_route_id);
				route.setName(elem.route_name);
				route.setType(elem.route_type);
				route.setMoveTimeSecs(DateTimeHelper.toSeconds(elem.move_time));
				route.setWaitBeforeTimeSecs(DateTimeHelper
						.toSeconds(elem.wait_time));
				route.setStartStation(elem.station_name);
				route.setStartRelationIndex(elem.relation_index);
				route.setFinishStation(nextElem.station_name);
				route.setFinishRelationIndex(nextElem.relation_index);
				routes.add(route);
			}
			distance = 0.0;
			moveTime = 0;
			i += 2;
		}
		if (elems.size() > 0) {
			path.setPathID(elems.get(0).path_id);
		}

		path.setRoutes(routes);
		path.setTransitions(transitions);
		return path;

	}
}
