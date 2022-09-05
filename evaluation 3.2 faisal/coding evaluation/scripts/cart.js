let data=JSON.parse(localStorage.getItem("items")) || [];
let total=data.reduce(function(sum,ele)
{
    return sum+Number(ele.price);
},0);
document.getElementById("cart_total").innerText=total;
data.map(function(ele,index)
{
    let div=document.createElement("div");
        div.id="list";
        let d1=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.image;
        let name=document.createElement("p");
        name.innerText=ele.name
        let price=document.createElement("p");
        price.innerText=ele.price;
        let remove=document.createElement("button");
        remove.id="remove";
        remove.innerText="Remove";
        remove.addEventListener("click",function()
        {
            removeItems(ele,index);
        });
        d1.append(name,price,remove);
        div.append(img,d1);
        document.getElementById("cart").append(div);
});
function toCheck()
{
    window.location.href="checkout.html";
}
function removeItems(ele,index)
{
    data.splice(index,1);
    localStorage.setItem("items",JSON.stringify(data));
    window.location.reload();
    
}