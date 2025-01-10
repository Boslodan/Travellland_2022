 //$(document).ready(function(){
//    $('.card').hover(function(){
//       $(this).children(".card-img").css('filter', 'blur(3px)');
////        $(this).children(".card-img-overlay").css('visibility', 'visible');
//        $(this).children(".card-img-overlay").animate({"visibility": "visible"}, 2000);
////        $(this).children(".card-img-overlay").children("h5,p").show(3000);
//    }, function(){
//        $(this).children(".card-img").css('filter', 'blur(0px)');
//        $(this).children(".card-img-overlay").css('visibility', 'hidden');
//    });
//});

$(document).ready(function(){
    $(".card").hover(function(){
        $(this).children(".card-img").css('filter', 'blur(1.5px)');
         $(this).children(".card-img-overlay").children(".naslov").fadeIn(300);
    }, function(){
        $(this).children(".card-img").css('filter', 'blur(0px)');
        $(this).children(".card-img-overlay").children(".naslov").fadeOut(300);
    });
})