$(window).on('load', function(){
	$('.blog-main').addClass('muncul');
	$('.blog-sidebar').addClass('muncul');
});

$(window).on('load', function(){
	$('.logo').addClass('muncul');
	$('.nick').addClass('muncul');
	$('.kerja').addClass('muncul');
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbarNav").style.fontSize = "16px";
    document.getElementById("navbarNav").style.paddingBottom = "0px";


  } else {
    document.getElementById("navbarNav").style.fontSize = "19px";
    document.getElementById("navbarNav").style.paddingBottom = "10px";
  }
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
