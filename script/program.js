 
$(document).ready(function() {
    $("#svidugme").addClass('focus');

    $("#svidugme").click(function(){
        $("#firsth2").css("visibility","visible");
     
        $("#svidugme").addClass('focus');
    });

    $("#prvodugme").click(function(){
        $("#firsth2").css("visibility","hidden");
        $("#fourth-pics,#second-pics,#third-pics,#secondh2,#thirdh2,#fourthh2").hide();
        $("#first-pics").show();
        $("#svidugme").removeClass('focus');
    });

    $("#drugodugme").click(function(){
        $("#firsth2").css("visibility","hidden");
        $("#fourth-pics,#first-pics,#third-pics,#secondh2,#thirdh2,#fourthh2").hide();
        $("#second-pics").show();
        $("#svidugme").removeClass('focus');
    });

    $("#trecedugme").click(function(){
        $("#firsth2").css("visibility","hidden");
        $("#fourth-pics,#second-pics,#first-pics,#secondh2,#thirdh2,#fourthh2").hide();
        $("#third-pics").show();
        $("#svidugme").removeClass('focus');
    });

    $("#cetvrtodugme").click(function(){
        $("#firsth2").css("visibility","hidden");
        $("#first-pics,#second-pics,#third-pics,#secondh2,#thirdh2,#fourthh2").hide();
        $("#fourth-pics").show();
        $("#svidugme").removeClass('focus');
    });

    $(".picoverlay").hover(function(){
        $(this).children("img").css('opacity', '0.7');
        $(this).children(".heading").children(".centered").fadeIn(200);
    }, function(){
        $(this).children("img").css('opacity', '1');
        $(this).children(".heading").children(".centered").fadeOut(200);
    });

    $(".picoverlay").click(function(){
        $(this).toggleClass("flip");
    });

    // izgled dugmica
    $(".btn").hover(function(){
        $(this).css("background-color","rgb(58, 57, 57)");
    },function(){
        $(this).css("background-color","rgba(128, 125, 125, 0.623)");
    });

});
