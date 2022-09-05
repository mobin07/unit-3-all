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

// var movieArr=['https://images.unsplash.com/photo-1586136194012-35ceaddbd773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
// 'https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3RhciUyMHdhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
// 'https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHN0YXIlMjB3YXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'];

// var box=document.querySelector('#slideshow');
// let i=0;
// let id;
// let image=document.createElement('img');
// id=setInterval(function(){
//     if(i==movieArr.length){
//         i=0;
//     }
//     box.innerHTML='';
//     image.src=movieArr[i];
//     box.append(image);
//     i++;
// },2000);

// var movieArr=JSON.parse(localStorage.getItem('movies')) || []
// movieArr=null;
var movieArr=[];







function movie(n,d,p,r){
    this.name=n;
    this.release=d;
    this.poster=p;
    this.rating=r
}
let m1=new movie('RRR','22-02-2022','https://images.unsplash.com/photo-1576074622232-fbbeb7c27cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN0YXIlMjB3YXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60','4.4');
movieArr.push(m1);

// console.log(m1);

let m2=new movie('Kashmir Files','23-03-2021','https://images.unsplash.com/photo-1649698314332-8040f6c5aa9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60','2');
movieArr.push(m2)

let m3=new movie('Iron Man','25-12-2011','https://images.unsplash.com/photo-1649696611921-f43b2284557b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60','5.0');
movieArr.push(m3)

let m4=new movie('Spiderman','15-12-2014','https://images.unsplash.com/photo-1649605955621-1b9eea02391e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60','3.0');
movieArr.push(m4);

let m5=new movie('Harrypotter','03-05-2007','https://images.unsplash.com/photo-1649605473295-be3e3fc0f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60','4.0')
movieArr.push(m5);

let m6=new movie('Hero','08-09-2010','https://images.unsplash.com/photo-1649519604453-19afddd84635?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60','1.0');
movieArr.push(m6);

let m7=new movie('Don','09-10-2011','https://images.unsplash.com/photo-1649682607433-27145443c654?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60','2.4');
movieArr.push(m7);

let m8=new movie('Tiger','12-12-2016','https://images.unsplash.com/photo-1649693002660-d63a4ff387ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60','4.2');
movieArr.push(m8);

let m9=new movie('Dabang','23-12-2010','https://images.unsplash.com/photo-1649693364265-b4d5af897d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60','3.2');
movieArr.push(m9);
localStorage.setItem('movies',JSON.stringify(movieArr));
console.log(movieArr);

window.addEventListener('load',function(){
    displayData(movieArr);
});
document.getElementById('sort-lh').addEventListener('click',lthFun);
function lthFun(){
    movieArr.sort(function(a,b){
        return a.rating-b.rating
    });
    displayData(movieArr);
}

document.getElementById('sort-hl').addEventListener('click',htlFun);
function htlFun(){
    movieArr.sort(function(a,b){
        return b.rating-a.rating;
    });
    displayData(movieArr);
}



function displayData(movieArr){
    document.querySelector('#movies').innerText='';

    movieArr.map(function (e,i){
        var box=document.createElement('div');
        var image=document.createElement('img');
        image.src=e.poster;
        image.id='image';
        var name=document.createElement('p');
        name.innerText=e.name;
        var date=document.createElement('p');
        date.innerText=e.release;
        var rating=document.createElement('p');
        rating.innerText=e.rating;

        box.append(image,name,date,rating);
        document.querySelector('#movies').append(box);

    })
    

}


