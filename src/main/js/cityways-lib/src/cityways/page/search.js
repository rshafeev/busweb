/**
 * @overview Namespace {@link cityways.page.search}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved.
 * CityWays-lib is free software, licensed under the MIT license.
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Marianna Roshchenko <mr@premiumgis.com>
 *
 * @requires cityways/page.js
 */

/**
 * @namespace cityways.page.search
 */
cityways.page.search = {

    initialize: function (options) {

        // В случае, если инициализация уже была выполнена, выходим
        if (cityways._initialized == true) {
            return;
        }
        if (options != undefined && options.lang) {
            cityways.lang.setCode(options.lang);
        }
        else
            cityways.lang.setCode();

        if (options != undefined && options.theme)
            cityways.options.Theme = options.theme;
        else
            cityways.options.Theme = "default";

        if (options != undefined && options.resourceURI)
            cityways.options.ResourceURI = options.resourceURI;
        else
            cityways.options.ResourceURI = cityways.util.getScriptLocation("main_page") + "/";

        if (options != undefined && options.serverHost != undefined) {

            cityways.options.ServerHost = options.serverHost;
            if (options.serverHost == "" || options.serverHost[options.serverHost.length - 1] != "/")
                cityways.options.ServerHost = cityways.options.ServerHost + "/";
        }
        else
            cityways.options.ServerHost = "http://ways.in.ua/";

        var linkFiles = [];

        var cssFile1 = cityways.helper.document.selectCSSFile(cityways.options.getResourcePath() + "css/",
            [{
                name: "main.css"
            }]);
        linkFiles.push(cssFile1);
        var cssFile2 = cityways.helper.document.selectCSSFile(cityways.options.ServerHost + "media/css/",
            [{
                name: "busWeb.css"
            }]);
        linkFiles.push(cssFile2);
        if (document.readyState == undefined || (document.readyState != "interactive" &&
            document.readyState != "complete")) {
            for (var i = 0; i < linkFiles.length; i++) {
                cityways.helper.document.appendCSSFile(linkFiles[i], "write");
            }
        } else {
            for (var i = 0; i < linkFiles.length; i++) {
                cityways.helper.document.appendCSSFile(linkFiles[i], "inner");
            }

        }
        cityways._initialized = true;
    }
};

