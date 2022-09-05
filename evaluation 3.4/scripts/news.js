// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let arr=JSON.parse(localStorage.getItem('news'));


console.log(arr);
// console.log(arr[0].description);
let imge=document.createElement('img');
imge.src=arr[0].urlToImage;
let p=document.createElement("p");
p.innerText=arr[0].title;
let p2=document.createElement("p2");
p2.innerText=arr[0].description;
document.getElementById('detailed_news').append(imge,p,p2);

