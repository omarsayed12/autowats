$('.autoplay').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 7000,
  mobileFirst: true,
  responsive: [{
    breakpoint: 1000,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
   breakpoint: 320,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        centerMode: false,
      }
  }]
});

$('.feture').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 7000,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
      ,{
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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
     breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: false,
        }
    }]
});

$('.test').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplaySpeed: 7000,
  mobileFirst: true,
  mobileFirst: true,
  responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          arrows: false
          }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 324,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
    },
  ]
});

$(".client").click (function(){
  $(".show-review").stop().slideUp(250);
  // Toggle this window open/close
  $(this).next(".show-review").stop().slideToggle(300);
});