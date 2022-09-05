var userData=JSON.parse(localStorage.getItem('signUp')) || [];

function con(n,c,e,p){
    this.name=n;
    this.contact=c;
    this.email=e;
    this.password=p
}


function signFun(e){
    e.preventDefault();
    var form=document.querySelector('#form');
    var name=form.name.value;
    var contact=form.contact.value;
    var email=form.email.value;
    var password=form.password.value;
    
    let c1=new con(name,contact,email,password);
    userData.push(c1);
    localStorage.setItem('signUp',JSON.stringify(userData));
    console.log(userData);
    // name.innerText=null;
    alert('SingUp successfully.In order to login click on login')
    window.location.reload();
    
    


}
document.querySelector('#home').addEventListener('click',homeFun);
function homeFun(){
    window.open('index.html');
}

document.querySelector('#login').addEventListener('click',loginPage);
function loginPage(){
    window.open('login.html');
}
document.querySelector('#Signup').addEventListener('click',signupPage);
function signupPage(){
    window.open('signup.html');
}