$(function () {

  // ================ RIGHT SIDE MENU ================ //

  // Open rightside menu
  $('.header__btn').on('click', function() {
    $('.rightside-menu').removeClass('rightside-menu--close')
  });

  // Remove rightside menu
  $('.rightside-menu__close').on('click', function() {
    $('.rightside-menu').addClass('rightside-menu--close')
  });

  // close modal on click outside at anywhere
  $(document).on('click',function(e){
    if(!(($(e.target).closest(".rightside-menu").length > 0 ) || ($(e.target).closest(".header__btn").length > 0))){
    $(".rightside-menu").addClass('rightside-menu--close');
    }
  });

  // ================ SLICK CAROUSEL ================ //
  // intro slider
  $('.intro__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });

  // contact slider
  $('.contact__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 10,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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

  // blog slider item blog-items__item-slider-box
  
  $('.blog-items__item-slider-box').slick({
    prevArrow: '<button type="button" class="blog-items__item-slider-prev blog-items__item-slider-arrow"><img src="images/svg/arrow-left.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="blog-items__item-slider-next blog-items__item-slider-arrow"><img src="images/svg/arrow-right.svg" alt="prev"></button>',
  });
  
   // ================ FILTER FOR GALLERY ================ //
   var mixer = mixitup('.gallery__items');

});