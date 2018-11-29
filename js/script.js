$(document).ready(function () {

    $(function () {
        $('html').click(function () {
            closeNav();
        });
        $('.sidenav').click(function (event) {
            event.stopPropagation(); // prevents executing the above event
        });
        $('#menu').click(function (event) {
            event.stopPropagation(); // prevents executing the above event
        });

    });

    $(function () {
        $('.matchHeight').matchHeight();
    });

    $(document).ready(function () {
        // Add smooth scrolling to all links
        $("a").on('click', function (event) {

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
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });


});


function openNav() {
    document.getElementById("mySidenav").style.width = "220px";
    document.getElementById("menu").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    setTimeout(function () {
        document.getElementById("menu").style.display = "initial";
    }, 300);
}


/*$(document).ready(function(){
  $('.your-class').slick({
    dots: true
  });
});
*/

$(document).ready(function(){
    
$('.slider').on('init', function(event, slick){
   var $items = slick.$dots.find('li');
   $items.addClass('transparent-circle');
   $items.find('button').remove();
});
    
$('.slider').on('init', function(event, slick){
   var $items = slick.$dots.find('li.slick-active');
   $items.addClass('active');
});
    


// Setup
$('.slider').slick({
    dots: true
  });
});