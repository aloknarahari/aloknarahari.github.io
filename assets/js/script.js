$(document).ready(function() {


$("#sidebar-button").click(function(){
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



});
