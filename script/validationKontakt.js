 
$(document).ready(function() {
    
    $("form").submit(function(e) {
      var greska = false;
      e.preventDefault();
      var first_name = $("#ime").val();
      var last_name = $("#prezime").val();
      var email = $("#email").val();
      var naslov = $("#naslov").val();
      var poruka = $("#poruka").val();
   
      $(".error").remove();
   
      if (first_name.length < 1) {
        $("#ime").after('<span class="error">Polje mora biti popunjeno!</span>');
        greska=true;
      }
      if (last_name.length < 1) {
        $("#prezime").after('<span class="error">Polje mora biti popunjeno!</span>');
        greska=true;
      }
      if (email.length < 1) {
        $("#email").after('<span class="error">Polje mora biti popunjeno!</span>');
        greska=true;
      }
      if (naslov.length < 8) {
        $("#naslov").after('<span class="error">Naslov mora sadrzati minimum 3 slova/karaktera</span>');
        greska=true;
      }
      if(greska==false)
      alert("Vasa poruka je poslata.");
    });
    $("form").validate({
      rules: {
        ime: 'required',
        prezime: 'required',
        email: {
          required: true,
          email: true,
        },
        naslov: {
          required: true,
          minlength: 3,
        }
      },
      messages: {
        ime: 'Polje mora biti popunjeno!',
        lname: 'Polje mora biti popunjeno!',
        email: 'Polje mora biti popunjeno!',
        naslov: {
          minlength: 'Naslov mora sadrzati minimum 3 slova/karaktera'
        }
      },
      submitHandler: function(form) {
        form.submit();
      }
      
  });
});
    

// });
  // document.forms[0].email.style.border = "1px solid red";

