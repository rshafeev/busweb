/**
 * @requires cityways/Class.js
 */

cityways.loader.TemplatesLoader = cityways.Class({

	initialize : function() {

	},

	loadHtmlTemplates : function(templateFile, callback) {
		var url = cityways.options.ResourceURI + "themes/" + cityways.options.Theme
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
								cityways.log(ts[i].textContent);
								cityways.log(ts[i].getAttribute("id"));
								var key = ts[i].getAttribute("id");
								var value = _.template(ts[i].textContent);
								templates[key] = value;
								cityways.log("ok");
							} catch (err) {

							}
						}
						callback(templates);
					}
				});
	}
});