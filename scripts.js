$(document).ready(function(){

    // Sticky Navigation
    $('.js-section-features').waypoint(function(direction){
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

    $('.js-scroll-to-plans').on('click', function(){
        $('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000)
    });

    $('.js-scroll-to-start').on('click', function(){
        $('html, body').animate({scrollTop: $('.js-section-features').offset().top}, 1000)
    });

    // Animations on Scroll

    $('.js-wp-1').waypoint(function(direction){
        $('.js-wp-1').addClass('animated fadeIn');
    }, {offset: '50%'})

    $('.js-wp-2').waypoint(function(direction){
        $('.js-wp-2').addClass('animated fadeInUp');
    }, {offset: '50%'})

    $('.js-wp-3').waypoint(function(direction){
        $('.js-wp-3').addClass('animated fadeIn');
    }, {offset: '50%'})

    $('.js-wp-4').waypoint(function(direction){
        $('.js-wp-4').addClass('animated rubberBand');
    }, {offset: '50%'})

    // Mobile Navigation
    $('.js-nav-icon').on('click', function(){
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon-i');
        nav.slideToggle(200);

        if (icon.hasClass('ion-ios-menu')) {
            icon.removeClass('ion-ios-menu').addClass('ion-md-close');
        } else {
            icon.addClass('ion-ios-menu').removeClass('ion-md-close');
        }
    })
});