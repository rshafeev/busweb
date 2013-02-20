
(function() {
	
	var singleFile =  true; 
	if (window.cityways === undefined)
	  singleFile = false;
	function _getScriptLocation(scriptName) {
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
    }


	
	if(!singleFile) {
		var jsFiles = [
                                     "cityways.js",
                                     "cityways/logger.js",
                                     "test/logger.js",
                                     "cityways/Class.js",
                                     "cityways/BrowserDetect.js",
                                     "cityways/options.js",
                                     "cityways/util.js",
                                     "cityways/helper.js",
                                     "cityways/helper/time.js",
                                     "cityways/helper/document.js",
                                     "cityways/helper/array.js",
                                     "cityways_ext.js",
                                     "cityways/type.js",
                                     "cityways/type/Dictionary.js",
                                     "cityways/type/ObjectDictionary.js",
                                     "cityways/type/StringDictionary.js",
                                     "cityways/lang.js",
                                     "cityways/lang/ru.js",
                                     "cityways/lang/en.js",
                                     "cityways/lang/uk.js",
                                     "cityways/event.js",
                                     "cityways/EventListener.js",
                                     "cityways/Map.js",
                                     "cityways/MapWidget.js",
                                     "cityways/maps.js",
                                     "cityways/maps/GoogleMapProvider.js",
                                     "cityways/maps/Marker.js",
                                     "cityways/page.js",
                                     "cityways/page/SearchPage.js",
                                     "cityways/page/search.js",
                                     "cityways/page/search/SettingsPanel.js",
                                     "cityways/page/search/WidgetEventHandlers.js",
                                     "cityways/model.js",
                                     "cityways/model/Path.js",
                                     "cityways/template.js",
                                     "cityways/template/html.js",
                                     "cityways/loader.js",
                                     "cityways/loader/PathsLoader.js",
                                     "cityways/loader/TemplatesLoader.js"
                ];

		var scriptTags = new Array(jsFiles.length);
        
        var host = _getScriptLocation("CityWays") + "/";
        for (var i=0, len=jsFiles.length; i<len; i++) {
            scriptTags[i] = "<script src='" + host + jsFiles[i] +
                                   "'></script>"; 
        }


        if (scriptTags.length > 0) {
            document.write(scriptTags.join(""));
        }
        
	};
})();
