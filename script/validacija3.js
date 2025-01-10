 $(document).ready(function() {

    $("#ime").on("input", function() {
        var input=$(this);
	    var is_name=input.val();
	    if(is_name){
            input.removeClass("invalid").addClass("valid");
        }
        else{
            input.removeClass("valid").addClass("invalid");
        }
    });

    $("#prezime").on("input", function() {
        var input=$(this);
	    var is_surname=input.val();
	    if(is_surname){
            input.removeClass("invalid").addClass("valid");
        }
        else{
            input.removeClass("valid").addClass("invalid");
        }
    });

    $("#poruka").keyup(function(event) {
        var input=$(this);
        var message=$(this).val();
        console.log(message);
        if(message){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}	
    });
    
    $("#contact_submit button").click(function(event){
        var form_data=$("form").serializeArray();
        var error_free=true;
        for (var input in form_data){
            var element=$("form_"+form_data[input]['name']);
            var valid=element.hasClass("valid");
            var error_element=$("small", element.parent());
            if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
            else{error_element.removeClass("error_show").addClass("error");}
        }
        if (!error_free){
            event.preventDefault(); 
        }
        else{
            // alert('Niste dobro popunili formu.');

        }
    });

});