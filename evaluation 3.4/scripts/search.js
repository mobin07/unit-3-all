// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let query=localStorage.getItem('query1');
console.log(query);
let url=`https://masai-mock-api.herokuapp.com/news?q=${query}`;
async function search(){
    let res= await fetch(`${url}`);
    let data=await res.json();
    append(data);
    // console.log(data);
    return data;
}
search();

function append(data){
    data.articles.forEach(function(e){
        let box=document.createElement('div');
        box.class="news";
        box.id="news";
         let image=document.createElement('img');
         image.src=e.urlToImage;
         image.id="mai";
         let div=document.createElement('div');
         let heading=document.createElement('p');
         heading.innerHTML=e.title;
         heading.id="heading";
         let description=document.createElement('p');
         description.innerHTML=e.description;
         div.append(heading,description);
         box.append(image,div);
         document.getElementById('results').append(box);
})
};
