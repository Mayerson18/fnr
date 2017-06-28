$(".post-nav").hover(
  function() {//Mouseenter
    var x = $(this).parent().parent().parent().parent().siblings().find("img");
    var img = $(this).data("img");
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $(x).removeClass("animated bounceOut fadeInLeft");
    $(x).addClass("animated bounceOut").one(animationEnd, function() {
      $(this).attr("src",img);
      $(this).removeClass('bounceOut').addClass("fadeInLeft").one(animationEnd, function() {
        $(this).removeClass('animated fadeInLeft');
      });
    });
  }, function() {//Mouseout
  }
);
