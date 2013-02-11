
/**
 * @requires cityways/cityways.js
 */

/**
 * Статический класс, хранит общие статические свойства
 */
cityways.options = {
    
    ServerHost : "http://ways.in.ua",
    
    Theme : "default",
    
    /**
     * Property: ImgPath {String} Set this to the path where control images are
     * stored, a path given here must end with a slash. If set to '' (which is
     * the default) OpenLayers will use its script location + "img/".
     * 
     * You will need to set this property when you have a singlefile build of
     * 
     * Layers that either is not named "OpenLayers.js" or if you move the file
     * in a way such that the image directory cannot be derived from the script
     * location.
     * 
     * If your custom OpenLayers build is named "my-custom-ol.js" and the images
     * of OpenLayers are in a folder "/resources/external/images/ol" a correct
     * way of including OpenLayers in your HTML would be:
     * 
     * (code) <script src="/path/to/my-custom-ol.js" type="text/javascript"></script>
     * <script type="text/javascript"> // tell OpenLayers where the control
     * images are // remember the trailing slash OpenLayers.ImgPath =
     * "/resources/external/images/ol/"; </script> (end code)
     * 
     * Please remember that when your OpenLayers script is not named
     * "OpenLayers.js" you will have to make sure that the default theme is
     * loaded into the page by including an appropriate <link>-tag, e.g.:
     * 
     * (code) <link rel="stylesheet" href="/path/to/default/style.css"
     * type="text/css"> (end code)
     */  
	ResourceURI : "/",
	/**
	 * Constant: VERSION_NUMBER
	 */
	VERSION_NUMBER : "Release 2.13 dev",

    /**
	 * Method: _getScriptLocation Return the path to this script. This is also
	 * implemented in OpenLayers.js
	 * 
	 * Returns: {String} Path to this script
	 */

	_getScriptLocation: function(scriptName) {
	    var regPattern = "(^|(.*?\\/))("+scriptName+"[^\\/]*?\\.js)(\\?|$)";
        var r = new RegExp(regPattern),
            s = document.getElementsByTagName('script'),
            src, m, l = "";
        for(var i=0, len=s.length; i<len; i++) {
            src = s[i].getAttribute('src');
            if(src) {
                m = src.match(r);
                if(m) {
                    l = m[1];
                    break;
                }
            }
        }
        return l;
   },
   
   getResourcePath : function(){
   	 return cityways.options.ResourceURI +"themes/" + cityways.options.Theme + "/";
   },
   
   getBrowserName : function(browser){
       var name = null;
       $.each(browser, function(i, val) {
           if(i != "version")
            {
                name = i;
                return false;
            }
        });
       return name;
   },
   
   getCurrentBrowserName : function(){
       return cityways.options.getBrowserName($.browser);
   }

};
/**
 * Функция инициализации
 */
(function() {
    cityways.options.ResourceURI = cityways.options._getScriptLocation("MainPage");
    cityways.log(cityways.options.ResourceURI);
})();
  