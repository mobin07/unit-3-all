// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount=localStorage.getItem('amount');
document.getElementById('wallet').innerText=amount;
let movie=JSON.parse(localStorage.getItem('movie')) || [];

window.addEventListener('load',function(){
    appendMovies();
})

function appendMovies(){
    
    document.getElementById('movie').innerHTML=null;
    let image=document.createElement('img');
    image.src=movie.Poster;
    let name=document.createElement('p')
    name.innerText=movie.Title;
    document.getElementById('movie').append(image,name);

}

// document.querySelector('form').addEventListener('submit',formFun());

function formFun(event){
    event.preventDefault();
    let seats=document.getElementById('number_of_seats').value;
     let amo=amount-100*Number(seats);
     if(amo>0){
         amount=amo;
         localStorage.setItem('amount',amount);
         alert('Booking successful!');
         document.getElementById('wallet').innerText=amount;
     }else{
         alert('Insufficient Balance!')
     }
    
}