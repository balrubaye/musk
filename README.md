# musk
musk.js is a javascript utility library that can be used to add more functionality without changing the core JS objects.

Example

`musk.hasProtoProperty(obj, 'property')`
Which will check if property is in the prototype of obj 

`musk.isArray(arr)`
Check if it's a valid array

`musk.mixin(receiver , supplier)`
Will extend the receiver object with the supplier properties 
```
var obj1={};

var obj2={ name:'bassam', 
           sayName: function(){return this.name;} };
           
var obj3={ age: 29, 
           sayAge: function(){ return this.age;} };
           
mixin(obj1 , [obj2, obj3])
```

now obj1 will contain all the props of both obj2 and obj3 , which will extends obj1 without the need to do inheritance 





