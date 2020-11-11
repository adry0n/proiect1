$(document).ready(function(){
    $('.slick__twiter').slick({
      dots:true,
      arrows: false,
      adaptiveHeight: false,
    });
    $('.burger').click(function(event){
      $('.burger, .nav__bar').toggleClass('active');
    });

  });