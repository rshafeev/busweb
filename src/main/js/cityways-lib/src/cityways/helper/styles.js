/**
 * @overview namespace cityways.helper.styles
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/cityways.js
 * @requires cityways/util.js
 */

 /**
 * @namespace cityways.helper.styles
 * @description Включает в себя вспомогательные функции для работы со стилями. 
 */
 cityways.helper.styles = {

	/**
 	* Подключает css файл к текущему html документу
 	* @param  {String} cssFileName Путь к css файлу
 	* @return {void}            
 	*/
 	include : function(cssFileName) {
 		var css = "<link rel=\"stylesheet\" href=\"" + cssFileName + "\" type=\"text/css\">";
 		document.write(css);
 	},

	/**
	 * Подключает css файл к текущему html документу в зависимости от  браузера клиента
	 * @param {String} cssFiles Директория, в которой ле к css файлам
	 * @param {Object} cssOptions Хранит связь css файлов и поддерживаемых ими браузеров. 
	 * @return {String} Путь к подключенному css файлу
	 * @example Приведем пример выбора нужного css файла в зависимости от  браузера клиента
	 * var cssFiles = [
	 *         {
	 *             name : "style.css"
	 *         },
	 *         {
	 *             name : "style_ie7.css",
     *             browsers : {
     *                          "msie" : {min : 7.0}
     *                        },
	 *         {
	 *             name : "style_ff.css",
	 *             browsers : {
	 *                           "mozilla" :  {min : 7.0, max : 16.0}
	 *                        }
	 *         }];
	 * var cssFilename = cityways.helper.styles.includeCSSFile("media/css",cssFiles);
	 * // cssFilename = "media/css/style.css", если текущий браузер не ff и ie
	 * // cssFilename = "media/css/style_ie7.css", если текущий браузер ie7+
	 * // cssFilename = "media/css/style_ff.css", если текущий браузер ff версии [7.0, 16.0]
	 */
	 includeCSSFile : function(filePath, cssFiles) {
	 	var browser = {
	 		name : cityways.util.browser(),
	 		version : cityways.util.browserVersion()
	 	};
	 	var fileName =  cityways.helper.styles._selectCSSFile(cssFiles,browser);
	 	if(fileName == null)
	 		throw new Error("includeCSSFile() was not found css file");
	 	cityways.helper.styles.include(filePath + fileName);
	 	return filePath + fileName;
	 },

	/**
  	* Выбирает css файл в зафисимости от текущего браузера.
  	* @private
  	* @param  {Array}  cssFiles  		 Элементы массива хранят в себе названия сss-файлов и браузеры, которые они поддерживают.
 	* @param  {Object} browser 			 Информация о браузере. Хранит версию и название текущего браузера.
  	* Структура объекта: <br>
  	* {<br>
  	* 	name    : {String} <br>
  	* 	version : {Number} <br>
  	* }<br>
 	* @param  {String} browser.name      Тип браузера("msie", "mozilla").
 	* @param  {Number} browser.version   Версия браузера.
 	* @return {String} 					 Название css файла. 
 	* @example 
 	* // Пример входных параметров:
 	* 
 	* var browser  = {
 	*      name    : "msie",
 	*      version : 7.0
 	* };
 	* 
 	* var cssFiles = [
	*         {
	*             name : "style.css"
	*         },
	*         {
	*             name : "style_ie7.css",
    *             browsers : {
    *                          "msie" : {min : 7.0}
    *                        },
	*         {
	*             name : "style_ff.css",
	*             browsers : {
	*                           "mozilla" :  {min : 7.0, max : 16.0}
	*                        }
	*         }];
	* // Вызов функции:
	* 
	* var selectedFile = cityways.styles._selectCSSFile(cssFiles,browser);
 	*/
 	_selectCSSFile : function(cssFiles,browser) {
 		var defaultFile = null;
 		var selectedFile = null;
 		
 		for(var i=0; i < cssFiles.length; i++ ){

 			if(cssFiles[i].browsers == undefined &&   cssFiles[i].name != undefined){
 				defaultFile = cssFiles[i].name;
 			}
 			else if (cssFiles[i].browsers != undefined){

 				var cssBrowser = cssFiles[i].browsers[browser.name];
 				if(cssBrowser != undefined){
 					var min_v = cssBrowser.min;
 					var max_v = cssBrowser.max;
 					cityways.logger.debug("find",cssFiles[i]);
 		 				if( (min_v == undefined && max_v == undefined) ||
 							(min_v == undefined && max_v >= browser.version) ||
 							(max_v == undefined && min_v <= browser.version) ||
 							(min_v <= browser.version && max_v >= browser.version)){
 								selectedFile = cssFiles[i].name;
 						}
 				}
 			}
 		}
 		cityways.logger.debug(defaultFile);
 		if(selectedFile != undefined)
 			return selectedFile;
 		return defaultFile;
 	}
 };
