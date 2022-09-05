let cartArr=JSON.parse(localStorage.getItem('items')) || [];
var total=localStorage.getItem('total_cart') || []
window.addEventListener('load',function(){
    cartData();
    // document.querySelector('#cart_total').innerText='';
});
document.querySelector('#checkout').addEventListener('click',nextfun);
function nextfun(){
    window.open('checkout.html')
}





function cartData(){
    let container=document.querySelector('#cart');
    container.innerHTML='';
    cartArr.map(function(e,i){
        let box=document.createElement('div');
        box.id='inner'
        var name=document.createElement('div');
        name.innerText=e.name;

        let price=document.createElement('div');
        price.innerText=e.price;

        let imagediv=document.createElement('div');
        let image=document.createElement('img');
        image.src=e.image;
        image.id='image_andar';
        imagediv.append(image);
        imagediv.id='imagediv';


        let button=document.createElement('button');
        button.innerText='remove';
        button.id='remove';
        button.addEventListener('click',function(){
            removeFun(e,i)
        })

        box.append(imagediv,name,price,button);
        document.getElementById('cart').append(box);
         total=Number(total)+Number(e.price);
        localStorage.setItem('total_cart',total);

    })
}
function removeFun(e,i){
    cartArr.splice(e,1)
    localStorage.setItem('items',JSON.stringify(cartArr));
    window.location.reload();
}



