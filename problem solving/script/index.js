// url- https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=xSxTwbLFOsbVeRSZRwoaOEk_u9aVGeOgKvOg4xCl-ao  
let api=xSxTwbLFOsbVeRSZRwoaOEk_u9aVGeOgKvOg4xCl-ao
// https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=xSxTwbLFOsbVeRSZRwoaOEk_u9aVGeOgKvOg4xCl-ao
// &order_by=popular &orientation=landscape
import{navbar} from "../components/navbar";
let n=document.getElementById('navbar');
n.innerHTML=navbar();

import {searchImages,append} from "./fetch.js"

let search=(e)=>{
    if(e.key==="Enter"){
        let value=document.getElementById('query').value;
        
        searchImages(api,value).then((data)=>{
            console.log(data);
            let container=document.getElementById("container");
            container.innerHTML=null;
            append(data.results,container);
        });
        // console.log(data);
    }
};
document.getElementById("query").addEventListener("keydown",search);
let categories=document.getElementById('categories').children;
// console.log(categories);
function cSearch() {
    console.log(this.id);
    searchImages(api,this.id).then((data)=>{
        console.log(data);
        let container=document.getElementById("container");
        container.innerHTML=null;
        append(data.results,container);
})}
// h3={
//     id:"nature",
//     cSearch();
// }
let el;
for( el of categories){
    el.addEventListener("click",cSearch);

}

// let searchImages=async ()=>{
//     try{
//         let res=await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=xSxTwbLFOsbVeRSZRwoaOEk_u9aVGeOgKvOg4xCl-ao`);
//         let data=await res.json();
//         return data;
//     }catch{
//         console.log(err);
//     }
// }