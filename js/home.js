


$(document).ready(function(){

$('.scrolltop').click(function(){

	$('html, body').animate({scrollTop:0},1000)

});

$('.link').on('click',function(){
	var link = $(this);
	$('html, body').stop().animate({scrollTop: $(link.attr('href')).offset().top},1000)

});

$(window).on('scroll', function(){

  if( $(window).scrollTop()){

    $('nav').addClass('white');


  }else{

    $('nav').removeClass('white')
  }

});

$(window).on('scroll', function(){

	if( $(window).scrollTop() >=600){

		$('.scrolltop').addClass('activo');


	}else{

		$('.scrolltop').removeClass('activo')
	}

});

/*  $('.galeria').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear', */


  	$('.galeria').slick({
  	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  	dots: true, 
    
  	nextArrow: '<div class="next"> <i class="fas fa-chevron-right"><i><div>',
  	prevArrow: '<div class="prev"> <i class="fas fa-chevron-left"><i><div>',

  	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



/* $('.galeria2').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear',*/


    $('.galeria2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true, 
    
    nextArrow: '<div class="next"> <i class="fas fa-chevron-right"><i><div>',
    prevArrow: '<div class="prev"> <i class="fas fa-chevron-left"><i><div>',

    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

});

