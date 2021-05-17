function scrollHandler() {
  if ($(window).scrollTop() >= $(".profile").position().top) {
    $(".menu-right button").css("color","#4a4a4a");
    $(".navbar img").attr("src","./img/yunlogo2.png");

    $(".skill").each(function() {
      var skill = $(this);
      var percentage = skill.find(".percentage").text();
      skill.find(".inner-bar").animate({width: percentage}, 1200);
    });
  }else {
    $(".menu-right button").css("color","white");
    $(".navbar img").attr("src","./img/yunlogo.png");
  }
  $("section").each(function() {
    if($(window).scrollTop() >= $(this).position().top){
      $(this).find(".vertical-center").animate({top: "0", opacity: "1"}, 800)
    }
  });
}

$(window).on("scroll", scrollHandler);
scrollHandler();
//섹션 스크롤
$(".menu-right button").on("click", function() {
  var id = $(this).attr("id");
  if (id == "profile-btn") {
    $("html, body").animate({scrollTop: $(".profile").position().top}, 1000)
  }else if (id == "about-btn") {
    $("html, body").animate({scrollTop: $(".about").position().top}, 1000)
  }else if(id == "port-btn") {
    $("html, body").animate({scrollTop: $(".portfolio").position().top}, 1000)
  }else if(id == "contact-btn") {
    $("html, body").animate({scrollTop: $(".contact").position().top}, 1000)
  }
});
