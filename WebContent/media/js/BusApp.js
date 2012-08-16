

function BusApp(){
	
	this.map  = new BusMap(); 
	this.main = function(){
		this.map.init();
		this.loadCitiesToComboBox();
    };
	this.loadCitiesToComboBox = function(){
		
		alert(citiesModel.cities.length);
       /*
        * citiesModel - список городов
        * */	
	};
};
	