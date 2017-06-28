var imgs = ["img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg"]
var test = document.getElementsByClassName("img");

$(".post-nav").hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);
