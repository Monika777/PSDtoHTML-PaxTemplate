function initMap() {
        var location = {lat: 51.522938, lng: -0.130821};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: location
        });
        var marker = new google.maps.Marker({
          position: location,
          map: map  
        });
      }

    $(document).ready(function() { 

    $('a[href^="#"]').on('click', function(event) {
    
        var target = $( $(this).attr('href') );
    
        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

});
