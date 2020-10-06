$(function(){
    $('#submit').click(function(){
        var email = $('#email').val();
        var password = $('#password').val();
        if(email == '' || password == ''){
            alert("Please fill the details given!!");
        }
        else{
            alert("Congratulations !!!! You have Successfully Logged in.");
        }
    });
});