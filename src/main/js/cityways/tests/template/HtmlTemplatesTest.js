test(
		'cityways.template.HtmlTemplates._getFileNameByTemplateName(templateName)',
		function() {
			// Настроим язык
			cityways.Language.setCode("ru");
			equal(
					cityways.template.HtmlTemplates
							._getFileNameByTemplateName('template-roma-waysPanelHeader'),
					'roma', 'roma');
			equal(
					cityways.template.HtmlTemplates
							._getFileNameByTemplateName('template-main-waysPanelInfo'),
					'main', 'main');
					
					equal(
					cityways.template.HtmlTemplates
							._getFileNameByTemplateName(''),
					null, 'no templateName');
										equal(
					cityways.template.HtmlTemplates
							._getFileNameByTemplateName('templatemain-waysPanelInfo'),
					null, 'fail templateName');
															equal(
					cityways.template.HtmlTemplates
							._getFileNameByTemplateName('temp-latemain-waysPanelInfo'),
					null, 'fail templateName');
		});