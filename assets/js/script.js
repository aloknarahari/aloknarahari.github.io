$(document).ready(function() {


$(".button").click(function(){
    if ($(".navigation").hasClass("sidebar-active")) {
          $(".navigation").removeClass("sidebar-active");
        } else {
          $(".navigation").addClass("sidebar-active");
          $(".navigation").fadeIn(2000);
          
    
        }
  });


$(".anchor").click(function(){
$('html, body').animate({
scrollTop: $( $.attr(this, 'href')).offset().top
}, 1000);
  return false;

});

$('.expand').click(function(){
	$('.bio-descrip').removeClass("bio-descrip-hidden");
});

(function(window, document, $, undefined) {
  "use strict";

  $(function() {
      var animOptions = {
          duration: 250,
          easing: "ease-in-out"
      };

      var open = false;

      $(".js-toggle").on("click", function() {
          var $el = $(this);
          var $rects = $el.find("svg rect");

          if ($el.hasClass("active")) {
              $rects.eq(1).velocity("stop").velocity("reverse");
              $rects.eq(0).add($rects.eq(2)).velocity("stop").velocity("reverse");
          } else {
              $rects.eq(1).velocity({
                  opacity: 0
              }, animOptions);

              $rects.eq(0).velocity({
                  transformOrigin: [30, 25],
                  translateY: 17,
                  rotateZ: 45
              }, animOptions);

              $rects.eq(2).velocity({
                  transformOrigin: [30, 25],
                  translateY: -17,
                  rotateZ: -45
              }, animOptions);
          }

          $el.toggleClass("active");
      });
  });

})(window, document, jQuery);











});
