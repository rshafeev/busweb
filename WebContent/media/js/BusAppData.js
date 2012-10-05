function BusAppData() {

	this.curr_way_ind = -1;
	this.waysData = [];

	this.setCurrentWay = function(ind) {
		this.curr_way_ind = ind;
	};
	this.clearWaysData = function() {
		this.waysData = [];
	};
	this.addWayData = function(wayData) {
		this.waysData.push(wayData);
	};
};