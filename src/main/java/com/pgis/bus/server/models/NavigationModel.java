package com.pgis.bus.server.models;

import java.util.ArrayList;
import java.util.Locale;

import org.springframework.context.MessageSource;

public class NavigationModel {
	public enum pages_enum {
		c_Home(1), c_Help(2), c_About(3);
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
		
		LinkModel homeLink = new LinkModel();
		homeLink.setLabel(messageSource.getMessage("welcome.home", null,
				currentLocale));
		homeLink.setUrl("index.htm");
		homeLink.setCode(pages_enum.c_Home.getValue());
		links.add(homeLink);

		/* Для добавления новой вкладки, добавить новый LinkModel */
		LinkModel programmsLink = new LinkModel();
		programmsLink.setLabel(messageSource.getMessage("welcome.help",
				null, currentLocale));
		programmsLink.setUrl("help.htm");
		programmsLink.setCode(pages_enum.c_Help.getValue());
		links.add(programmsLink);

		LinkModel aboutLink = new LinkModel();
		aboutLink.setLabel(messageSource.getMessage("welcome.about", null,
				currentLocale));
		aboutLink.setUrl("about.htm");
		aboutLink.setCode(pages_enum.c_About.getValue());
		links.add(aboutLink);

		for (LinkModel link : links) {
			if (link.getCode() == selectedPageCode.getValue()) {
				link.setSelected(true);
				break;
			}

		}
		return links;
	}

	public NavigationModel(ArrayList<LinkModel> links) {
		this.links = links;
	}
	public NavigationModel(MessageSource messageSource, Locale currentLocale,
			pages_enum selectedPageCode){
		this.links = NavigationModel.getNavigationLinks(messageSource, currentLocale, selectedPageCode);
		
	}
	public LinkModel getSelectedLink() {
		for (LinkModel link : links) {
			if (link.isSelected())
				return link;
		}
		return null;
	}
}
