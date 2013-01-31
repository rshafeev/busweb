/**
 * @requires cityways/type/Class.js
 */

cityways.loader.TemplatesLoader = cityways.type.Class({

	initialize : function() {

	},

	loadHtmlTemplates : function(templateFile, callback) {
		var url = cityways.Basic.ResourceURI + "themes/" + cityways.Basic.Theme
				+ "/templates/" + templateFile + ".xml";
		$.ajax({
					url : url,
					success : function(templatesHtml) {
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