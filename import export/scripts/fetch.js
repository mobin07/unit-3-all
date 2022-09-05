// https://fakestoreapi.com/products/category/jewelery
let getData= async (url) =>{
    try{
        let res= await fetch(`${url}`);
        let data=await res.json();
        // append(data);
        console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
}

getData();

let append=(data,container) =>{
    // let container=document.getElementById("container")

    data.forEach(({title})=>{
        let p=document.createElement('p');
        p.innerText=title;
        container.append(p);
    })
}

export {getData,append};
