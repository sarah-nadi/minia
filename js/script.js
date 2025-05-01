
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 3,
      autoplay: false,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      dots: true,
      dotData: true,
      responsive: {
        0: {
          items: 1 
        },
        768: {
          items: 2
        },
        1024: {
          items: 3 
        }
      }
    });
  });

