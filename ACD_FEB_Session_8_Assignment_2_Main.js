function store(){
    if(typeof(Storage)!==undefined)
    {
        var username=document.getElementById("userName").value;
        localStorage.setItem('username',username );
        var email=document.getElementById("email").value;
        localStorage.setItem('email',email );
        var password=document.getElementById("password").value;
        localStorage.setItem('password',password );
        console.log("Values successfully stored");
    }
    else{
        alert("No support for storage !!!!");
    }
}
function validate(){
        //var username=localStorage.getItem('username');
        //console.log(username);
        // var usernameEntered=document.getElementById("userName").value;
        var email=localStorage.getItem("email");
        var emailEntered=document.getElementById("email").value;
        console.log(email);
        var password=localStorage.getItem('password');
        console.log(password);
        var passwordEntered=document.getElementById("password").value;
        if(email==emailEntered && password==passwordEntered)
            {
                window.location="loginSuccess.html";
                
                //document.getElementById("uName").innerHTML="Welcome "+ usernameEntered ;
                
            }
            
        else{
            document.getElementById("errorMsg").innerHTML="Incorrect user name or password";
        }
      
}

function getUsername(){
    document.getElementById("userName").innerHTML="Welcome " + localStorage.getItem('username');
}