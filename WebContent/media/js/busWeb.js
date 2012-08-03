var flag = 0;

function changeImage() {
	if (flag == 0) {
		zoomOutX('map_canvas');
		document.img.src = 'media/images/arrow_right.png';
		flag = 1;
	} else {
		zoomInX('map_canvas');
		document.img.src = 'media/images/arrow_left.png';
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

function change_image_metro() {
	var g = this.getElementsByTagName('img');
	if(g[0].src.indexOf('media/images/metro_selected.png') != -1) g[0].src='media/images/metro.png'; 
	else g[0].src='media/images/metro_selected.png';
};

$(document).ready(function() {
    function divresize(block, headerHeight, footerHeight) {
        var windowHeight = $(window).height(); /*определяем высоту окна браузера*/
        $(block).css('height', windowHeight - headerHeight - footerHeight); /*устанавливаем высоту блока(равно высоте окна за вычетом шапки и подвала)*/
    }
    
    divresize('#container', 175, 8); /*вызываем функцию изменения размера блока*/
    $(window).bind("resize", function(){ /*при изменении размера окна вызываем функцию*/
        divresize('#container', 175, 8); 
    });
	});


function click_ot() {
	document.images["img"].src = 'media/images/metro.png';
}
function click_out() {
		document.images["img"].src = 'media/images/metro_selected.png';
	}