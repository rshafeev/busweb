
test('cityways.helper.type.DictionaryTest1', function () {

	var dict = new cityways.type.Dictionary();

	var obj1 = { data : 1};
	var obj2 = { data : 2};

  // Unit testing
  equal(dict.get(obj1),null, 'Check get() for empty dictionary.');

  dict.put(obj1,"val1");
  equal(dict.get(obj1), "val1", 'Check get(obj1) after putting obj1.');
  
  dict.put(obj2,"val2");
  equal(dict.get(obj2), "val2", 'Check get(obj2) after putting obj2.');
  
  dict.put(obj1,"val1");

  equal(dict.size(), 2, 'Check dictionary size after putting element, which already exist in it.');
  
  dict.pull(obj1);
  equal(dict.get(obj1),null, 'Check get(obj1) after deleting obj1');
  equal(dict.size(),1, 'Check size() after deleting obj1');

  var dict2  = new cityways.type.Dictionary();
  
  dict2.put(obj1,"val3");
  equal(dict2.get(obj1), "val3", 'Check get(obj1) after putting obj1 in new dictionary');
  
  dict2.put(obj2,"val4");
  equal(dict2.get(obj2), "val4", 'Check get(obj2) after putting obj2 in new dictionary');  
  
  cityways.logger.info("dict2:", dict2);
  equal(dict2.size(), 2, 'Check size() for new dictionary');


});

test('cityways.helper.type.DictionaryTest2', function () {

  var dict1 = new cityways.type.Dictionary();

	var obj1 = { data : 1};
	var obj2 = { data : 2};
  dict1.put(obj1,"val5");
  dict1.put(obj2,"val6");
  
  var dict2  = new cityways.type.Dictionary();
  cityways.logger.info("dict1",dict1.keys);
  cityways.logger.info("dict2",dict2.keys);

  equal(dict1.size(),2, 'Check size() for dictionary1');
  equal(dict2.size(),0, 'Check size() for dictionary2');
  equal(dict2.get("val5"),null, 'Check get() for empty dictionary');
  
  
});