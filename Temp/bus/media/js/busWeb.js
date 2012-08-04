var flag = 0;

function changeImage() {
	if (flag == 0) {
		zoomOutX('map_canvas');
		document.img.src = 'css/images/arrow_right.png';
		flag = 1;
	} else {
		zoomInX('map_canvas');
		document.img.src = 'css/images/arrow_left.png';
		flag = 0;
	}
}

function load_cities() {
	var ajax_url = "city/get_all";

	$.ajax({
				type : "POST",
				url : "city/get_all",
				data : "",
				contentType : "application/json; charset=utf-8",
				dataType : "json",
				success : function(data) {
					alert(data);
				},
				failure : function(errMsg) {
					alert(errMsg);
				}
			});

}

function btn_calculate_click() {
	changeImage();
	var el = document.getElementById('test');
	el.style.display = (el.style.display == 'block') ? 'none' : 'block';
	load_cities();
}