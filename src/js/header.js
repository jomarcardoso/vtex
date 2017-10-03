$(function(){
    $('.search .busca input[type="text"]').attr('placeholder', 'BUSCAR POR');

    $('.burger').click(function() {
      $('.burger-hide').toggleClass('show');      
      // $('.mobile-menu .burger-hide').style('display', 'block');
    });
  
    $('fieldset').addClass('simbolo');
});