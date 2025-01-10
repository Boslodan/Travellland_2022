 $(document).ready(function() {
   
    var first_name = $("#ime").val();
    var last_name = $("#prezime").val();
    var email = $("#email").val();
    var naslov = $("#naslov").val();
    var poruka = $("#poruka").val();
    var indexat = email.indexOf("@"); //Index of "@" in the email field
    var indexdot = email.indexOf("."); //Index of "." in the email field
    
    //Function will execute when the button "Click to Submit" is clicked.
    $("#btnvalidate").click(function() {
        
      //Blank field validation of fullname, mobile no and address. The function will generate an alert message if "fullname" or "mobile no" or "address" field is blank  
      if(fullname == "")
      {
        alert('Please enter your Full Name');
        $("#ime").focus(); //The focus function will move the cursor to "fullname" field
      }
      else if(prezime == "")
      {
        alert('Please enter your Address');
        $("#prezime").focus();
      }
      else if(naslov == "")
      {
        alert('Please enter your Mobile Number');
        $("#naslov").focus();
      }
      
      //Validation of valid email address. The function will generate an alert message if "email" field is blank or incorrect
      else if(indexat < 1 || (indexdot-indexat) < 2)
      {
        alert('Please enter a valid Email Id');
        $("#email").focus();
      }
      
      //Validation of password. The function will generate an alert message if "password" field is not same as "retype password".
      else if(poruka == "")
      {
        alert('Password and Retype password donot match');
        $("#poruka").focus();
      }
    });
});