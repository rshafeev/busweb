package com.pgis.bus.server.models;

import java.util.ArrayList;
import java.util.Locale;

import org.springframework.context.MessageSource;

public class NavigationModel {
	public enum pages_enum {
		c_Home(1), c_Routes(2), c_Help(3), c_About(4);
		int value;

		pages_enum(int value) {
			this.value = value;
		}

		public int getValue() {
			return this.value;
		}
	}

	private ArrayList<LinkModel> links;

	public ArrayList<LinkModel> getLinks() {
		return links;
	}

	public void setLinks(ArrayList<LinkModel> links) {
		this.links = links;
	}

	public static ArrayList<LinkModel> getNavigationLinks(
			MessageSource messageSource, Locale currentLocale,
			pages_enum selectedPageCode) {
		ArrayList<LinkModel> links = new ArrayList<LinkModel>();
		/* Для добавления новой вкладки, добавить новый LinkModel */
		LinkModel homeLink = new LinkModel();
		homeLink.setLabel(messageSource.getMessage("welcome.home", null,
				currentLocale));
		homeLink.setUrl("home");
		homeLink.setCode(pages_enum.c_Home.getValue());
		links.add(homeLink);

		LinkModel routesLink = new LinkModel();
		routesLink.setLabel(messageSource.getMessage("welcome.routes", null,
				currentLocale));
		routesLink.setUrl("routes");
		routesLink.setCode(pages_enum.c_Routes.getValue());
		links.add(routesLink);
		
		LinkModel programmsLink = new LinkModel();
		programmsLink.setLabel(messageSource.getMessage("welcome.help", null,
				currentLocale));
		programmsLink.setUrl("help");
		programmsLink.setCode(pages_enum.c_Help.getValue());
		links.add(programmsLink);

		LinkModel aboutLink = new LinkModel();
		aboutLink.setLabel(messageSource.getMessage("welcome.about", null,
				currentLocale));
		aboutLink.setUrl("about");
		aboutLink.setCode(pages_enum.c_About.getValue());
		links.add(aboutLink);



		for (LinkModel link : links) {
			if (selectedPageCode != null
					&& link.getCode() == selectedPageCode.getValue()) {
				link.setSelected(true);
				break;
			}

		}
		return links;
	}

	public NavigationModel(ArrayList<LinkModel> links) {
		this.links = links;
	}

	public NavigationModel(MessageSource messageSource, Locale currentLocale) {
		this.links = NavigationModel.getNavigationLinks(messageSource,
				currentLocale, null);
	}

	public NavigationModel(MessageSource messageSource, Locale currentLocale,
			pages_enum selectedPageCode) {
		this.links = NavigationModel.getNavigationLinks(messageSource,
				currentLocale, selectedPageCode);
	}

	public LinkModel getSelectedLink() {
		for (LinkModel link : links) {
			if (link.isSelected())
				return link;
		}
		return null;
	}
}
