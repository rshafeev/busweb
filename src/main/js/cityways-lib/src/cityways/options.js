
/**
 * @requires cityways/cityways.js
 */

/**
 * @namespace Хранит глобальные настройки
 */
cityways.options = {
    
  /**
   * Хост сервера cityways
   */
  ServerHost : "http://ways.in.ua",
    
  /**
   * Название темы
   * @type {String}
   */
  Theme : "default",
    
  /**
   * [ResourceURI description]
   * @type {String}
   */
	ResourceURI : "/",



    /**
	 * Method: _getScriptLocation Return the path to this script. This is also
	 * implemented in OpenLayers.js
	 * 
	 * Returns: {String} Path to this script
	 */


   
   getResourcePath : function(){
   	 return cityways.options.ResourceURI +"themes/" + cityways.options.Theme + "/";
   }
 

};
