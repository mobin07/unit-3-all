// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

// url-
// https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}
let country_code='in';
let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country_code}`;

let container=document.getElementById("results");
import {gettData,append} from "./fetch.js";

gettData(url).then((res)=>{
    append(res,container);
});
document.getElementById('search_input').addEventListener("keydown",search);

function search(){
    let query=document.getElementById("search_input").value;
    localStorage.setItem('query1',query);
    window.location.href="search.html";
}



