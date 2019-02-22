
function simulateAjaxCallWithHardCodedFunction(){
  var randomTime = Math.random() * 5000;
  setTimeout( function(){
    console.log('done!');
    callMeWhenDone( "got it");
  }, randomTime );
}


function simulateAjaxCallWithCallback(callback){
  var randomTime = Math.random() * 5000;
  setTimeout( function(){
    console.log('done!');
    callback( "got it");
  }, randomTime );
}

function simulateAjaxCallWithPromise(){
  //make our promise
  var promise = {
    then: function( successCallback ){
      this.resolve = successCallback;
    },
    resolve: null
  }
  $.ajax({
    success: function(data){
      promise.resolve(data)
    }
  })
  //do our work
  var randomTime = Math.random() * 5000;
  setTimeout( function(){
    console.log('done!');
    promise.resolve("got it too!")
  }, randomTime );
  
  return promise;
}




function callMeWhenDone( data ){
  console.log(" callmewhendone: "+ data);
}

//omg so many promises
simulateAjaxCallWithHardCodedFunction()
simulateAjaxCallWithCallback( callMeWhenDone );
simulateAjaxCallWithPromise()
    .then( simulateAjaxCallWithPromise )
    .then( simulateAjaxCallWithPromise)
    .then(simulateAjaxCallWithPromise)
    .then( callMeWhenDone)









