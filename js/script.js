
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 3,
      autoplay: true,
      autoplayTimeout: 5000,
      dots: true,
      dotData: true,
      smartSpeed: 1000,
      rtl: true,
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

