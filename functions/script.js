var values = [4,6,6,23,4,6,77]; //our targe array

//using map with a regular anonymous function, passing in item and index from each position
var mapDoubled1 = values.map( function( item, index){
  return item * 2;
})

//doing so with an arrow function, with an explicit return value
var mapDoubled2 = values.map( ( item, index) =>{
  return item * 2;
})

//doing so with an array function with implcit return
var mapDoubled3 = values.map( ( item, index) => item * 2);

//making a named function to do the doubling to a single value
function doubleFunction( item, index ){
  return item * 2;
}

var mapDoubled4 = []; //make an array to store new values inside
for(var index=0; index < values.length; index++){ //loop through array
  mapDoubled4.push( doubleFunction( item, index )); //call function, pass in value and index into function, get result, and push it into array
}

var mapDoubled5 = values.map( doubleFunction );

//this is an example of how map really works internally.
Array.prototype.danMap = function( callFunction ){ //make it a prototype so all arrays will have it
  var outputArray = [];//make new array
  var currentArray = this.valueOf();//get the curren array
  for( var index = 0; index < currentArray.length; index++){ //iterate through array
    var newValue = callFunction( currentArray[index], index, currentArray ); //use the passed in function, give it the item at the current position, the index, and the whole array
    outputArray.push( newValue );//push the new value into an array
  }
  return outputArray;//return the array
}

var mapDoubled6 = values.danMap( doubleFunction )//call our new function on the array

console.log(mapDoubled6);



