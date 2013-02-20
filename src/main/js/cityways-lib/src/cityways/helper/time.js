/**
 * @overview Namespace {@link cityways.helper.time}.
 * @see Project url <a href="http://ways.in.ua">ways.in.ua</a>
 * @copyright 
 * CityWays-lib is copyright (c) 2012, <a href="http://premiumgis.com">PremiumGIS</a> Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file <a href="http://api.ways.in.ua/license.txt">license.txt</a> in this distribution for more details.
 * @author Marianna Roshchenko <mr@premiumgis.com>
 * 
 * @requires cityways/helper.js
 */


 /**
 * @namespace cityways.helper.time
 */
 cityways.helper.time = {

/** 
 * @param secs {Number} int[0,3600*24]
 * @return {String} [description]
 */
 secsToLocaleString : function(secs) {

 	var h = parseInt(secs / 3600);
 	var m = parseInt((secs - h * 3600) / 60);
 	if (h==0)
 	{
 		return cityways.helper.time.minsOfHourToLocaleString(m);
 	}
 	return cityways.helper.time.hoursToLocaleString(h) +" " +cityways.helper.time.minsOfHourToLocaleString(m);

 },

/**
* @param mins {Number} int [0,60]
* @return {String}     [description]
*/ 
minsOfHourToLocaleString  : function(mins) {

	// минут
	if (mins >= 10 && mins <= 20) {
		return mins + " " + cityways.lang.translate("time.minutes10");
	}

	var ostatok = mins % 10;
	// минута
	if (ostatok <= 1) {
		return mins + " " + cityways.lang.translate("time.minute");
	}
	// минуты
	if (ostatok > 1 && ostatok < 5) {
		return mins + " " + cityways.lang.translate("time.minutes");
	}
	// минут
	return mins + " " + cityways.lang.translate("time.minutes_ru");

},

 /**
 * @param mins {Number} int [0,24]
 * @return {String} [description]
 */
 hoursToLocaleString  : function(hours) {
	//часов
	if (hours >= 5 && hours <= 20) {
		return hours + " " + cityways.lang.translate("time.hours");
	}
	var ostatok = hours % 10;
	//час
	if (ostatok == 1) {
		return hours + " " + cityways.lang.translate("time.hour");
	}

	//часа
	if (ostatok >= 2 && ostatok < 5) {
		return hours + " " + cityways.lang.translate("time.hours_ru");
	}
	
	return hours + " " + cityways.lang.translate("time.hours");

}

};
