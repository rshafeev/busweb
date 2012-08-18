
var flag = 0;
var busApp = null;

function initialize(){
  busApp = new BusApp();
  busApp.main();
}
$(document).ready(function() {
    function divresize(block, headerHeight, footerHeight) {
        var windowHeight = $(window).height(); /*определяем высоту окна браузера*/
        $(block).css('height', windowHeight - headerHeight - footerHeight); /*устанавливаем высоту блока(равно высоте окна за вычетом шапки и подвала)*/
    }
    
    divresize('#container', 163, 3); /*вызываем функцию изменения размера блока*/
    $(window).bind("resize", function(){ /*при изменении размера окна вызываем функцию*/
        divresize('#container', 163, 3); 
    });
	});
	
function changeImage() {
if (flag == 0) {
      $("#map_canvas").width('75%')
      .css({cursor:"auto", backgroundColor:"rgb(226, 226, 226)"});
	document.img.src = 'media/images/arrow_right.png';
	flag = 1;
} else {
      $("#map_canvas").width('99%')
      .css({cursor:"auto", backgroundColor:"rgb(226, 226, 226)"});
	document.img.src = 'media/images/arrow_left.png';
	flag = 0;
}
}

function insert_text ()
{
	var el = document.getElementById('test');
	el.style.display = (el.style.display == 'block') ? 'none' : 'block';
}


function changeImageCalc() {
if (flag == 0) {
	$("#map_canvas").width('75%')
    .css({cursor:"auto", backgroundColor:"rgb(226, 226, 226)"});
	document.img.src = 'media/images/arrow_right.png';
	flag = 1;
} else {
	insert_text();
	flag = 0;
}
}

function btn_calculate_click() {
	changeImageCalc();
	insert_text();
var network = new Network();
network.request_calculate();
}

function change_image_metro(e) {
	var g = e.getElementsByTagName('img');
	if(g[0].src.indexOf('media/images/metro_selected.png') != -1) g[0].src='media/images/metro.png'; 
	else g[0].src='media/images/metro_selected.png';
};

function change_image_bus(e) {
	var g = e.getElementsByTagName('img');
	if(g[0].src.indexOf('media/images/bus_selected.png') != -1) g[0].src='media/images/bus.png'; 
	else g[0].src='media/images/bus_selected.png';
};

function change_image_troll(e) {
	var g = e.getElementsByTagName('img');
	if(g[0].src.indexOf('media/images/trol_selected.png') != -1) g[0].src='media/images/trol.png'; 
	else g[0].src='media/images/trol_selected.png';
};

function change_image_tram(e) {
	var g = e.getElementsByTagName('img');
	if(g[0].src.indexOf('media/images/tram_selected.png') != -1) g[0].src='media/images/tram.png'; 
	else g[0].src='media/images/tram_selected.png';
};

function click_ot() {
	document.images["img"].src = 'media/images/metro.png';
}
function click_out() {
		document.images["img"].src = 'media/images/metro_selected.png';
	}

	
