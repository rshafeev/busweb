package com.pgis.bus.server.models.data;

import java.util.Locale;

import org.springframework.context.MessageSource;

import com.pgis.bus.net.models.route.RouteInfoModel;

public class RouteInfoExtModel extends RouteInfoModel {
    private MessageSource messageSource;
    private Locale locale;

    public RouteInfoExtModel(Locale locale, MessageSource messageSource, RouteInfoModel copy) {
        super(copy);
        this.locale = locale;
        this.messageSource = messageSource;
    }

    String getWorkIntervalText() {
        return this.getStartWork().formatHHMM() + " - " + this.getFinishWork().formatHHMM();
    }

    String getIntervalText() {
        if ((int) this.getMinInterval().getTime() == (int) this.getMaxInterval().getTime()) {
            return Integer.toString(this.getMinInterval().getMinutes());
        }
        return Integer.toString(this.getMinInterval().getMinutes()) + " - "
                + Integer.toString(this.getMaxInterval().getMinutes());
    }
}
