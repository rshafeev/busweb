/**
 * @overview Namespace {@link cityways}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved.
 * CityWays-lib is free software, licensed under the MIT license.
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Marianna Roshchenko <mr@premiumgis.com>
 *
 */

/**
 * @namespace cityways
 * @public
 */
var cityways = {

    _initialized: false,

    /**
     * Версия библиотеки
     * @type {String}
     * @constant
     */
    VERSION_NUMBER: "Release 2.13 dev",


    /**
     * In addition to the mandatory C and P parameters, an arbitrary number of
     * objects can be passed, which will extend C.
     * @param  {[type]} C {Object} the class that inherits
     * @param  {[type]} P {Object} the superclass to inherit from
     */
    inherit: function (C, P) {

        var F = function () {
        };
        F.prototype = P.prototype;
        C.prototype = new F;
        var i, l, o;
        for (i = 2, l = arguments.length; i < l; i++) {
            o = arguments[i];
            if (typeof o === "function") {
                o = o.prototype;
            }
            cityways.extend(C.prototype, o);
        }
    },

    /**
     * [extend description]
     * @param  {[type]} destination [description]
     * @param  {[type]} source      [description]
     * @return {[type]}             [description]
     */
    extend: function (destination, source) {
        destination = destination || {};
        if (source) {
            for (var property in source) {
                var value = source[property];
                if (value !== undefined) {
                    destination[property] = value;
                }
            }


            /**
             * IE doesn't include the toString property when iterating over an
             * object's properties with the for(property in object) syntax.
             * Explicitly check if the source has its own toString property.
             */

            /*
             * FF/Windows < 2.0.0.13 reports "Illegal operation on WrappedNative
             * prototype object" when calling hawOwnProperty if the source
             * object is an instance of window.Event.
             */

            var sourceIsEvt = typeof window.Event == "function"
                && source instanceof window.Event;

            if (!sourceIsEvt && source.hasOwnProperty
                && source.hasOwnProperty("toString")) {
                destination.toString = source.toString;
            }
        }
        return destination;
    },

    /**
     * [alert description]
     * @param  {[type]} header  [description]
     * @param  {[type]} message [description]
     * @param  {[type]} type    [description]
     * @return {[type]}         [description]
     */
    alert: function (header, message, type) {
        alert(message);
    }
};

/**
 * @overview Namespace {@link cityways.logger}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved.
 * CityWays-lib is free software, licensed under the MIT license.
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Marianna Roshchenko <mr@premiumgis.com>
 *
 * @requires cityways.js
 */

/**
 * @private
 * @namespace
 * @description Содержит функции логгирования
 */
cityways.logger = {

    DEBUG_LEVEL: false,

    INFO_LEVEL: false,

    WARN_LEVEL: false,

    ERROR_LEVEL: false,

    /**
     * [info description]
     */
    info: function () {
    },

    /**
     * [debug description]
     */
    debug: function () {
    },

    /**
     * [warn description]
     */
    warn: function () {
    },
    error: function () {
    },

    setLevelMode: function (level, val) {
        if (level == "INFO_LEVEL") {
            if (val == true)
                cityways.logger.info = console.log.bind(console);
            else
                cityways.logger.info = function () {
                };
        }
        if (level == "DEBUG_LEVEL") {
            if (val == true)
                cityways.logger.debug = console.info.bind(console);
            else
                cityways.logger.debug = function () {
                };
        }
        if (level == "WARN_LEVEL") {
            if (val == true)
                cityways.logger.warn = console.warn.bind(console);
            else
                cityways.logger.warn = function () {
                };
        }
        if (level == "ERROR_LEVEL") {
            if (val == true)
                cityways.logger.error = console.error.bind(console);
            else
                cityways.logger.error = function () {
                };
        }
        cityways.logger[level] = val;
    }

};

/**
 * @requires cityways/cityways.js
 * @requires cityways/logger.js
 */


(function () {
    cityways.logger.setLevelMode("INFO_LEVEL", true);
    cityways.logger.setLevelMode("DEBUG_LEVEL", true);
    cityways.logger.setLevelMode("WARN_LEVEL", true);
    cityways.logger.setLevelMode("ERROR_LEVEL", true);
})();

/**
 * @overview Class {@link cityways.Class}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved.
 * CityWays-lib is free software, licensed under the MIT license.
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Marianna Roshchenko <mr@premiumgis.com>
 *
 * @requires cityways.js
 *
 */


