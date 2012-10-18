/**
 * Additional static(global) functions
 */

function getShortAddress(address) {
	var addressParts = address.split(",");
	var result = addressParts[0];
	if (!isNaN(parseInt(addressParts[1])))
		result += ", " + addressParts[1];
	return result;
}

function getWindowSize() {
	var myWidth = 0, myHeight = 0;
	if (typeof(window.innerWidth) == 'number') {
		//Non-IE
		myWidth = window.innerWidth;
		myHeight = window.innerHeight;
	} else if (document.documentElement
			&& (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		//IE 6+ in 'standards compliant mode'
		myWidth = document.documentElement.clientWidth;
		myHeight = document.documentElement.clientHeight;
	} else if (document.body
			&& (document.body.clientWidth || document.body.clientHeight)) {
		//IE 4 compatible
		myWidth = document.body.clientWidth;
		myHeight = document.body.clientHeight;
	}
	return {
		height : myHeight,
		width : myWidth
	};
}

/*function showRouteInfo(result_numb_id){
	var id = "#" + result_numb_id;
	/*$('#routes-res-text').hide();
	$("#res_text").hide(1500);
	$(id).click(function(){
	      $("#res_text").hide(1500);},
	      function(){$("#res_text").show(1500);
	         });
	}*/

/*
function showRouteInfo(result_numb_id, res_text_id) {
	var id = "#" + result_numb_id;
	var rt = "#" + res_text_id;
	if (result_numb_1)
		{
		$("#res_text_0").toggle();
		}
		
	}*/