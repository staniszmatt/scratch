
function startAddingSparkles( info ){
    //tracks the current count of sparkles for max tracking
    var currentSparkleCount = 0;
    //which element to put the sparkles inside of
    var target = $(info.targetElement);
    //what percentage of intervals to drop a sparkle
    var dropRate = info.dropRate || .8;
    //how often (in milliseconds) to check to drop a sparkle
    var checkDuration = info.checkDuration || 30;
    //how long each sparkle can last (this is chosen randomly)
    var sparkleMaxLife = info.sparkleMaxLife || 4000;
    //the maximum number of sparkles
    var maxCount = info.maxCount || 50;
    
  
    //start adding sparkles.  this calls checkSparkleAdd every checkDuration milliseconds
    var mainSparkleTimer = setInterval( checkSparkleAdd, checkDuration);
    
    //this function checks whether or not a sparkle should be created
    //it is defined inside startAddingSparkles so it has access to the local variables here
    function checkSparkleAdd(){
      //if we haven't reached the maximum sparkle count, and we randomly choose below the chance to make a sparkle
      if( currentSparkleCount < maxCount && Math.random() < dropRate){
        //track that we made another sparkle
        currentSparkleCount++;
        //make a new sparkle with the function addSparkle in the given target
        var sparkle = addSparkle(target);
      }
      //this function makes sparkles.  it is defined inside checkSparkleAdd so it ha access to the variables that that function made locally
      function addSparkle(){
        //determine a random position in the parent to be, based on %
        var sparklePos = {
          left: Math.random()*100 + '%',
          top: Math.random()*100 + '%'
        }
        //generate a sparkle element
        var sparkleDiv = $("<div>",{
          'class': 'sparkle',
          css: sparklePos
        });
        //add it to the target element
        target.append(sparkleDiv);
        //set a time whent the sparkle will die and disappear
        setTimeout(removeSparkle, Math.random() * sparkleMaxLife)
        //return the sparkleDiv so it can be removed by removeSparkle later
        return sparkleDiv;
      }
      //this function will remove the sparkle when it expires
      function removeSparkle(){
        //remove the sparkle element
        sparkle.remove();
        //decrement the number of sparkles
        currentSparkleCount--;
      }
    }
    //this function will stop the sparkle generation by turning off the timer
    //it is passed out of the main function so that it can be called when the user needs it
    function stopSparkleGeneration(){
      //stop the interval timer that is running and generating sparkles
      clearInterval(mainSparkleTimer);
    }
    //return the function so it can be used by the caller to stop the sparkle generation
    return stopSparkleGeneration
  }
  //can pass in many things, but requires the calcBody
  startAddingSparkles({ targetElement: '.calcBody'})  