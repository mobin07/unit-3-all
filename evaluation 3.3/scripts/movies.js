// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amount=localStorage.getItem('amount');
document.getElementById('wallet').innerText=amount;
let id;

async function searchMovies(){
    try{
        const query=document.getElementById('search').ariaValueMax;
        let res=await fetch(`http://www.omdbapi.com/?apikey=826bafc9&s=${query}`);
        let data=await res.json();
        console.log(data);
        let movies=data.Search;
        return movies;
    }
    catch{
        console.log('err:',err);
    }
}
function appendMovies(data){
    document.getElementById('movies').innerHTML=null;
    data.forEach(function(e){
        let box=document.createElement('div')
        let image=document.createElement('img');
        image.src=e.Poster;
        let name=document.createElement('p');
        name.innerText=e.Title;
        let but=document.createElement('button');
        but.innerText="Book now";
        but.class="book_now";
        but.addEventListener('click',function(){
            localStorage.setItem('movie',JSON.stringify(e))
            console.log(e);
            bookFun(e);
        })
        box.append(image,name,but);
        document.getElementById('movies').append(box);
    })
}
function bookFun(e){
    
    window.location.href='checkout.html';
   
}
async function main(){
    let data =await searchMovies();
    if(data==undefined){
        return false;
    }
    // console.log(data)
    localStorage.setItem('movie_list',JSON.stringify(data));
    appendMovies(data);
}

function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(function(){
        func();
    },delay);
}