/**
 * @class cityways.Class
 * @classdesc Осовной класс, с помощью которого можно сконструировать другой класс. Имеет поддержку
 * множественного наследования.
 * @description Ограничения:
 * 1) В создаваемом классе должна быть быть объйвлена функция initialize(args), которая будет выступать в роли конструктора
 * 2) В классе не должно быть инициализированных свойств. Инициализацию необходимо производить в конструкторе.
 * @example // Чтобы создать новый класс, необходимо использовать следующий синтаксис:
 *     var MyClass = cityways.Class(prototype);
 * @example // Чтобы создать класс с несколькими родителями, используйте следующий синтаксис:
 *     var MyClass = cityways.Class(Class1, Class2, prototype);
 * @example // Пример правильной инициализации свойств класса:
 *     var MyClass = cityways.Class(function(){
 *
 *         member1 : null, // оставляем свойство неинициализированным
 *
 *         initialize : function(args){
 *             this.member1 = []; // инициализация свойства member1
 *         }
 *     });
 */
cityways.Class = function (classDef) {
    var C = classDef.constructor;
    if (classDef.members != undefined) {
        C.prototype = classDef.members;
    }
    if (classDef.extends != undefined && classDef.extends.length > 0) {
        var newArgs = [C].concat(classDef.extends, classDef.members);
        cityways.inherit.apply(null, newArgs);
    }
    return C;
};

/**
 * @overview Class {@link cityways.BrowserDetect}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved.
 * CityWays-lib is free software, licensed under the MIT license.
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 *
 * @requires cityways/Class.js
 */

/**
 * Статический класс, хранит общие статические свойства
 */
/**
 * @class cityways.BrowserDetect
 */
cityways.BrowserDetect = cityways.Class({

    constructor: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
        || this.searchVersion(navigator.appVersion)
        || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },

    members: {

        browserDetect: null,

        versionSearchString: null,

        browser: null,

        version: null,

        OS: null,

        /**
         * [searchString description]
         * @memberOf cityways.BrowserDetect.prototype
         * @param  {[type]} data [description]
         * @return {[type]}      [description]
         */
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                }
                else if (dataProp)
                    return data[i].identity;
            }
        },


        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },

        dataBrowser: [
            {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            },
            {
                string: navigator.userAgent,
                subString: "OmniWeb",
                versionSearch: "OmniWeb/",
                identity: "OmniWeb"
            },
            {
                string: navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version"
            },
            {
                prop: window.opera,
                identity: "Opera",
                versionSearch: "Version"
            },
            {
                string: navigator.vendor,
                subString: "iCab",
                identity: "iCab"
            },
            {
                string: navigator.vendor,
                subString: "KDE",
                identity: "Konqueror"
            },
            {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            },
            {
                string: navigator.vendor,
                subString: "Camino",
                identity: "Camino"
            },
            {       // for newer Netscapes (6+)
                string: navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
            },
            {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
                versionSearch: "MSIE"
            },
            {
                string: navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
            },
            {       // for older Netscapes (4-)
                string: navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
            }
        ],
        dataOS: [
            {
                string: navigator.platform,
                subString: "Win",
                identity: "Windows"
            },
            {
                string: navigator.platform,
                subString: "Mac",
                identity: "Mac"
            },
            {
                string: navigator.userAgent,
                subString: "iPhone",
                identity: "iPhone/iPod"
            },
            {
                string: navigator.platform,
                subString: "Linux",
                identity: "Linux"
            }
        ]

    }
});

/**
 * @overview Namespace {@link cityways.options}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved.
 * CityWays-lib is free software, licensed under the MIT license.
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Marianna Roshchenko <mr@premiumgis.com>
 *
 * @requires cityways.js
 */

/**
 * Хранит глобальные настройки
 * @namespace cityways.options
 */
cityways.options = {

    /**
     * Хост сервера cityways
     */
    ServerHost: "http://ways.in.ua",

    /**
     * Название темы
     * @type {String}
     */
    Theme: "default",

    /**
     * [ResourceURI description]
     * @type {String}
     */
    ResourceURI: "/",


    getResourcePath: function () {
        return cityways.options.ResourceURI + "themes/" + cityways.options.Theme + "/";
    }


};


