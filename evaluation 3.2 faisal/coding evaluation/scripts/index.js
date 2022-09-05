// Store cart items in local storage with key: "items"
let url="https://grocery-masai.herokuapp.com/items"
let cartItem=JSON.parse(localStorage.getItem("items")) || [];
// window.location.reload();
document.getElementById("item_count").innerText=cartItem.length;
fetch(url).then(function(res)
{
    return res.json();
}).then(function(res)
{
    console.log(res);
    appendData(res);
})

function appendData(obj)
{
    obj.data.map(function(ele)
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
        let addToCart=document.createElement("button");
        addToCart.innerText="Add to Cart";
        addToCart.id="add_to_cart";
        addToCart.addEventListener("click",function()
        {
            cartItems(ele);
        });
        d1.append(name,price,addToCart);
        div.append(img,d1);
        document.getElementById("items").append(div);
    })
}

function cartItems(ele)
{
    cartItem.push(ele);
    localStorage.setItem("items",JSON.stringify(cartItem));
    window.location.reload();
    
}