
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
				"cityways/cityways.js",
                "cityways/logger.js",
                "test/logger.js",
				"cityways/helper/time.js",
				"cityways/helper/styles.js",
				"cityways/helper/array.js",
				"cityways/language.js",
				"cityways/page.js",
				"cityways/options.js",
                "cityways/util.js",
				"cityways/Class.js",
				"cityways/page/MainPage.js",
				"cityways/model/Path.js",
				"cityways/page/main/SettingsPanel.js",
				    "cityways/page/main/WidgetEventHandlers.js",
				"cityways/template/html.js",
                "cityways/lang/ru.js",
                "cityways/lang/en.js",
                "cityways/lang/uk.js",
                "cityways/loader/PathsLoader.js",
                "cityways/loader/TemplatesLoader.js",
                "cityways/Map.js"
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