/**
 * @overview Namespace {@link cityways.util}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved.
 * CityWays-lib is free software, licensed under the MIT license.
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Marianna Roshchenko <mr@premiumgis.com>
 *
 * @requires cityways/BrowserDetect.js
 * @requires cityways/options.js
 */

/**
 * @namespace cityways.util
 */
cityways.util = {

    _browserDetec: null,

    browserVersion: function () {
        if (cityways.util._browserDetec == null) {
            cityways.util._browserDetec = new cityways.BrowserDetect();
        }
        return cityways.util._browserDetec.version;
    },

    browser: function () {
        if (cityways.util._browserDetec == null) {
            cityways.util._browserDetec = new cityways.BrowserDetect();
        }
        return cityways.util._browserDetec.browser;
    },


    /**
     * Возвращает uri-путь к скрипту
     * @param  {String} scriptName Имя файла скрипта
     * @return {String}            URI путь к скрипту
     */
    getScriptLocation: function (scriptName) {
        var regPattern = "(^|(.*?\\/))(" + scriptName + "[^\\/]*?\\.js)(\\?|$)";
        var r = new RegExp(regPattern),
            s = document.getElementsByTagName('script'),
            src, m, l = "";
        for (var i = 0, len = s.length; i < len; i++) {
            src = s[i].getAttribute('src');
            if (src) {
                m = src.match(r);
                if (m) {
                    l = m[1];
                    break;
                }
            }
        }
        return l;
    },

    /**
     * [getWindowSize description]
     * @return {[type]} [description]
     */
    getWindowSize: function () {
        var myWidth = 0, myHeight = 0;
        if (typeof (window.innerWidth) == 'number') {
            // Non-IE
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if (document.documentElement
            && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
            // IE 6+ in 'standards compliant mode'
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if (document.body
            && (document.body.clientWidth || document.body.clientHeight)) {
            // IE 4 compatible
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
        return {
            height: myHeight,
            width: myWidth
        };
    }


};


/**
 * @overview Namespace {@link cityways.helper}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved.
 * CityWays-lib is free software, licensed under the MIT license.
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Marianna Roshchenko <mr@premiumgis.com>
 *
 * @requires cityways.js
 */

/**
 * @namespace cityways.helper
 */
cityways.helper = {};
/**
 * @overview Namespace {@link cityways.helper.time}.
 * @see Project url <a href="http://ways.in.ua">ways.in.ua</a>
 * @copyright
 * CityWays-lib is copyright (c) 2012, <a href="http://premiumgis.com">PremiumGIS</a> Inc. All Rights Reserved.
 * CityWays-lib is free software, licensed under the MIT license.
 * See the file <a href="http://api.ways.in.ua/license.txt">license.txt</a> in this distribution for more details.
 * @author Marianna Roshchenko <mr@premiumgis.com>
 *
 * @requires cityways/helper.js
 */


/**
 * @namespace cityways.helper.time
 */
cityways.helper.time = {

    /**
     * @param secs {Number} int[0,3600*24]
     * @return {String} [description]
     */
    secsToLocaleString: function (secs) {

        var h = parseInt(secs / 3600);
        var m = parseInt((secs - h * 3600) / 60);
        if (h == 0) {
            return cityways.helper.time.minsOfHourToLocaleString(m);
        }
        return cityways.helper.time.hoursToLocaleString(h) + " " + cityways.helper.time.minsOfHourToLocaleString(m);

    },

    /**
     * @param mins {Number} int [0,60]
     * @return {String}     [description]
     */
    minsOfHourToLocaleString: function (mins) {

        // минут
        if (mins >= 10 && mins <= 20) {
            return mins + " " + cityways.lang.translate("time.minutes10");
        }

        var ostatok = mins % 10;
        // минута
        if (ostatok <= 1) {
            return mins + " " + cityways.lang.translate("time.minute");
        }
        // минуты
        if (ostatok > 1 && ostatok < 5) {
            return mins + " " + cityways.lang.translate("time.minutes");
        }
        // минут
        return mins + " " + cityways.lang.translate("time.minutes_ru");

    },

    /**
     * @param mins {Number} int [0,24]
     * @return {String} [description]
     */
    hoursToLocaleString: function (hours) {
        //часов
        if (hours >= 5 && hours <= 20) {
            return hours + " " + cityways.lang.translate("time.hours");
        }
        var ostatok = hours % 10;
        //час
        if (ostatok == 1) {
            return hours + " " + cityways.lang.translate("time.hour");
        }

        //часа
        if (ostatok >= 2 && ostatok < 5) {
            return hours + " " + cityways.lang.translate("time.hours_ru");
        }

        return hours + " " + cityways.lang.translate("time.hours");

    }

};

/**
 * @overview Namespace {@link cityways.helper.document}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved.
 * CityWays-lib is free software, licensed under the MIT license.
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Marianna Roshchenko <mr@premiumgis.com>
 *
 * @requires cityways/helper.js
 */

/**
 * Включает в себя вспомогательные функции для работы со стилями.
 * @namespace cityways.helper.document
 */
cityways.helper.document = {

    /**
     * Подключает css файл к текущему html документу
     * @param  {String} cssFileName Путь к css файлу
     * @param  {String} method Способ записи в документ. "write" - запись с помощью document.write(). "inner" - с помощью функции document.innerHtml
     * @return {void}
     */
    appendCSSFile: function (cssFileName, method) {
        cityways.logger.debug(method, cssFileName);
        var css = "<link rel=\"stylesheet\" href=\"" + cssFileName + "\" type=\"text/css\">";
        if (method == "write" && (document.readyState == undefined || (document.readyState != "interactive" &&
            document.readyState != "complete")))
            document.write(css);
        else if (method == "inner") {
            var h = document.getElementsByTagName('head');
            if (h != undefined && h.length > 0) {
                var link = document.createElement('link');
                link.setAttribute('type', 'text/css');
                link.setAttribute('rel', 'stylesheet');
                link.setAttribute('href', cssFileName);
                h[0].appendChild(link);
            }
        }
    },

    appendJSFile: function (jsFileName, method) {
        var scriptFile = "<script type=\"text/javascript\" src=\"" + jsFileName + "\"></script>";

    },

    selectCSSFile: function (filePath, cssFiles) {
        var browser = {
            name: cityways.util.browser(),
            version: cityways.util.browserVersion()
        };
        var fileName = cityways.helper.document._selectCSSFile(cssFiles, browser);
        if (fileName == null)
            throw new Error("includeCSSFile() was not found css file");
        return filePath + fileName;
    },

    /**
     * Выбирает css файл в зафисимости от текущего браузера.
     * @private
     * @param  {Array}  cssFiles         Элементы массива хранят в себе названия сss-файлов и браузеры, которые они поддерживают.
     * @param  {Object} browser             Информация о браузере. Хранит версию и название текущего браузера.
     * @param  {String} browser.name      Тип браузера("msie", "mozilla").
     * @param  {Number} browser.version   Версия браузера.
     * @return {String}                     Название css файла.
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
    _selectCSSFile: function (cssFiles, browser) {
        var defaultFile = null;
        var selectedFile = null;

        for (var i = 0; i < cssFiles.length; i++) {

            if (cssFiles[i].browsers == undefined && cssFiles[i].name != undefined) {
                defaultFile = cssFiles[i].name;
            }
            else if (cssFiles[i].browsers != undefined) {

                var cssBrowser = cssFiles[i].browsers[browser.name];
                if (cssBrowser != undefined) {
                    var min_v = cssBrowser.min;
                    var max_v = cssBrowser.max;
                    if ((min_v == undefined && max_v == undefined) ||
                        (min_v == undefined && max_v >= browser.version) ||
                        (max_v == undefined && min_v <= browser.version) ||
                        (min_v <= browser.version && max_v >= browser.version)) {
                        selectedFile = cssFiles[i].name;
                    }
                }
            }
        }

        if (selectedFile != undefined)
            return selectedFile;
        return defaultFile;
    }
};

/**
 * @overview Namespace {@link cityways.helper.array}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved.
 * CityWays-lib is free software, licensed under the MIT license.
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Marianna Roshchenko <mr@premiumgis.com>
 *
 * @requires cityways/helper.js
 */

/**
 * @namespace cityways.helper.array
 */
cityways.helper.array = {

    /**
     * Проверяет, есть ли указанный элемент elem в массиве arr.
     * @param  {Array<String>}   arr  Массив.
     * @param  {Object}          elem Объект, который ищется в массиве arr.
     * @return {Boolean}         Возвращает True, если объект найден в массиве, иначе False.
     */
    isExistElement: function (arr, elem) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].toString() == elem.toString()) {
                return true;
            }

        }
        return false;
    }

};


/**
 * @requires cityways.js
 * @requires cityways/util.js
 * @requires cityways/options.js
 */