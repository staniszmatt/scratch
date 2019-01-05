
function revert(){
  var elements = $(".square");
  var currentDelay = 0;
  var delayDelta = 100;
  for( var i=0; i< elements.length; i++){
    $(elements[i])
      .addClass('hopFlipAnimation')
      .css('animation-delay', currentDelay+'ms');
      currentDelay+= delayDelta;
  }
}

revert();