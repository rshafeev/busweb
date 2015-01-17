package com.pgis.bus.server.controllers;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Locale;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.context.support.StaticMessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.pgis.bus.data.orm.City;
import com.pgis.bus.data.orm.type.LangEnum;
import com.pgis.bus.data.service.IDataBaseService;
import com.pgis.bus.data.service.IDataModelsService;
import com.pgis.bus.net.models.city.CitiesModel;
import com.pgis.bus.net.models.city.CityModel;
import com.pgis.bus.net.models.route.RouteTypeModel;
import com.pgis.bus.server.AppProperties;
import com.pgis.bus.server.models.NavigationModel;
import com.pgis.bus.server.models.page.MainPageModel;

@Controller
@RequestMapping(value = "")
public class HomeController extends BaseController {

    private static final Logger log = LoggerFactory.getLogger(HomeController.class);

    public HomeController() {
        super();
    }

    public HomeController(IDataBaseService dbService, IDataModelsService modelsService) {
        super(dbService, modelsService);
    }

    @Autowired
    private MessageSource messageSource;

    public static CitiesModel prepareCitiesModel(Collection<City> cities, String selectedCityKey) {
        try {

            // Получим объект с информацией о текущей локали
            Locale locale = LocaleContextHolder.getLocale();
            LangEnum langID = LangEnum.valueOf(locale);
            // Загрузим список всех городов из БД

            // Создадим модель CitiesModel на базе списка cities
            CitiesModel model = new CitiesModel();
            for (City city : cities) {
                CityModel cityModel = city.toModel(langID);
                model.addCity(cityModel);
                if (city.getKey().equals(selectedCityKey) == true) {
                    model.setSelectedCity(cityModel);
                }
            }

            // Отправим модель в формате GSON клиенту

            return model;
        } catch (Exception e) {
            log.debug("Error:", e);
            return null;
        }
    }

    @RequestMapping(value = {"", "/", "home"})
    public ModelAndView home(@CookieValue(value = "city_key", defaultValue = "") String city_key) {
        StaticMessageSource source = new StaticMessageSource();
        log.debug("city_key(CookieValue): " + city_key);
        if (city_key == null || city_key.toString().length() == 0)
            city_key = AppProperties.DefaultCity;
        return new ModelAndView("redirect:/home/" + city_key);
    }

    @RequestMapping(value = "home/{city_key}")
    public ModelAndView homeCity(@PathVariable String city_key, HttpServletRequest request, HttpServletResponse response) {
        try {
            log.debug("city_key: " + city_key);
            Locale locale = LocaleContextHolder.getLocale();
            CitiesModel citiesModel = prepareCitiesModel(super.getDbService().Cities().getAll(), city_key);
            if (citiesModel == null || citiesModel.getSelectedCity() == null) {
                return new ModelAndView("redirect:/error");
            }
            NavigationModel navModel = new NavigationModel(messageSource, locale, NavigationModel.pages_enum.c_Home);
            Collection<RouteTypeModel> routeTypes = super.getModelsService().Cities()
                    .getRouteTypesByCity(citiesModel.getSelectedCity().getId());
            Collection<String> routeTypesIds = new ArrayList<String>();
            for (RouteTypeModel routeType : routeTypes) {
                routeTypesIds.add(routeType.getId());
            }

            // new RouteTypeModel(routeTypeID, routeTypeName)
            MainPageModel model = new MainPageModel(navModel);
            model.setCitiesModel(citiesModel);
            model.setRouteTypes(routeTypesIds);
            model.setLanguage(locale);
            Cookie cityCookie = new Cookie("city_key", city_key);
            cityCookie.setPath(request.getContextPath());
            response.addCookie(cityCookie);
            return new ModelAndView("main", "model", model);
        } catch (SQLException e) {
            log.debug("Error:", e);
            return null;
        }

    }
}