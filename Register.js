function register(){
    event.preventDefault();

    var username=document.getElementById('username').value ;
    var email=document.getElementById('email').value ;
    var password=document.getElementById('password').value ;

    if(username==""){
        alert('username required');
        return;
    }else if(email==""){
        alert('email required');
        return;

    }else if(password==""){
        alert('password required');
        return;
    }
    else{
        localStorage.setItem('username',username);
        localStorage.setItem('email',email);
        localStorage.setItem('password',password);
        alert('Thanks for register')
        window.location.href='login.html'
    }
}