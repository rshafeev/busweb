function BusAppData() {

	this.curr_way_ind = -1;
	this.waysData = [];

	this.setCurrentWay = function(ind) {
		this.curr_way_ind = ind;
	};
	this.clearWaysData = function() {
		this.waysData = [];
	};
	this.addRouteToWay = function(way_id, direct_route_id, route_type,
			route_name) {
		var count  = this.waysData.length;
		//console.log("way_id" + way_id);
		if (count - 1 < way_id) {
			for (var i = 0; i <= (way_id - count); i++) {
				this.waysData.push([]);
			}
		};
		/*this.waysData[way_id].push({
					direct_route_id : direct_route_id,
					route_type : route_type,
					route_name : route_name
				});*/
	};
};