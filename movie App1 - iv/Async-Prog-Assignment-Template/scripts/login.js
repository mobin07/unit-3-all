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

var userData=JSON.parse(localStorage.getItem('signUp')) ;


function loginFun(e){
    e.preventDefault();
    // console.log('afs');
    var form=document.querySelector('#form');
    var email=form.email.value;
    var password=form.password.value;
    var count=0;
    
    userData.map(function(e,i){
        console.log(email,e.email);
        if(email==e.email && password==e.password){
            alert('login Successfully!');
            window.open('index.html');
            
            

        }else{
            count++
        }
    })
    if(count==userData.length){
        alert('Invalid credentials');
        window.location.reload();
    }
    
}
if(c==1){
    alert('Please enter correct credentials.')
}



