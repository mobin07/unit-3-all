import navbar from "../components/navbar.js";


document.getElementById("navbar").innerHTML=navbar();



let url="https://fakestoreapi.com/products/category/jewelery";
let container=document.getElementById("container")




import  {getData,append} from "./fetch.js";

getData(url).then((res)=>{
    append(res,container);
})













// let getData= async () =>{
//     try {
//         let res=await fetch("https://fakestoreapi.com/products/category/jewelery");
//         let data=await res.json()
//         apppend(data);
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getData();
// let apppend=(data)=>{
//     let container=document.getElementById("container");

//     data.forEach(({title})=>{
//         let p=document.createElement("p")
//         p.innerText=title;
//         container.append(p);
//     })
// }