$(document).ready(function () {
  var headerSlider = $("#offers__carusel");
  headerSlider.owlCarousel({
    loop: true,
    center: true,
    nav: false,
    dots: true,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    vidio: true,
    // padding:15,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      360: {
        items: 1,
        nav: false,
        margin: 100,
      },
      768: {
        items: 1,
        dots: true,
      },
      1024: {
        items: 1,
      },
    },
  });
  var partnerSlider = $("#partners");
  partnerSlider.owlCarousel({
    loop: true,
    center:false,
    nav: false,
    dots: false,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    vidio: true,
    // padding:15,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      360: {
        items: 1,
        nav: false,
        center:true,
      },
      768: {
        items: 2,
        margin: 10,
      },
      1024: {
        items: 3,
        margin:16,
      },
      1400: {
        items: 4,
        margin:16,
      },
    },
  });
});
// partners slider end

//burger menu
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.menu').toggleClass('active');
  });
});

