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


});