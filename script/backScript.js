 $(window).scroll(function(){
   parallax();
});

function parallax(){
    var wScroll = $(window).scrollTop();
//    console.log(wScroll);
    $(".jumbotron").css('background-position', 'center '+(-wScroll*0.1+50)+'%');

}