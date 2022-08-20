

 $('document').ready(function(){

    // login Form Action 
    $("#login-form").submit(function(event){
        event.preventDefault();
        let email = $(this).find('#email').val();
        let password = $(this).find('#password').val();
        $.ajax({
            url: 'http://localhost:3000/login', 
            type: 'POST',
            data: JSON.stringify({email:email,password:password}),
            contentType: "application/json; charset=utf-8"
          }).done(function(result){
            //  Cookies.set('auth-cookie', result.access_token);
             window.location.replace('home');
             $('#error-message').addClass('d-none');
          }).fail(function(){
              $('#error-message').removeClass('d-none');
             console.log("An error occurred, the files couldn't be sent!");
        });
    });
});