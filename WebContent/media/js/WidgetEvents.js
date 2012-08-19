/*
 * WidgetEvents.js :  event functions of the widgets
 */

function on_btn_calculate_click() {
	changeImageCalc();
	insert_text();
	var network = new Network();
	network.request_calculate();
}

function on_change_selectbox_city() {
	var nameFromCombo = $(".styled").val();
	var cities = getApp().getDataModel().cities;
	var city = null;

	for (var i = 0; i < cities.length; i++) {

		if (cities[i].id == nameFromCombo) {
			city = cities[i];
			break;
		}
	}
	if (city == null) {
		return;
	}
	var googleMap = getApp().getGoogleMap();
	googleMap.setCenter(city.scale, city.location.lat, city.location.lon);
}

/*
 * function wright_text_to() {
 * $('.a-form-input__input').val($('.a-form-input__input').val() + 'insert
 * address A'); }
 * 
 * function wright_text_from() {
 * $('.b-form-input__input').val($('.b-form-input__input').val() + 'insert
 * address B'); }
 */
/*
 * function changeImage() { if (flag == 0) { $("#map_canvas").width('75%').css({
 * cursor : "auto", backgroundColor : "rgb(226, 226, 226)" }); document.img.src =
 * 'media/images/arrow_right.png'; flag = 1; } else {
 * $("#map_canvas").width('99%').css({ cursor : "auto", backgroundColor :
 * "rgb(226, 226, 226)" }); document.img.src = 'media/images/arrow_left.png';
 * flag = 0; } }
 * 
 * function insert_text() { var el = document.getElementById('test');
 * el.style.display = (el.style.display == 'block') ? 'none' : 'block'; }
 * 
 * function changeImageCalc() { if (flag == 0) {
 * $("#map_canvas").width('75%').css({ cursor : "auto", backgroundColor :
 * "rgb(226, 226, 226)" }); document.img.src = 'media/images/arrow_right.png';
 * flag = 1; } else { insert_text(); flag = 0; } }
 * 
 * 
 * 
 * function change_image_metro(e) { var g = e.getElementsByTagName('img'); if
 * (g[0].src.indexOf('media/images/metro_selected.png') != -1) g[0].src =
 * 'media/images/metro.png'; else g[0].src = 'media/images/metro_selected.png'; };
 * 
 * function change_image_bus(e) { var g = e.getElementsByTagName('img'); if
 * (g[0].src.indexOf('media/images/bus_selected.png') != -1) g[0].src =
 * 'media/images/bus.png'; else g[0].src = 'media/images/bus_selected.png'; };
 * 
 * function change_image_troll(e) { var g = e.getElementsByTagName('img'); if
 * (g[0].src.indexOf('media/images/trol_selected.png') != -1) g[0].src =
 * 'media/images/trol.png'; else g[0].src = 'media/images/trol_selected.png'; };
 * 
 * function change_image_tram(e) { var g = e.getElementsByTagName('img'); if
 * (g[0].src.indexOf('media/images/tram_selected.png') != -1) g[0].src =
 * 'media/images/tram.png'; else g[0].src = 'media/images/tram_selected.png'; };
 * 
 * function click_ot() { document.images["img"].src = 'media/images/metro.png'; }
 * function click_out() { document.images["img"].src =
 * 'media/images/metro_selected.png'; }
 * 
 */