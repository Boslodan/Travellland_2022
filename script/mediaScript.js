 $(document).ready(function(){
    $(".media-item").hover(function(){
        $(this).css("opacity","1");
    },function(){
        $(this).css("opacity","0.5");
    });
});