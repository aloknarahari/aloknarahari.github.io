$(document).ready(function() {

$(document).ready(function(){
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });
});


$(".button").click(function(){
    if ($(".navigation").hasClass("sidebar-active")) {
          $(".navigation").removeClass("sidebar-active");
        } else {
          $(".navigation").addClass("sidebar-active");
          $(".navigation").fadeIn(2000);
        }
  });




//change color of hamburger icon
$(function() {
    var scrolldiv = $("#nav-icon3 span"); //the div you want 
    // calculate heights of different sections
    h1 = $('#home-section').height(); 
    h2 = $('#home-section').height() + $('#bio-section').height();
    h3 = $('#home-section').height() + $('#bio-section').height() + $('#works-section').height();

//If-else statement for when to change color depending on height
    $(window).scroll(function() {
        if($(this).scrollTop() > h3 ) { 
                $(scrolldiv).css('background', 'black'); 
            }
        else if ($(this).scrollTop() > h2)  {
            $(scrolldiv).css('background', 'white'); 
        }
        else if($(this).scrollTop() > h1) {
          $(scrolldiv).css('background' , 'black');
        }
        else {
          $(scrolldiv).css('background', 'white'); 
        }
    })
});


$(function(){
  if ($('.navigation').hasClass('sidebar-active')) {
    $('#nav-icon3 span').css('background' , 'white');
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


$('.text').attr('href' , 'http://www.google.com');








});
