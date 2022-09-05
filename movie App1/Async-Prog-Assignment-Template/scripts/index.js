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

var movieArr=['https://images.unsplash.com/photo-1586136194012-35ceaddbd773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
'https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3RhciUyMHdhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
'https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHN0YXIlMjB3YXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'];

var box=document.querySelector('#slideshow');
let i=0;
let id;
let image=document.createElement('img');
id=setInterval(function(){
    if(i==movieArr.length){
        i=0;
    }
    box.innerHTML='';
    image.src=movieArr[i];
    box.append(image);
    i++;
},2000);
