$(document).ready(whenAppIsLoaded);

function whenAppIsLoaded(){

};

var sparkleTime = (function($) {

    var $container = $('.sparkles'),
        $sparkle = $('<div class="sparkle"></div>'),
        totalSparkles,
        sparkleDelayRange = 10;
    
    if (window.matchMedia('(max-width: 730px)').matches) {
      totalSparkles = 60;
    } else {
      totalSparkles = 200;
    }
  
    function init() {
      sprinkleSparkles();
    }
  
    function sprinkleSparkles() {
      for (var i = 0; i < totalSparkles; i++ ) {
        var size = (i % 2 === 0) ? 'sparkle--small' : '';
        var direction = (i % 3 === 0) ? 'sparkle--left' : '';
        $sparkle
          .clone()
          .css({
            top: (Math.random() * 100) + '%',
            left: (Math.random() * 100) + '%',
            webkitAnimationDelay: (Math.random() * sparkleDelayRange) + 's',
            AnimationDelay: (Math.random() * sparkleDelayRange) + 's'
          })
          .addClass(size)
          .addClass(direction)
          .appendTo($container);
      }
    }
  
    return {
      init: init
    };
  })(jQuery);
  
  sparkleTime.init();