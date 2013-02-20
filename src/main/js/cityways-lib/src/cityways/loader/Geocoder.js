/**
 * @overview Class {@link cityways.Geocoder}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 *
 * @requires cityways/Class.js
 */

/**
 * @class cityways.loader.Geocoder
 */
 cityways.loader.Geocoder = cityways.Class({
    constructor : function(){

    },

    members : 
    {
        _getShortAddress  : function(address){
            var addressParts = address.split(",");
            var result = addressParts[0];
            if (!isNaN(parseInt(addressParts[1])))
                result += ", " + addressParts[1];
            return result;
        },
    /**
     * [getCodeAddress description]
     * @param  {[type]}   lat      [description]
     * @param  {[type]}   lon      [description]
     * @param  {Function} callback [description]
     */
     getAddress : function(lat, lon, callback) {
        var self = this;
        var latlng = new google.maps.LatLng(lat, lon);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'latLng' : latlng
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    callback(self._getShortAddress(results[0].formatted_address));
                } else {
                    callback("("  + lat.toString() + ", "  + lon + ")");
                }
            } else {
                callback("("  + lat.toString() + ", "  + lon + ")");
            }
        });
    }

  }

});