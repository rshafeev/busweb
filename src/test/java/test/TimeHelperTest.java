package test;

import static org.junit.Assert.*;

import java.util.Locale;

import org.junit.Test;
import org.springframework.context.support.StaticMessageSource;

import com.pgis.bus.server.helpers.TimeHelper;

public class TimeHelperTest {
	@Test
	public void getMinutesLabelRuTest() {
		Locale locale = new Locale("ru");
		StaticMessageSource messageSource = new StaticMessageSource();
		messageSource.addMessage("rightpanel.minute", locale, "минута");
		messageSource.addMessage("rightpanel.ru_minutes", locale, "минуты");
		messageSource.addMessage("rightpanel.minutes", locale, "минут");
		String actualReturn = TimeHelper.getMinutesLabel(1, locale,
				messageSource);
		assertEquals("минута", actualReturn);
		actualReturn = TimeHelper.getMinutesLabel(3, locale,
				messageSource);
		assertEquals("минуты", actualReturn);
		actualReturn = TimeHelper.getMinutesLabel(13, locale,
				messageSource);
		assertEquals("минут", actualReturn);
		actualReturn = TimeHelper.getMinutesLabel(123, locale,
				messageSource);
		assertEquals("минуты", actualReturn);
		
	}
	
	@Test
	public void getMinutesLabelUaTest() {
		Locale locale = new Locale("ua");
		StaticMessageSource messageSource = new StaticMessageSource();
		messageSource.addMessage("rightpanel.minute", locale, "хвилина");
		messageSource.addMessage("rightpanel.ru_minutes", locale, "хвилини");
		messageSource.addMessage("rightpanel.minutes", locale, "хвилин");
		String actualReturn = TimeHelper.getMinutesLabel(1, locale,
				messageSource);
		assertEquals("хвилина", actualReturn);
		actualReturn = TimeHelper.getMinutesLabel(3, locale,
				messageSource);
		assertEquals("хвилини", actualReturn);
		actualReturn = TimeHelper.getMinutesLabel(13, locale,
				messageSource);
		assertEquals("хвилин", actualReturn);
		actualReturn = TimeHelper.getMinutesLabel(123, locale,
				messageSource);
		assertEquals("хвилини", actualReturn);
		
	}
}
