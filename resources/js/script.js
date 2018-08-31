$(document).ready(function() {

  /* For the sticky navigation */
  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '50px;'
  });

  /* Scroll on buttons */
  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  });

  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });

  $('.js--scroll-to-features').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });

  $('.js--scroll-to-steps').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-steps').offset().top}, 1000);
  });

  $('.js--scroll-to-cities').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-cities').offset().top}, 1000);
  });

  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  });

  /* Animations on scroll*/
  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '60%'
  });

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '60%'
  });

  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset: '60%'
  });

  $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '60%'
  });

  /* Mobile nav*/

  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon ion-icon');

    if (icon.attr('name') === 'menu') {
      icon.attr('name', 'close')
    } else if (icon.attr('name') === 'close') {
      icon.attr('name', 'menu')
    }
    nav.slideToggle(200);
  
  })

});