package com.pgis.bus.server.helpers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;

import com.pgis.bus.data.helpers.PGIntervalHelper;
import com.pgis.bus.data.orm.type.Path_t;
import com.pgis.bus.net.models.path.InputWayModel;
import com.pgis.bus.net.models.path.OutputWayModel;
import com.pgis.bus.net.models.path.PathModel;
import com.pgis.bus.net.models.path.PathsModel;
import com.pgis.bus.net.models.path.RouteWayModel;
import com.pgis.bus.net.models.path.TransitionWayModel;

public class PathsModelConverter {

	public static PathsModel makePathsModel(Collection<Path_t> elems) {
		PathsModel model = new PathsModel();

		HashMap<Integer, List<Path_t>> arr = new HashMap<Integer, List<Path_t>>();
		for (Path_t elem : elems) {
			if (arr.get(elem.path_id) == null) {
				List<Path_t> pathWays = new ArrayList<Path_t>();
				pathWays.add(elem);
				arr.put(elem.path_id, pathWays);
			} else {
				Collection<Path_t> pathWays = arr.get(elem.path_id);
				pathWays.add(elem);
			}
		}

		Collection<PathModel> paths = new ArrayList<PathModel>();

		for (List<Path_t> pathElems : arr.values()) {
			PathModel p = makePathModel(pathElems);
			if (p != null)
				paths.add(p);
		}
		model.setPaths(paths);
		return model;
	}

	public static PathModel makePathModel(List<Path_t> elems) {
		if (elems.size() < 3) {
			return null;
		}
		PathModel path = new PathModel();
		Path_t first = elems.get(0);
		Path_t last = elems.get(elems.size() - 1);

		ArrayList<TransitionWayModel> transitions = new ArrayList<TransitionWayModel>();
		ArrayList<RouteWayModel> routes = new ArrayList<RouteWayModel>();

		InputWayModel input = new InputWayModel();
		input.setDistance(first.distance);
		input.setMoveTimeSecs(PGIntervalHelper.toSeconds(first.move_time));
		input.setToRouteID(elems.get(1).rway_id);

		OutputWayModel output = new OutputWayModel();
		output.setDistance(last.distance);
		output.setMoveTimeSecs(PGIntervalHelper.toSeconds(last.move_time));
		output.setFromRouteID(elems.get(elems.size() - 2).rway_id);

		for (int i = 1; i < elems.size() - 1; i++) {
			Path_t e = elems.get(i);
			if (e.rway_id == null || e.rway_id.intValue() == 0) {

				TransitionWayModel transition = new TransitionWayModel();
				transition.setDistance(e.distance);
				transition.setMoveTimeSecs(PGIntervalHelper.toSeconds(e.move_time));
				if (elems.get(i - 1).rway_id == null || elems.get(i + 1).rway_id == null)
					return null;
				transition.setFromRouteID(elems.get(i - 1).rway_id);
				transition.setToRouteID(elems.get(i + 1).rway_id);
				transitions.add(transition);
			} else {
				RouteWayModel route = new RouteWayModel();
				route.setCost(e.cost);
				route.setDistance(e.distance);
				route.setID(e.rway_id);
				route.setName(e.route_name);
				route.setType(e.route_type.substring(8));
				route.setMoveTimeSecs(PGIntervalHelper.toSeconds(e.move_time));
				route.setWaitBeforeTimeSecs(PGIntervalHelper.toSeconds(e.wait_time));
				route.setFrequency(PGIntervalHelper.toSeconds(e.frequency));
				route.setStartStation(e.station_name_a);
				route.setStartRelationIndex(e.relation_index_a);
				route.setFinishStation(e.station_name_b);
				route.setFinishRelationIndex(e.relation_index_b);
				routes.add(route);
			}
		}
		path.setInput(input);
		path.setOutput(output);
		path.setRoutes(routes);
		path.setTransitions(transitions);
		return path;

	}
}
