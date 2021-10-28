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

  $('.intro__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });
});