package com.pgis.bus.server.models.page;

import java.util.Locale;

import com.pgis.bus.server.models.NavigationModel;


public class PageModel {
    /**
     * Язык локализации: ru,en,uk
     */
    private String language = "ru";

    private NavigationModel navigationModel;

    public NavigationModel getNavigationModel() {
        return navigationModel;
    }

    public void setNavigationModel(NavigationModel navigationModel) {
        this.navigationModel = navigationModel;
    }

    public PageModel(NavigationModel navigationModel) {
        super();
        this.navigationModel = navigationModel;
    }


    public String getLanguage() {
        return language;
    }

    public void setLanguage(Locale locale) {

        if (locale.getLanguage() == null
                || locale.getLanguage().equalsIgnoreCase("rus"))
            this.language = "ru";
        else
            this.language = locale.getLanguage();
    }

    public void setLanguage(String language) {
        this.language = language;
    }
}
