/* JavaScript Document */
$(function(){
    // Mobile navigation
    $('nav a.mobile-menu').click(function(){
        var currentNavHeight = $('nav').height();

        if(currentNavHeight < 5){
            var newHeight = $('nav ul').height() + 75;
            $('nav').animate({'height': newHeight + 'px'}, 750);
        }else{
            $('nav').animate({'height':'0px'},750, function(){
                $(this).removeAttr('style');
            });
        }
    });


//    Closing open menu when window is resized
    $(window).resize(function(){
       if( $(this).width() > 625 ){
           $('nav').removeAttr('style');
       }
    });

//    Changing navbar color after scrolling
    $(document).scroll(function () {
    var $nav = $("nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });



//    Smooth scrlling
    $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });


// Change navigation active class on window scroll
    $(window).scroll(function() {
        var $sTop = $(this).scrollTop();
    if ($sTop >= $('#page').offset().top) {
       $('nav a').removeClass('active');
        $('nav a:eq(1)').addClass('active');
    }
    if ($sTop >= $('#aboutContainer').offset().top - 90) {
      $('nav a').removeClass('active');
      $('nav a:eq(2)').addClass('active');
    }
    if ($sTop >= $('#serviceContainer').offset().top - 90) {
      $('nav a').removeClass('active');
      $('nav a:eq(3)').addClass('active');
    }
    if ($sTop >= $('#bookBtn').offset().top -80) {
      $('nav a').removeClass('active');
      $('nav a:eq(4)').addClass('active');
    }
    if ($sTop >= $('#contactContainer').offset().top -90) {
      $('nav a').removeClass('active');
      $('nav a:eq(5)').addClass('active');
    }

});

//    To top function
    $(window).scroll(function() {
    if ($(this).scrollTop() ) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
$("#back-to-top").click(function () {
   $("html, body").animate({scrollTop: 0}, 1000);
});

});
