package com.pgis.bus.server.helpers;

import java.util.Locale;

import org.springframework.context.MessageSource;

public class TimeHelper {
    public static String getMinutesLabel(int minutes, Locale locale, MessageSource messageSource) {
        int ostatok = minutes % 10;

        if (minutes >= 10 && minutes <= 20) {
            return messageSource.getMessage("rightpanel.minutes", null,
                    locale);
        }
        if (ostatok <= 1) {
            return messageSource.getMessage("rightpanel.minute", null,
                    locale);
        }

        if (ostatok > 1 && ostatok < 5) {
            return messageSource.getMessage("rightpanel.ru_minutes", null,
                    locale);
        }

        return messageSource.getMessage("rightpanel.minutes", null,
                locale);

    }
}
