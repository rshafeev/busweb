
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
		jsFiles = [
				"cityways/Namespace.js",
				"cityways/Console.js",
                "cityways/Basic.js",
                "cityways/type/Class.js"
                
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
