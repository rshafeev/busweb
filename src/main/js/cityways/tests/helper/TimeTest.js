
test('cityways.helper.time.secsToLocaleString(secs)', function () {

  // Настроим язык
  cityways.language.setCode("ru");
  
  // Unit testing
  equal(cityways.helper.time.secsToLocaleString(100), '1 минута', '');
  equal(cityways.helper.time.secsToLocaleString(120), '2 минуты', '');

});

test('cityways.helper.time.minsOfHourToLocaleString(mins)', function () {

  // Настроим язык
  cityways.language.setCode("ru");
   
 equal('check', 'check', ''); 
});