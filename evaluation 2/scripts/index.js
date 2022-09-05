// Store cart items in local storage with key: "items"
let cartArr=JSON.parse(localStorage.getItem('items')) || [];
window.addEventListener('load',function(){
    displayData();
});
document.querySelector('#item_count').innerHTML=cartArr.length;

function displayData(){
    const url=`https://grocery-masai.herokuapp.com/items`
    fetch(url)
        .then(function (res){
            return res.json();
        })
        .then(function(res){
            console.log('res:',res);
            append(res.data);
        })
        .catch(function(err){
            console.log('err:',err);
        })
}
function  append(data){
    // console.log(res);
    
    let container=document.getElementById('items');
    container.innerHTML='';
    // console.log(dataArr);
    data.forEach(function (e,i){
        // console.log(e.name);
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
        button.innerText='Add to cart';
        button.id='add_to_cart';
        button.addEventListener('click',function(){
            addToCart(e,i)
        })

        box.append(imagediv,name,price,button);
        document.getElementById('items').append(box);


    })

}
function addToCart(e,i){
    cartArr.push(e);
    localStorage.setItem('items',JSON.stringify(cartArr));

}
