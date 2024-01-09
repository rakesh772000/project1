function login(){
    event.preventDefault();

    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    if(email==""){
        alert('Email required')
        return

    }else if(password==""){
        alert('password required')
        return
    }else{
        var old_email=localStorage.getItem('email');
        var old_password=localStorage.getItem('password');
        if(email!=old_email&&password!=old_password){
            alert('Invalid email or password')
        }else if(email==old_email&&password==old_password){
            alert('login successfull')
            window.location.href="display.html"
        }else{
            alert('please enter all credentials')
        }
    }

}