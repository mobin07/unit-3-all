// xSxTwbLFOsbVeRSZRwoaOEk_u9aVGeOgKvOg4xCl-ao
// link-https://api.unsplash.com/search/photos/?query={value}&per_page=20&client_id=xSxTwbLFOsbVeRSZRwoaOEk_u9aVGeOgKvOg4xCl-ao
const API="xSxTwbLFOsbVeRSZRwoaOEk_u9aVGeOgKvOg4xCl-ao";
import { navbar } from "../components/navbar.js"
let n=document.getElementById("navbar");
n.innerHTML=navbar();

import {searchImages,append} from "./fetch.js";

let search=(e)=>{
    if(e.key==="Enter"){
        let value=document.getElementById("query").value;
        searchImages(API,value).then((data)=>{
            
            console.log(data);
            let container=document.getElementById("container");
           container.innerHTML=null;
            append(data.results,container);
        });
    }
};
// whenever we trigger any key an event will be triggered we take the event in e
document.getElementById("query").addEventListener("keydown",search);

// let searchImages=async()=>{
//     let value=document.getElementById("query").value;
//     try{
//         let res=await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`);
//         let data=await res.json();
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }

let categories=document.getElementById("categories").children;
console.log(categories);


function cSearch(){
    console.log(this.id);
    searchImages(API,this.id).then((data)=>{
            
        console.log(data);
        let container=document.getElementById("container");
       container.innerHTML=null;
        append(data.results,container);
    });
}
for(let el of categories){
    el.addEventListener("click",cSearch);
}

// h3={
//     id:"nature";
//     cSearch()
// }