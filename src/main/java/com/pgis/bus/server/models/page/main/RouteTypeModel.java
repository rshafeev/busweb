package com.pgis.bus.server.models.page.main;

import java.util.Locale;

import org.springframework.context.MessageSource;

public class RouteTypeModel {

	private String name;
	private String includeTitle;
	private String excludeTitle;


	public RouteTypeModel( String name , MessageSource messageSource, Locale locale) {
		super();
		includeTitle = messageSource.getMessage("basic.enable_" + name, null,
				locale);
		excludeTitle = messageSource.getMessage("basic.exclude_" + name, null,
				locale);
		this.name = name;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getIncludeTitle() {
		return includeTitle;
	}


	public void setIncludeTitle(String includeTitle) {
		this.includeTitle = includeTitle;
	}


	public String getExcludeTitle() {
		return excludeTitle;
	}


	public void setExcludeTitle(String excludeTitle) {
		this.excludeTitle = excludeTitle;
	}
	
}
