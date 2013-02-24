
test('cityways.Class.ExtendsTest()', function () {

	var ClassA = cityways.Class({
		constructor : function(val){
			if(val == undefined)
				val = "testA";
			this._val = val;
		},

		members : {
			_val  : null,
			getValue : function(){
				return this._val;
			},

			getA : function(){
				return "A";
			}
		}
	});

	var ClassB = cityways.Class({
		extends : [
		ClassA
		],
		constructor : function(val){
			if(val == undefined)
				val = "const";
			ClassA.call(this, val);
			this._b = val;
			cityways.logger.info(this._val);
		    cityways.logger.info(this.getValue());
				
		},

		members : {
			_b  : null,
			getB : function(){
				return "B";
			}
		}
	});

	var ClassC = cityways.Class({
		extends : [
		ClassA, ClassB
		],
		constructor : function(val){
			if(val == undefined)
				val = "";
			ClassA.call(this, val);
			ClassB.call(this);
			this._c = true;

		},

		members : {
			_c  : null,
			getB : function(){
				return "override";
			},
			getC : function(){
				return "C";
			}
		}
	});

	var objA = new ClassA("valA");
	var objB = new ClassB("valB");
	var objC = new ClassC("valC");

	
	equal(objA.getA(), 'A');
	
	equal(objB.getA(), 'A');
	equal(objB.getB(), 'B');
	
	equal(objC.getA(), 'A');
	equal(objC.getB(), 'override');
    equal(objC.getC(), 'C');
	
	cityways.logger.info("objA",objA);
	cityways.logger.info("objB",objB);
	cityways.logger.info("objC",objC);
	cityways.logger.info("objC_val",objC.getValue());
});
