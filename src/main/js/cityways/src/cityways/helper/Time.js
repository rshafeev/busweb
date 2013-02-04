/**
 * @requires cityways/Namespace.js
 */


cityways.helper.Time = {

/**
 * @secs int[0,3600*24]
 * @return
 */
secsToLocaleString : function(secs) {

	var h = parseInt(secs / 3600);
	var m = parseInt((secs - h * 3600) / 60);
	if (h==0)
	{
		return cityways.helper.Time.minsOfHourToLocaleString(m);
	}
	return cityways.helper.Time.hoursToLocaleString(h) +" " +cityways.helper.Time.minsOfHourToLocaleString(m);
	
},

/**
 * @mins int [0,60]
 */ minsOfHourToLocaleString  : function(mins) {

	// минут
	if (mins >= 10 && mins <= 20) {
		return mins + " " + cityways.Language.translate("time.minutes10");
	}

	var ostatok = mins % 10;
	// минута
	if (ostatok <= 1) {
		return mins + " " + cityways.Language.translate("time.minute");
	}
	// минуты
	if (ostatok > 1 && ostatok < 5) {
		return mins + " " + cityways.Language.translate("time.minutes");
	}
	// минут
	return mins + " " + cityways.Language.translate("time.minutes_ru");

},

/**
 * @mins int [0,24]
 */ hoursToLocaleString  : function(hours) {

	//часов
	if (hours >= 5 && hours <= 20) {
		return hours + " " + cityways.Language.translate("time.hours");
	}
	var ostatok = hours % 10;
	//час
	if (ostatok == 1) {
		return hours + " " + cityways.Language.translate("time.hour");
	}

	//часа
	if (ostatok >= 2 && ostatok < 5) {
		return hours + " " + cityways.Language.translate("time.hours_ru");
	}
	
	return hours + " " + cityways.Language.translate("time.hours");

	}

};
