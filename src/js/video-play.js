$( document ).ready(function() {
  
  $('#play-video').on('click', function(event) {
 
    $( "#video-trigger" ).addClass("removed");

    $("#video").addClass("watch");
    $("#video")[0].src += "&autoplay=1";  
    
    event.preventDefault();
 
  });

});