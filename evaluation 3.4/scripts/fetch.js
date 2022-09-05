
let gettData=async(url)=>{
    // try{
        let res= await fetch(`${url}`);
        let data=await res.json();
        // append(data);
        console.log(data);
        return data;
    // }catch(err){
    //     console.log(err);
    // }
}

// getData(url);

let append=(data,container) =>{
    // let container=document.getElementById("container")
    // console.log("append:",data);
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
        container.append(box);
        box.addEventListener('click',function(){
            news(e);
        })
    })
}
function news(e){
    let arr=[];
    arr.push(e)
    localStorage.setItem('news',JSON.stringify(arr));
    window.location.href="news.html";


}

export {gettData,append};
