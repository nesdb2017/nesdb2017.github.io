jQuery(document).ready(function($){
   var slideQty =  $('.bxslider').bxSlider({
        auto: true,
        controls: false,
        mode: 'fade',
        speed: 5000,
        pager: ($(".bxslider > a img").length > 1 || $(".bxslider > img").length > 1) ? true: false
    });
});
