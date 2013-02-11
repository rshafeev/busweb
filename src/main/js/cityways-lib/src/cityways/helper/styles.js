/**
 * @requires cityways/cityways.js
 * @requires cityways/util.js
 */


cityways.helper.styles = {

	include : function(cssFileName) {
		var css = "<link rel=\"stylesheet\" href=\"" + cssFileName + "\" type=\"text/css\">";
		document.write(css);
	},

	/**
	 * 
	 * 
	 * @param options
	 * Example:
	 * cssOptions = [
	 *         {
	 *             name : "style.css"
	 *         },
	 *         {
	 *             name : "style_ie7.css",
     *             browsers : {
     *                          "mozilla" : {min : "1.7.12", max : "1.9"}
     *                        },
	 *         {
	 *             name : "style_ff.css",
	 *             browsers : {
	 *                           "msie" :  {max : "7.0"},
	 *                           "opera" : {min : "8.0", max : "10.06"}
	 *                        }
	 *         }];
	 * 
	 * 
	 */
	includeCSSFile : function(filePath, cssOptions) {
        var fileName =  cityways.helper.Styles._selectCSSFile(cssOptions,$.browser);
        if(fileName == null)
            throw new Error("includeCSSFile() was not found css file");
        cityways.helper.Styles.include(filePath + fileName);
	},
	
	/**
	 * Выбирает css файл в зафисимости от текущего браузера
 * @param  {Object} cssFiles
 * @param  {Object} browser Информация о браузере. Хранит версию и название текущего браузера
 * browser = {
 *     "msie" : true,
 *      version : 7.0
 * };
 * @return {String} название css файла 

 * О возможных названиях браузеров и версия см. http://jquery-docs.ru/utilities/jquery-browser/
 * */
	_selectCSSFile : function(cssFiles,browser){
	     var defaultFile = null;
	     var selectedFile = null;
	     var browserName = cityways.Basic.getBrowserName(browser);
         
	     for(var i=0;i < cssFiles.length; i++ ){
         if(cssFiles[i].browsers === undefined || cssFiles[i].browsers == null ){
                   defaultFile = cssFiles[i];
         }
               else{
                   for(var j = 0; j  < cssFiles[i].browsers.length; j++ ){
                       var bname = cssFiles[j].browsers[j].name;
                       var min_v = cssFiles[j].browsers[j].min;
                       var max_v = cssFiles[j].browsers[j].max;
                       if(bname == browserName){
                           selectedFile =  selectedFile;
                                
                       }
                   }
               }
               
        }
        
        return defaultFile;
      
	}
};
