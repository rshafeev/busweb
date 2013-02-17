test('cityways.helper.Time.secsToLocaleString(secs)', function() {

	// Настроим язык
	cityways.Language.setCode("ru");

	// Unit testing
	equal(cityways.helper.Time.secsToLocaleString(100), '1 минута', '1 минута');
	equal(cityways.helper.Time.secsToLocaleString(120), '2 минуты', '2 минуты');
	equal(cityways.helper.Time.secsToLocaleString(3600), '1 час', '1 час');
	equal(cityways.helper.Time.secsToLocaleString(3660), '1 час 1 минута',
			'1 час 1 минута');
	equal(cityways.helper.Time.secsToLocaleString(5100), '1 час 25 минут',
			'1 час 25 минут');
	equal(cityways.helper.Time.secsToLocaleString(7320), '2 часа 2 минуты',
			'2 часа 2 минуты');

	cityways.Language.setCode("uk");
	equal(cityways.helper.Time.secsToLocaleString(100), '1 хвилина',
			'1 хвилина');
	equal(cityways.helper.Time.secsToLocaleString(120), '2 хвилини',
			'2 хвилини');
	equal(cityways.helper.Time.secsToLocaleString(3600), '1 година', '1 година');
	equal(cityways.helper.Time.secsToLocaleString(3660), '1 година 1 хвилина',
			'1 година 1 хвилина');
	equal(cityways.helper.Time.secsToLocaleString(5100), '1 година 25 хвилин',
			'1 година 25 хвилин');
	equal(cityways.helper.Time.secsToLocaleString(7320), '2 години 2 хвилини',
			'2 години 2 хвилини');

	cityways.Language.setCode("en");
	equal(cityways.helper.Time.secsToLocaleString(100), '1 minute', '1 minute');
	equal(cityways.helper.Time.secsToLocaleString(120), '2 minutes',
			'2 minutes');
	equal(cityways.helper.Time.secsToLocaleString(3600), '1 hour', '1 hour');
	equal(cityways.helper.Time.secsToLocaleString(3660), '1 hour 1 minute',
			'1 hour 1 minute');
	equal(cityways.helper.Time.secsToLocaleString(5100), '1 hour 25 minutes',
			'1 hour 25 minutes');
	equal(cityways.helper.Time.secsToLocaleString(7320), '2 hours 2 minutes',
			'2 hours 2 minutes');
});

test('cityways.helper.Time.minsOfHourToLocaleString(mins)', function() {

	// Настроим язык
	cityways.Language.setCode("ru");
	equal(cityways.helper.Time.minsOfHourToLocaleString(1), '1 минута',
			'1 минута');
	equal(cityways.helper.Time.minsOfHourToLocaleString(3), '3 минуты',
			'3 минуты');
	equal(cityways.helper.Time.minsOfHourToLocaleString(5), '5 минут',
			'5 минут');
	equal(cityways.helper.Time.minsOfHourToLocaleString(17), '17 минут',
			'17 минут');
	equal(cityways.helper.Time.minsOfHourToLocaleString(23), '23 минуты',
			'23 минуты');
	equal(cityways.helper.Time.minsOfHourToLocaleString(21), '21 минута',
			'21 минута');
		// equal('check', 'check', '');
	});

test('cityways.helper.Time.hoursToLocaleString(hours)', function() {

	// Настроим язык
	cityways.Language.setCode("ru");
	equal(cityways.helper.Time.hoursToLocaleString(1), '1 час', '1 час');
	equal(cityways.helper.Time.hoursToLocaleString(3), '3 часа', '3 часа');
	equal(cityways.helper.Time.hoursToLocaleString(5), '5 часов', '5 часов');
	equal(cityways.helper.Time.hoursToLocaleString(18), '18 часов', '18 часов');
	equal(cityways.helper.Time.hoursToLocaleString(21), '21 час', '21 час');
	equal(cityways.helper.Time.hoursToLocaleString(23), '23 часа', '23 часа');

	cityways.Language.setCode("en");
	equal(cityways.helper.Time.hoursToLocaleString(1), '1 hour', '1 hour');
	equal(cityways.helper.Time.hoursToLocaleString(5), '5 hours', '5 hours');
	equal(cityways.helper.Time.hoursToLocaleString(23), '23 hours', '23 hours');

	cityways.Language.setCode("uk");
	equal(cityways.helper.Time.hoursToLocaleString(1), '1 година', '1 година');
	equal(cityways.helper.Time.hoursToLocaleString(3), '3 години', '3 години');
	equal(cityways.helper.Time.hoursToLocaleString(15), '15 годин', '15 годин');
	equal(cityways.helper.Time.hoursToLocaleString(21), '21 година',
			'21 година');
	equal(cityways.helper.Time.hoursToLocaleString(23), '23 години',
			'23 години');
});