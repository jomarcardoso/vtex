$(document).ready(function () {
   $('.owl').owlCarousel({
    loop:true,
    margin:10,
    autoWidth:false,
    navigation:true,
    rewindNav:false,
    scrollPerPage : true,
    items:5,
    navigationText: ['<i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>','<i class="fa fa-angle-right fa-3x" aria-hidden="true"></i>']
    })
});