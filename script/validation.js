 $(document).ready(function() {

    var checkName = false;
    var checkSurname = false;
    var checkEmail = false;
    var checkNaslov = false;
    var checkPoruka = false;
    var checkSelected = false;
    
    $("#btn-valid").click(function(){
        var first_name = $("#ime");
        var last_name = $("#prezime");
        var email = $("#email");
        var naslov = $("#naslov");
        var poruka = $("#poruka");
        var selected = $("#selector");
        
        
        if(first_name.val() == '' || first_name.val() == 'null'){
            $(".errorName").css("visibility","visible");
            checkName = true;
        }else{
            $(".errorName").css("visibility","hidden");
            checkName = false;
        }

        if(last_name.val() == '' || last_name.val() == 'null'){
            $(".errorSurname").css("visibility","visible");
            checkSurname = true;
        }else{
            $(".errorSurname").css("visibility","hidden");
            checkSurname = false;
        }
        
        if( !validateEmail(email.val())){
            $(".errorEmail").css("visibility","visible");
            checkEmail = true;
        }else{
            $(".errorEmail").css("visibility","hidden");
            checkEmail = false;
        }

        if(selected.val()=="1"){
            $(".errorOption").css("visibility","visible");
            checkSelected = true;
        }else{
            $(".errorOption").css("visibility","hidden");
            checkSelected = false;
        }

        if(naslov.val() == '' || naslov.val() == 'null'){
            $(".errorNaslov").css("visibility","visible"); 
            checkNaslov = true;            
        }else{
            $(".errorNaslov").css("visibility","hidden");
            checkNaslov = false;
        }

        if(poruka.val() == '' || poruka.val() == 'null'){
            $(".errorPoruka").css("visibility","visible");
            checkPoruka = true;
        }else{
            $(".errorPoruka").css("visibility","hidden");
            checkPoruka = false;
        }

        if(checkEmail==false && checkName==false && checkSurname==false && checkSelected==false && checkPoruka==false && checkNaslov==false){
            
            $(".alert").css('opacity',1); 
            $("input,textarea").val("");
            $(selected).val("1");
        }
    });
   
    
    function validateEmail(email){
            var emailReg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return emailReg.test(email);
        }

        
});