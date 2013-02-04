
test('cityways.helper.Time.secsToLocaleString(secs)', function () {

  // Настроим язык
  cityways.Language.setCode("ru");
  
  // Unit testing
  equal(cityways.helper.Time.secsToLocaleString(100), '1 минута', '');
  equal(cityways.helper.Time.secsToLocaleString(120), '2 минуты', '');

});

test('cityways.helper.Time.minsOfHourToLocaleString(mins)', function () {

  // Настроим язык
  cityways.Language.setCode("ru");
   
 equal('check', 'check', ''); 
});