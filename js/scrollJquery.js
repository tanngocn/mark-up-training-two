$(document).ready(function() {
    $(window).scroll(function() {
        var position = $('body,html').scrollTop();
        if (position > 200) {
            $('.header').addClass('fixed');
            $('.backToTop').addClass('show');
        } else {
            $('.header').removeClass('fixed');
            $('.backToTop').removeClass('show');
        }
    });
    $('.backToTop').click(function(){
        $( "body,html" ).scrollTop( 0 );
    })
});