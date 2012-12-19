/**
 * Additional static(global) functions
 */
function isExistsInArray(arr, elem) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].toString() == elem.toString()) {
			return true;
			
		}
	}
	return false;
}

/**
 * 
 * @param {}
 *            url
 * @param {["op","ff","ie6","ie7","ie8","ie9"]}
 *            browsersTagsArr
 */
function includeCSSFile(path, fileName, browsersTagsArr) {
	var agent = navigator.userAgent.toLowerCase();

	var b = $.browser;
	var v = parseFloat(b.version);
	var vers = b.version;
	oldMSIEBrowser9 = (b.msie && vers == "9");
	oldMSIEBrowser8 = (b.msie && vers == "8");
	oldMSIEBrowser6 = (b.msie && vers == "6");
	oldMSIEBrowser7 = (b.msie && vers == "7");

	var s1 = "<link rel=\"stylesheet\" href=\"" + path + "/" + fileName;
	var s2 = ".css\" type=\"text/css\">";
	
	var tag = "";
	if ($.browser.opera && vers <= 10.0
			&& isExistsInArray(browsersTagsArr, "op") == true) {
		tag = "_op";
	} else if (b.msie && vers == "9"
			&& isExistsInArray(browsersTagsArr, "ie9") == true) {
		tag = "_ie9";
	} else if (b.msie && vers == "8"
			&& isExistsInArray(browsersTagsArr, "ie8") == true) {
		tag = "_ie8";
	} else if (b.msie && vers == "7"
			&& isExistsInArray(browsersTagsArr, "ie7") == true) {
		tag = "_ie7";
	} else if (b.msie && vers == "6"
			&& isExistsInArray(browsersTagsArr, "ie6") == true) {
		tag = "_ie6";
	} else if (b.mozilla && v < "10"
			&& isExistsInArray(browsersTagsArr, "ff") == true) {
		tag = "_ff";
	} else {
		tag = "";

	}

	document.write(s1 + tag + s2);

}
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
		// Non-IE
		myWidth = window.innerWidth;
		myHeight = window.innerHeight;
	} else if (document.documentElement
			&& (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		// IE 6+ in 'standards compliant mode'
		myWidth = document.documentElement.clientWidth;
		myHeight = document.documentElement.clientHeight;
	} else if (document.body
			&& (document.body.clientWidth || document.body.clientHeight)) {
		// IE 4 compatible
		myWidth = document.body.clientWidth;
		myHeight = document.body.clientHeight;
	}
	return {
		height : myHeight,
		width : myWidth
	};
}
