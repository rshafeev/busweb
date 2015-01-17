package com.pgis.bus.server.models.data;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Locale;

import org.springframework.context.MessageSource;

import com.pgis.bus.net.models.route.RouteInfoModel;
import com.pgis.bus.net.models.route.RouteTypeModel;
import com.pgis.bus.net.models.route.RoutesListModel;

public class RoutesListExtModel {

    private Collection<RouteInfoExtModel> routesList;
    private RouteTypeModel routeType;
    private int cityID;

    public RoutesListExtModel() {

    }

    public Collection<RouteInfoExtModel> getRoutesList() {
        return routesList;
    }

    public void setRoutesList(Locale locale, MessageSource messageSource, RoutesListModel model) {
        routesList = new ArrayList<RouteInfoExtModel>();
        for (RouteInfoModel dbRouteModel : model.getRoutesList()) {
            routesList.add(new RouteInfoExtModel(locale, messageSource, dbRouteModel));
        }
    }

    public void setRoutesList(Collection<RouteInfoExtModel> routesList) {
        this.routesList = routesList;
    }

    public RouteTypeModel getRouteType() {
        return routeType;
    }

    public void setRouteType(RouteTypeModel routeType) {
        this.routeType = routeType;
    }

    public int getCityID() {
        return cityID;
    }

    public void setCityID(int cityID) {
        this.cityID = cityID;
    }

}