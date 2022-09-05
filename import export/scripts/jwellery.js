import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

let url="https://fakestoreapi.com/products/category/jewelery";
let container=document.getElementById("container");

import { getData,append } from "./fetch.js";

getData(url).then((res)=>{
    append(res,container);
})

