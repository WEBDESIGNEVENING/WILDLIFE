const password = document.getElementById('password');
const showHide = document.getElementById('showHide');

showHide.addEventListener('click',()=>{
    if(password.type === "password"){
        password.type = "text"
    }else{
        password.type = "password"
    }
})