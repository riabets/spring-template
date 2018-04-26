$('.header-search-item').click(function(){
    $('#InputToFocus').focus();
});
$("document").ready(function($) {
    var nav = $('.social-media-share-block');
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 700) {
            nav.addClass("fixed-share");
        } else {
            nav.removeClass("fixed-share");
        }
    });
});
$('.toggle-menu-mob').click(function(){
  $('.shops').toggleClass('sheev');
});
