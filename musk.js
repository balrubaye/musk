// musk.js Basic utilty library
// (c)  Bassam Rubaye


(function(){
	'use strict';

	var global= this;

	var musk={};
	
	//check if it's being by Node.js environemnt or on the browser 
	//
	if(typeof module !== 'undefined' && typeof exports !== 'undefined' ){
		module.exports=exports= musk;
	}
	else{
		global.musk= musk;
	}

	//Check if a method or property is on the prototype 
	function hasPrototypeProperty(obj, prop){
		

		if(typeof obj !== 'object'){
			throw Error(' Use a valid object');
		}
		if(typeof prop !== 'string'){
				throw Error('the property should be string');
		}
		

		return (prop in obj) && !Object.hasOwnProperty.call(obj, prop)  ;
	}

	musk.hasProtoProperty= hasPrototypeProperty;

	



}).call(this)