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


	//check if valid Array type
	function isArray(arr){
		return Object.prototype.toString.call(arr) === '[object Array]';
	}

	musk.isArray= isArray;

	//Extends a receiver object from one or more suppliers
	function mixin(receiver, supplier){
		var supArray =[];

		//check if the second argument is one supplier or array of 
		if(isArray(supplier)) {supArray=supplier; }
		
		else{ supArray.push(supplier); }

		//if ES5 and above
		if( typeof Object.keys !== 'undefiend'){

			supArray.forEach(function(supp){
				Object.keys(supp).forEach(function(prop){
							receiver[prop]= supp[prop];
				});
			});
		}

		else{
			supArray.forEach(function(supp){
				for( prop in supp){
					if(Object.hasOwnProperty.call(supp, prop)){
					receiver[prop]= supp[prop];
				   }
				}
			});
		}

	}

	musk.mixin = mixin ;


}).call(this)