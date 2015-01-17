/*
 CityWays JS Library
 */


/**

 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
/* ======================================================================
 cityways/Namespace.js
 ====================================================================== */

/* Copyright (c) 2006-2012 by OpenLayers Contributors (see authors.txt for
 * full list of contributors). Published under the 2-clause BSD license.
 * See license.txt in the OpenLayers distribution or repository for the
 * full text of the license. */

/**
 * Определим все namespace
 */

var cityways = {
    lang: {},
    loader: {},
    page: {},
    type: {},
    widget: {},
    template: {},
    model: {},
    helper: {}
};

cityways.page = {
    main: {},
    routes: {}
};


/* ======================================================================
 test/TestConsole.js
 ====================================================================== */


/**
 * @requires cityways/Namespace.js
 */

cityways.Console = {
    log: console.log.bind(console),

    warn: console.warn.bind(console)
};


/* ======================================================================
 cityways/helper/Time.js
 ====================================================================== */

/**
 * @requires cityways/Namespace.js
 */


cityways.helper.Time = {

    /**
     * @secs int[0,3600*24]
     * @return
     */
    secsToLocaleString: function (secs) {

        var h = parseInt(secs / 3600);
        var m = parseInt((secs - h * 3600) / 60);
        if (h == 0) {
            return cityways.helper.Time.minsOfHourToLocaleString(m);
        }

        if (m == 0) {
            return cityways.helper.Time.hoursToLocaleString(h);
        }
        return cityways.helper.Time.hoursToLocaleString(h) + " " + cityways.helper.Time.minsOfHourToLocaleString(m);

    },

    /**
     * @mins int [0,60]
     */ minsOfHourToLocaleString: function (mins) {

        // минут
        if (mins >= 10 && mins <= 20) {
            return mins + " " + cityways.Language.translate("time.minutes10");
        }

        var ostatok = mins % 10;
        // минута
        if (ostatok <= 1) {
            return mins + " " + cityways.Language.translate("time.minute");
        }
        // минуты
        if (ostatok > 1 && ostatok < 5) {
            return mins + " " + cityways.Language.translate("time.minutes");
        }
        // минут
        return mins + " " + cityways.Language.translate("time.minutes_ru");

    },

    /**
     * @mins int [0,24]
     */ hoursToLocaleString: function (hours) {

        //часов
        if (hours >= 5 && hours <= 20) {
            return hours + " " + cityways.Language.translate("time.hours");
        }
        var ostatok = hours % 10;
        //час
        if (ostatok == 1) {
            return hours + " " + cityways.Language.translate("time.hour");
        }

        //часа
        if (ostatok >= 2 && ostatok < 5) {
            return hours + " " + cityways.Language.translate("time.hours_ru");
        }

        return hours + " " + cityways.Language.translate("time.hours");

    }

};
/* ======================================================================
 cityways/Language.js
 ====================================================================== */

/* Copyright (c) 2006-2012 by OpenLayers Contributors (see authors.txt for 
 * full list of contributors). Published under the 2-clause BSD license.
 * See license.txt in the OpenLayers distribution or repository for the
 * full text of the license. */

/**
 * @requires cityways/Namespace.js
 */

/**
 * Статический класс
 */
