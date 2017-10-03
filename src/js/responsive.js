$(function(){

  var current_width = $(window).width();

  $(document).ready(function(){
      var current_width = $(window).width();
      windowSize(current_width)
    });

   
    $(window).resize(function(){   
      var current_width = $(window).width();
      windowSize(current_width)


      // if(current_width <= 480)
      //   $('html').addClass("mobile-menu").removeClass("desktop-menu");
      //   // $('.mobile-menu .burger-hide').hide();

      // if(current_width > 741)
      //   $('html').addClass("desktop-menu").removeClass("mobile-menu");
      //   $('.desktop-menu .burger-hide').show();

    });

    function windowSize (current_width) {
      if(current_width <= 425) {
        $('html').addClass("smartphone-small").removeClass("smartphone-medium smartphone-large tablet laptop desktop")
        $('*').trigger('smartphone-small') 
      }
      else if(current_width <= 600) {
        $('html').addClass("smartphone-medium").removeClass("smartphone-small smartphone-large tablet laptop desktop")
        $('*').trigger('smartphone-medium')
      }
      else if(current_width <= 768) {
        $('html').addClass("smartphone-large").removeClass("smartphone-small smartphone-medium tablet laptop desktop")
        $('*').trigger('smartphone-large')
      }
      else if(current_width <= 900) {
        $('html').addClass("tablet").removeClass("smartphone-small smartphone-medium smartphone-large laptop desktop")
        $('*').trigger('tablet') 
      }
      else if(current_width <= 1024) {
        $('html').addClass("laptop").removeClass("smartphone-small smartphone-medium smartphone-large tablet desktop")
        $('*').trigger('laptop') 
      }        
      else if(current_width > 1024) {
        $('html').addClass("desktop").removeClass("smartphone-small smartphone-medium smartphone-large tablet laptop")
        $('*').trigger('desktop')
      }
        // $('.tv .burger-hide').show()
    }

});
