$(function(){

  $(document).ready(function(){

      var current_width = $(window).width();

      if(current_width <= 740)
        $('html').addClass("mobile-menu").removeClass("desktop-menu");

      if(current_width > 740)
        $('html').addClass("desktop-menu").removeClass("mobile-menu");

    });

    //update the width value when the browser is resized (useful for devices which switch from portrait to landscape)
    $(window).resize(function(){
      var current_width = $(window).width();
      //do something with the width value here!
      if(current_width <= 740)
        $('html').addClass("mobile-menu").removeClass("desktop-menu");
        // $('.mobile-menu .burger-hide').hide();

      if(current_width > 741)
        $('html').addClass("desktop-menu").removeClass("mobile-menu");
        $('.desktop-menu .burger-hide').show();

    });


  $(document).ready(function(){
    $('.search .busca input[type="text"]').attr('placeholder', 'BUSCAR POR');
    $('.burger').click(function() {
      $('.mobile-menu .burger-hide').toggle();
      // $('.mobile-menu .burger-hide').style('display', 'block');
    });
  
    $('fieldset').addClass('simbolo');
  });



});