cityways.Language = {

    /**
     * Property: code
     * {String}  Current language code to use in OpenLayers.  Use the
     *     <setCode> method to set this value and the <getCode> method to
     *     retrieve it.
     */
    code: null,

    /**
     * APIProperty: defaultCode
     * {String} Default language to use when a specific language can't be
     *     found.  Default is "en".
     */
    defaultCode: "ru",

    /**
     * APIFunction: getCode
     * Get the current language code.
     *
     * Returns:
     * {String} The current language code.
     */
    getCode: function () {
        if (!cityways.Language.code) {
            cityways.Language.setCode();
        }
        return cityways.Language.code;
    },

    /**
     * APIFunction: setCode
     * Set the language code for string translation.  This code is used by
     *     the <OpenLayers.Lang.translate> method.
     *
     * Parameters:
     * code - {String} These codes follow the IETF recommendations at
     *     http://www.ietf.org/rfc/rfc3066.txt.  If no value is set, the
     *     browser's language setting will be tested.  If no <OpenLayers.Lang>
     *     dictionary exists for the code, the <OpenLayers.String.defaultLang>
     *     will be used.
     */
    setCode: function (code) {
        var lang;
        if (!code) {
            code = (cityways.BROWSER_NAME == "msie") ?
                navigator.userLanguage : navigator.language;
        }
        var parts = code.split('-');
        parts[0] = parts[0].toLowerCase();
        if (typeof cityways.lang[parts[0]] == "object") {
            lang = parts[0];
        }

        // check for regional extensions
        if (parts[1]) {
            var testLang = parts[0] + '-' + parts[1].toUpperCase();
            if (typeof cityways.lang[testLang] == "object") {
                lang = testLang;
            }
        }
        if (!lang) {
            cityways.Console.warn(
                'Failed to find cityways.Lang.' + parts.join("-") +
                ' dictionary, falling back to default language'
            );
            lang = cityways.Language.defaultCode;
        }

        cityways.Language.code = lang;
    },

    /**
     * APIMethod: translate
     * Looks up a key from a dictionary based on the current language string.
     *     The value of <getCode> will be used to determine the appropriate
     *     dictionary.  Dictionaries are stored in <OpenLayers.Lang>.
     *
     * Parameters:
     * key - {String} The key for an i18n string value in the dictionary.
     * context - {Object} Optional context to be used with
     *     <OpenLayers.String.format>.
     *
     * Returns:
     * {String} A internationalized string.
     */
    translate: function (key) {
        var dictionary = cityways.lang[cityways.Language.getCode()];
        var message = dictionary && dictionary[key];
        if (!message) {
            message = key;
        }
        return message;
    }


};

/* ======================================================================
 cityways/Page.js
 ====================================================================== */


/**
 * @requires cityways/Namespace.js
 */

/**
 * Header: OpenLayers Base Types
 * OpenLayers custom string, number and function functions are described here.
 */

/**
 * Namespace: cityways.Pages
 * Contains convenience functions for string manipulation.
 */

cityways.Page = {

    /**
     * Текущая страница
     */
    Current: null,

    /**
     *
     * @return Обработчик событий виджетов текущей страницы
     */
    Events: function () {
        return cityways.Page.Current.getWidgetEventHandlers();
    }


};
/* ======================================================================
 cityways/Util.js
 ====================================================================== */

/**
 * @requires cityways/Namespace.js
 */

