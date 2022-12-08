function register(){
    username=reg_uname.value;
    email=reg_email.value;
    qualification=reg_qlfn.value;
    password=reg_pswd.value;

    studRegister={
        username,
        email,
        qualification,
        password
    }
      

    if(email in localStorage){
        alert('already exist')
    }else{
        localStorage.setItem(email,JSON.stringify(studRegister));
        alert('register successfully');
        window.location.href="index.html";
    }
}


    function login(){
        Email=login_mail.value;
        Password=login_pswd.value;

        if(Email in localStorage){
            studDetails=JSON.parse(localStorage.getItem(Email));
            if(Password==studDetails.password){
                alert('login successfull')
                window.location.href='home.html'

            }
            else{
                alert('incorrect password')
            }
        }else{
            alert('invalid email')
        }
    }
