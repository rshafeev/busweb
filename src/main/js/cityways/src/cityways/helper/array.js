/**
 * @requires cityways/cityways.js
 */

cityways.helper.array = {

	isExistElement : function(arr, elem) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].toString() == elem.toString()) {
				return true;
			}
			
		}
		return false;
	}

};
