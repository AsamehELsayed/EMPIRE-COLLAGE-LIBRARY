$(document).ready(function(){

    var o2 = $('#slidercontainer')
    o2.owlCarousel({
      items:5,
      loop:true,
      margin:10,
      autoplay:true,
      slideSpeed: 500,
      paginationSpeed:500,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      touchDrag: true,
      mouseDrag: true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }}
  });
  
      var o1 = $('#slidercontainerTwo');
      o1.owlCarousel({
      items:5,
      loop:true,
      margin:10, 
      paginationSpeed:500,
      slideSpeed: 500,   
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      touchDrag: true,
      mouseDrag: true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }}
  });
  
  
  
  
  });