cityways.Util = {

    /**
     * Function: inherit
     *
     * Parameters: C - {Object} the class that inherits P - {Object} the
     * superclass to inherit from
     *
     * In addition to the mandatory C and P parameters, an arbitrary number of
     * objects can be passed, which will extend C.
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
            cityways.Util.extend(C.prototype, o);
        }
    },

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
    }

};
/* ======================================================================
 cityways/type/Class.js
 ====================================================================== */

/* Copyright (c) 2006-2012 by OpenLayers Contributors (see authors.txt for 
 * full list of contributors). Published under the 2-clause BSD license.
 * See license.txt in the OpenLayers distribution or repository for the
 * full text of the license. */

/**
 * @requires cityways/Namespace.js
 */

/**
 * Constructor: cityways.Class
 * Base class used to construct all other classes. Includes support for
 *     multiple inheritance.
 *
 * This constructor is new in OpenLayers 2.5.  At OpenLayers 3.0, the old
 *     syntax for creating classes and dealing with inheritance
 *     will be removed.
 *
 * To create a new OpenLayers-style class, use the following syntax:
 * (code)
 *     var MyClass = cityways.Class(prototype);
 * (end)
 *
 * To create a new OpenLayers-style class with multiple inheritance, use the
 *     following syntax:
 * (code)
 *     var MyClass = OpenLayers.Class(Class1, Class2, prototype);
 * (end)
 *
 * Note that instanceof reflection will only reveal Class1 as superclass.
 *
 */
cityways.type.Class = function () {
    var len = arguments.length;
    var P = arguments[0];
    var F = arguments[len - 1];

    var C = typeof F.initialize == "function" ?
        F.initialize :
        function () {
            P.prototype.initialize.apply(this, arguments);
        };

    if (len > 1) {
        var newArgs = [C, P].concat(
            Array.prototype.slice.call(arguments).slice(1, len - 1), F);
        cityways.Util.inherit.apply(null, newArgs);
    } else {
        C.prototype = F;
    }
    return C;
};

/* ======================================================================
 cityways/page/MainPage.js
 ====================================================================== */

/**
 * @requires cityways/type/Class.js
 */

/**
 * Class: cityways.Pages.MainPage
 */
cityways.page.MainPage = cityways.type.Class({

    /**
     * Видимость правой панели
     */
    rightPanelVisible: null,

    /**
     * cityways.Pages.MainPage.RouteTypesPanel Панель "Виды транспорта"
     */
    settingsPanel: null,

    widgetEventHandlers: null,

    currentCity: null,

    /**
     *
     * @param {Object}
     *            options
     */
    initialize: function (options) {
        cityways.Console.log(this);
        cityways.Console.log('MainPage was initialized!!');

        this.currentCity = options.currentCity;
        this.widgetEventHandlers = new cityways.page.main.WidgetEventHandlers();
        this.settingsPanel = new cityways.page.main.SettingsPanel({
            availableRouteTypes: options.routeTypes
        });

        this.visibleRightPanel(false);
    },

    getCurrentCity: function () {
        return this.currentCity;
    },

    getWidgetEventHandlers: function () {
        return this.widgetEventHandlers;
    },

    getSettingsPanel: function () {
        return this.settingsPanel;
    },

    getPathsOptions: function () {
        var city = this.getCurrentCity();
        var isTransitions = true;
        var alg_type = "c_time";
        var usage_routeTypes = [];

        if (isTransitions == true) {
            usage_routeTypes.push({
                discount: 1.0,
                route_type_id: "c_route_transition"
            });
        }

        usage_routeTypes.push({
            discount: 1.0,
            route_type_id: "c_route_station_input"
        });
        usage_routeTypes.push({
            discount: 1.0,
            route_type_id: "c_route_station_output"
        });
        usage_routeTypes.push({
            discount: 0.5,
            route_type_id: "c_route_metro"
        });
        usage_routeTypes.push({
            discount: 1.0,
            route_type_id: "c_route_bus"
        });
        usage_routeTypes.push({
            discount: 1.0,
            route_type_id: "c_route_trolley"
        });

        var opts = {
            cityID: city.id,
            p1: {
                lat: 50.0253640226659,
                lon: 36.3350757963562
            },
            p2: {
                lat: 50.0353179327227,
                lon: 36.2199825018311
            },
            outTime: {
                dayID: 'c_Sunday',
                timeStart: 1000 * (10 * 60 * 60 + 10 * 60)
            },
            algStrategy: alg_type,
            usageRouteTypes: usage_routeTypes
        };
        return opts;

    },

    /**
     *
     * @param {bool}
     *            true: show, false : hide
     */
    visibleRightPanel: function (value) {
        var ResourceURI = cityways.Basic.ResourceURI;
        if (this.rightPanelVisible == value)
            return;
        if (value == true) {
            $("#map_canvas").width('68%').css({
                cursor: "auto",
                backgroundColor: "rgb(226, 226, 226)"
            });

            document.img.src = ResourceURI + 'themes/default/images/arrow_right.png';

        } else {
            $("#map_canvas").width('98.5%').css({
                cursor: "auto",
                backgroundColor: "rgb(226, 226, 226)"
            });

            document.img.src = ResourceURI + 'themes/default/images/arrow_left.png';
        }
        this.rightPanelVisible = value;

    }
});
/* ======================================================================
 cityways/model/Path.js
 ====================================================================== */


cityways.model.Path = cityways.type.Class({

    pathID: null,

    input: null,

    out: null,

    transitions: [],

    routes: [],
    /**
     *
     * @param {Object}
     *            mainPage
     */
    initialize: function (pathData) {
        cityways.Util.extend(this, pathData);

    },

    /**
     * Возвращает стоимть пути
     */
    getFullCost: function () {
        if (this.routes == null)
            return 0.0;
        var cost = 0.0;
        for (var i = 0; i < this.routes.length; i++) {
            cost += this.routes[i].cost;
        }
        /*Отформатируем строку*/
        return cost;
    },

    /**
     * Возвращает время передвижения пешком, String
     */
    getWalkingTime: function () {
        var time = 0.0;
        for (var i = 0; i < this.transitions.length; i++) {
            time += this.transitions[i].moveTimeSecs;
        }
        time += this.input.moveTimeSecs;
        time += this.out.moveTimeSecs;
        return cityways.helper.Time.secsToLocaleString(time);
    },

    getStationName: function () {
        return this.routes[0].stationA;
        ;
        /*if (this.routes == null)
         return 0.0;
         var station = "";
         for (var i = 0; i < this.routes.length; i++) {
         station += this.routes[i].stationA;
         }

         return station;*/
    }

});
/* ======================================================================
 cityways/page/main/SettingsPanel.js
 ====================================================================== */


/**
 * @requires cityways/type/Class.js
 */

/**
 * Class:
 */
cityways.page.main.SettingsPanel = cityways.type.Class({

    /**
     * Список возможных типов маршрутов, по которым ведется поиск,String[]
     * Возможные значения: ['c_route_bus', 'c_route_metro',...]
     */
    availableRouteTypes: null,

    /**
     *
     * @param {Object}
     *            mainPage
     */
    initialize: function (options) {
        // Найдем в dom все типы маршрутов
        this.availableRouteTypes = options.availableRouteTypes;
    },


    getEnabledRouteTypes: function () {
        console.log(this.availableRouteTypes);
        // $("mini_table_transp_list").a

    },

    /**
     *
     * @param {String} routeType  Тип маршрута
     * @param {Bool} val вкл/выкл
     * @param {String} title Надпись
     */
    enableRouteTypeBtn: function (routeType, val, title) {
        this.getEnabledRouteTypes();
        var ResourceURI = cityways.Basic.ResourceURI;
        var elem = this._getRouteTypeBtnHtmlElement(routeType);
        var img = elem.find("img").get(0);
        var imgFileName = ResourceURI
            + 'media/css/images/route_types/32/' + routeType;
        //elem.title = title; 
        if (val == true) {
            img.src = imgFileName + '_selected.png';
        } else {
            img.src = imgFileName + '.png';
        }

    },

    _getRouteTypeBtnHtmlElement: function (routeType) {
        console.log($("#cways_menu_route_btn_" + routeType));
        return $("#cways_menu_route_btn_" + routeType);
    },

    isEnabledRouteTypeBtn: function (routeType) {
        var elem = this._getRouteTypeBtnHtmlElement(routeType);
        var ResourceURI = cityways.Basic.ResourceURI;
        var img = elem.find("img").get(0);
        var imgFileName = ResourceURI
            + 'media/css/images/route_types/32/' + routeType;

        if (img.src.indexOf(imgFileName + '.png') != -1) {
            return false;
        } else {
            return true;
        }
    }


});
/* ======================================================================
 cityways/page/main/WidgetEventHandlers.js
 ====================================================================== */

/**
 * @requires cityways/type/Class.js
 *
 */

/**
 * Class: cityways.Pages.MainPage.WidgetEventHandlers
 */
cityways.page.main.WidgetEventHandlers = cityways.type.Class({

    /**
     *
     * @param {Object}
     *            mainPage
     */
    initialize: function () {

    },

    onRouteTypeClick: function (self, routeType, includeTitle,
                                excludeTitle) {
        var page = cityways.Page.Current;
        if (page.getSettingsPanel().isEnabledRouteTypeBtn(routeType) == true) {
            page.getSettingsPanel().enableRouteTypeBtn(routeType,
                false, includeTitle);
        } else {
            console.log("false");
            page.getSettingsPanel().enableRouteTypeBtn(routeType, true,
                excludeTitle);
        }

    },
    _onMakeRightPanelContent: function (self, data, templates) {
        var headersTemplate = templates["template-main-waysPanelHeader"];
        var infoTemplate = templates["template-main-waysPanelInfo"];
        //var detailInfoTemplate = templates["template-main-waysPanelInfo"];
        var paths = data.paths;
        var htmlBody = "";
        for (var i = 0; i < paths.length; i++) {
            var path = new cityways.model.Path(paths[i]);
            cityways.Console.log(path.getFullCost());
            var params = {
                index: i + 1,
                locale: cityways.Language.translate,
                cost: path.getFullCost(),
                time: path.getWalkingTime(),
                footTo: path.getStationName()
            };
            htmlBody = htmlBody + headersTemplate(params);
        }
        $('#panel_data').html(htmlBody);
    },

    _onLoadedPaths: function (self, e) {
        var data = e.data;
        var templates = {};
        var loadedTemplates = 0;
        var templatesCount = 2;
        var _this = this;

        cityways.template.HtmlTemplates.get(
            "template-main-waysPanelHeader", function (template) {
                loadedTemplates++;
                templates["template-main-waysPanelHeader"] = template;
                if (loadedTemplates == templatesCount) {
                    _this._onMakeRightPanelContent(_this, data,
                        templates);
                }
            });

        cityways.template.HtmlTemplates.get(
            "template-main-waysPanelInfo", function (template) {
                loadedTemplates++;
                templates["template-main-waysPanelInfo"] = template;
                if (loadedTemplates == templatesCount) {
                    _this._onMakeRightPanelContent(_this, data,
                        templates);
                }
            });

        /*cityways.template.HtmlTemplates.get(
         "template-main-detailWaysPanelInfo", function(template) {
         loadedTemplates++;
         templates["template-main-detailWaysPanelInfo"] = template;
         if (loadedTemplates == templatesCount) {
         _this._onMakeRightPanelContent(_this, data,
         templates);
         }
         });*/

    },

    onFindBtnClick: function () {
        var page = cityways.Page.Current;
        var options = page.getPathsOptions();

        var el = document.getElementById('ways_panel');
        if (options == null)
            return;
        el.style.display = 'block';
        var loadGif = cityways.Basic.getResourcePath()
            + "images/load.gif";
        $('#panel_data').html("<div class='loader_text'><img src='"
        + loadGif + "'/></div>");
        $('#panel_scrollbar').tinyscrollbar_update();
        page.visibleRightPanel(true);
        var _this = this;
        cityways.Console.log("onFindBtnClick");
        var loader = new cityways.loader.PathsLoader();
        loader.findShortestPaths(options, function (e) {
            cityways.Console.log("findShortestPaths");
            _this._onLoadedPaths(_this, e);
        });

    },

    on_selectDetailWay: function (way_ind) {
        cityways.Console.log("OK");
    }
});
/* ======================================================================
 cityways/Console.js
 ====================================================================== */

/**
 * @requires cityways/Namespace.js
 */

if (cityways.Console === undefined) {

    cityways.Console = {
        log: function () {
        }
    };

}
/* ======================================================================
 cityways/template/HtmlTemplates.js
 ====================================================================== */


/**
 * @requires cityways/Console.js
 */

/**
 * Статический класс, хранит общие статические свойства
 */
cityways.template.HtmlTemplates = {

    _templates: {},

    /**
     * Возвращает html шаблон со словаря _templates. Если такой не сущействует,
     * пытается загрузить его с сервера Функция ассинхронная,
     *
     * @param {Object}
     *            templateName
     * @param {Object}
     *            callback
     */
    get: function (templateName, callback) {
        var templates = cityways.template.HtmlTemplates._templates;
        if (templates[templateName] === undefined) {
            var loader = new cityways.loader.TemplatesLoader();
            var fileName = cityways.template.HtmlTemplates._getFileNameByTemplateName(templateName);
            loader.loadHtmlTemplates(fileName, function (__templates) {
                cityways.Util.extend(templates, __templates);
                callback(templates[templateName]);
            });
        } else {
            callback(templates[templateName]);
        }

    },

    _getFileNameByTemplateName: function (templateName) {
        var templateName = new String(templateName);
        var regTemplate = /template\-/gi;
        var template = new String('template');
        var regDef = /-/;
        if (templateName == "") {
            return null;
        }
        if (!templateName.match(regTemplate) || !templateName.match(regDef)) {
            return null;
        }
        if (templateName.slice(0, 8) != template) {
            return null;
        } else {
            var slicetemplateName = templateName.slice(9);
            var to = slicetemplateName.search('-');
            var fileName = slicetemplateName.substring(0, to);
            return fileName;
        }
    }

};
/* ======================================================================
 CityWays.js
 ====================================================================== */


(function () {

    var singleFile = true;
    if (window.cityways === undefined)
        singleFile = false;
    function _getScriptLocation(scriptName) {
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
    }


    if (!singleFile) {
        var jsFiles = [
            "cityways/Namespace.js",
            "cityways/helper/Time.js",
            "cityways/Language.js",
            "cityways/Page.js",
            "cityways/Util.js",
            "cityways/type/Class.js",
            "cityways/page/MainPage.js",
            "cityways/model/Path.js",
            "cityways/page/main/SettingsPanel.js",
            "cityways/page/main/WidgetEventHandlers.js",
            "cityways/Console.js",
            "cityways/template/HtmlTemplates.js",
            "cityways/Basic.js",
            "cityways/lang/ru.js",
            "cityways/lang/en.js",
            "cityways/lang/uk.js",
            "cityways/loader/PathsLoader.js",
            "cityways/loader/TemplatesLoader.js",
            "cityways/WidgetMap.js"
        ];


        var scriptTags = new Array(jsFiles.length);
        var host = _getScriptLocation("CityWays") + "/";
        for (var i = 0, len = jsFiles.length; i < len; i++) {
            scriptTags[i] = "<script src='" + host + jsFiles[i] +
            "'></script>";
        }
        if (scriptTags.length > 0) {
            document.write(scriptTags.join(""));
        }

    }
    ;
})();
/* ======================================================================
 cityways/Basic.js
 ====================================================================== */


/**
 * @requires cityways/Console.js
 */

/**
 * Статический класс, хранит общие статические свойства
 */
cityways.Basic = {

    ServerHost: "http://ways.in.ua",

    Theme: "default",

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
    ResourceURI: "/",
    /**
     * Constant: VERSION_NUMBER
     */
    VERSION_NUMBER: "Release 2.13 dev",

    /**
     * Method: _getScriptLocation Return the path to this script. This is also
     * implemented in OpenLayers.js
     *
     * Returns: {String} Path to this script
     */

    _getScriptLocation: function (scriptName) {
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

    getResourcePath: function () {
        return cityways.Basic.ResourceURI + "themes/" + cityways.Basic.Theme + "/";
    }

};
/**
 * Функция инициализации
 */
(function () {
    cityways.Basic.ResourceURI = cityways.Basic._getScriptLocation("MainPage");
    cityways.Console.log(cityways.Basic.ResourceURI);
})();

/* ======================================================================
 cityways/lang/en.js
 ====================================================================== */

/**
 * @requires cityways/Namespace.js
 */

/**
 * Namespace: OpenLayers.Lang["en"]
 * Dictionary for English.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
cityways.lang.en = {
    'path_time': "Path time",
    'cost': "Coast",
    'time': "Path time",
    'UAH': "UAH",
    'time.minute': "minute",
    'time.minutes10': "minutes",
    'time.minutes': "minutes",
    'time.minutes_ru': "minutes",
    'time.hours': "hours",
    'time.hour': "hour",
    'time.hours_ru': "hours",
    'byFootToStation': "Go by foot to station",
    'timeFoot': "Time (by foot)",
    'distanceFoot': "Distance (by foot)",
    'interval': "Service interval",
    'distanceTransport': "Distance",
    'getIn': "Get on at station",
    'getOut': "Alight at station",
    'transfer': "Transfer",
    'transferFrom': "From station",
    'transferTo': "To station",

    'unhandledRequest': "Unhandled request return ${statusText}",

    'Permalink': "Permalink",

    'Overlays': "Overlays",

    'Base Layer': "Base Layer",

    'noFID': "Can't update a feature for which there is no FID.",

    'browserNotSupported': "Your browser does not support vector rendering. Currently supported renderers are:\n${renderers}",

    // console message
    'minZoomLevelError': "The minZoomLevel property is only intended for use " +
    "with the FixedZoomLevels-descendent layers. That this " +
    "wfs layer checks for minZoomLevel is a relic of the" +
    "past. We cannot, however, remove it without possibly " +
    "breaking OL based applications that may depend on it." +
    " Therefore we are deprecating it -- the minZoomLevel " +
    "check below will be removed at 3.0. Please instead " +
    "use min/max resolution setting as described here: " +
    "http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "WFS Transaction: SUCCESS ${response}",

    'commitFailed': "WFS Transaction: FAILED ${response}",

    'googleWarning': "The Google Layer was unable to load correctly.<br><br>" +
    "To get rid of this message, select a new BaseLayer " +
    "in the layer switcher in the upper-right corner.<br><br>" +
    "Most likely, this is because the Google Maps library " +
    "script was either not included, or does not contain the " +
    "correct API key for your site.<br><br>" +
    "Developers: For help getting this working correctly, " +
    "<a href='http://trac.openlayers.org/wiki/Google' " +
    "target='_blank'>click here</a>",

    'getLayerWarning': "The ${layerType} Layer was unable to load correctly.<br><br>" +
    "To get rid of this message, select a new BaseLayer " +
    "in the layer switcher in the upper-right corner.<br><br>" +
    "Most likely, this is because the ${layerLib} library " +
    "script was not correctly included.<br><br>" +
    "Developers: For help getting this working correctly, " +
    "<a href='http://trac.openlayers.org/wiki/${layerLib}' " +
    "target='_blank'>click here</a>",

    'Scale = 1 : ${scaleDenom}': "Scale = 1 : ${scaleDenom}",

    //labels for the graticule control
    'W': 'W',
    'E': 'E',
    'N': 'N',
    'S': 'S',
    'Graticule': 'Graticule',

    // console message
    'reprojectDeprecated': "You are using the 'reproject' option " +
    "on the ${layerName} layer. This option is deprecated: " +
    "its use was designed to support displaying data over commercial " +
    "basemaps, but that functionality should now be achieved by using " +
    "Spherical Mercator support. More information is available from " +
    "http://trac.openlayers.org/wiki/SphericalMercator.",

    // console message
    'methodDeprecated': "This method has been deprecated and will be removed in 3.0. " +
    "Please use ${newMethod} instead.",

    // **** end ****
    'end': ''

};
/* ======================================================================
 cityways/lang/uk.js
 ====================================================================== */

/**
 * @requires cityways/Namespace.js
 */

/**
 * Namespace: OpenLayers.Lang["en"] Dictionary for English. Keys for entries are
 * used in calls to <OpenLayers.Lang.translate>. Entry bodies are normal strings
 * or strings formatted for use with <OpenLayers.String.format> calls.
 */
cityways.lang.uk = {
    'path_time': "Час в дорозi",
    'cost': "Вартiсть:",
    'time': "Час у дорозi: ",
    'UAH': "грн",
    'time.minute': "хвилина",
    'time.minutes10': "хвилин",
    'time.minutes': "хвилини",
    'time.minutes_ru': "хвилин",
    'time.hours': "годин",
    'time.hour': "година",
    'time.hours_ru': "години",
    'byFootToStation': "Пiшки до станцii",
    'timeFoot': "Час (пiшки)",
    'distanceFoot': "Вiдстань (пiшки)",
    'interval': "iнтервал руху",
    'distanceTransport': "Вiдстань",
    'getIn': "Сiдати",
    'getOut': "Виходити",
    'transfer': "Пересадка",
    'transferFrom': "С зупинки",
    'transferTo': "На зупинку"

};
/* ======================================================================
 cityways/lang/ru.js
 ====================================================================== */

/**
 * @requires cityways/Namespace.js
 */

/**
 * Namespace: OpenLayers.Lang["en"]
 * Dictionary for English.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
cityways.lang.ru = {
    'path_time': "Время в пути",
    'cost': "Стоимость:",
    'time': "Время в пути: ",
    'UAH': "грн",
    'time.minute': "минута",
    'time.minutes10': "минут",
    'time.minutes': "минуты",
    'time.minutes_ru': "минут",
    'time.hours': "часов",
    'time.hour': "час",
    'time.hours_ru': "часа",
    'byFootToStation': "Пешком до станции",
    'timeFoot': "Время (пешком)",
    'distanceFoot': "Расстояние (пешком)",
    'interval': "Интервал движения",
    'distanceTransport': "Расстояние",
    'getIn': "Садиться",
    'getOut': "Выходить",
    'transfer': "Пересадка",
    'transferFrom': "С остановки",
    'transferTo': "На остановку"
};
/* ======================================================================
 cityways/loader/PathsLoader.js
 ====================================================================== */

/**
 * @requires cityways/type/Class.js
 */

cityways.loader.PathsLoader = cityways.type.Class({

    /**
     *
     * @param {Object}
     *            mainPage
     */
    initialize: function () {

    },

    /**
     *
     * @param {Object} options Опции, по которым будет производиться поиск крат. пути
     * var opts = {
            cityID : Integer,
            p1 : {
                lat : Double,
                lon : Double
            },
            p2 : {
                lat : Double,
                lon : Double
            },
            outTime : {
                dayID : 'c_Sunday',
                timeStart : Integer(secs)
            },
            algStrategy : 'c_time', 'c_cost',
            usageRouteTypes : [
               {
            discount : 1.0,
            route_type_id : "c_route_station_input"
        },
        ...
            ]
        };
     * @param {Object} resultFunc Callback функция
     */
    findShortestPaths: function (options, callback) {
        $.ajax({
            url: cityways.Basic.ServerHost + "/paths/find.json",
            type: "POST",
            data: {data: $.toJSON(options)},
            success: function (data) {
                cityways.Console.log("findShortestPaths");
                var obj = $.parseJSON(data);
                if (callback == null)
                    throw new Error("resultFunc was not defined");
                callback({
                    data: obj
                });
            }
        });
    }
});
/* ======================================================================
 cityways/WidgetMap.js
 ====================================================================== */

/**
 * @requires cityways/type/Class.js
 */

/**
 * Class: cityways.WidgetMap

 */
/*Example:
 * <html>
 * <head>
 * 		<script>.../cityways.js</script>
 *		<script>
 * 				function initialize(){
 * 				var map = new cityways.WidgetMap ('map');
 * 				}
 * 		</script>
 * </head>
 * <body onload="initialize()">
 * 		<div id="map"></div>
 * </body>
 * </html>
 * 
 */
cityways.WidgetMap = cityways.type.Class({

    initialize: function (div, options) {
        console.log('map was initialized');
    }

});
/* ======================================================================
 cityways/loader/TemplatesLoader.js
 ====================================================================== */

/**
 * @requires cityways/type/Class.js
 */

cityways.loader.TemplatesLoader = cityways.type.Class({

    initialize: function () {

    },

    loadHtmlTemplates: function (templateFile, callback) {
        var url = cityways.Basic.ResourceURI + "themes/" + cityways.Basic.Theme
            + "/templates/" + templateFile + ".xml";
        $.ajax({
            url: url,
            success: function (templatesHtml) {
                if (callback == null)
                    throw new Error("callback was not defined");
                var ts = templatesHtml.getElementsByTagName("template");
                var templates = {};
                for (var i = 0; i < ts.length; i++) {
                    try {
                        cityways.Console.log(ts[i].textContent);
                        cityways.Console.log(ts[i].getAttribute("id"));
                        var key = ts[i].getAttribute("id");
                        var value = _.template(ts[i].textContent);
                        templates[key] = value;
                        cityways.Console.log("ok");
                    } catch (err) {

                    }
                }
                callback(templates);
            }
        });
    }
});
