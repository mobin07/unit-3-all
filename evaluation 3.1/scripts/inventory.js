document.querySelector('#add_product').addEventListener('click',open)
function open(){
    window.open('\Assignment\evaluation 3.1\index.html.html');
}
var arr=JSON.parse(localStorage.getItem('data'))  || [];
window.addEventListener('load',function(){
    displayArr(arr);
})

function displayArr(arr){
    document.querySelector('#products_data').innerHTML='';
    arr.map(function(e,i){
    var box=document.createElement('div');
    var image=document.createElement('img');
    image.src=e.image;
    var name=document.createElement('p');
    name.innerText=e.name;
    var brand=document.createElement('p');
    brand.innerText=e.brand;
    var price=document.createElement('p');
    price.innerText=e.price;
    var remove=document.createElement('button');
        remove.id='remove_product';
        remove.innerText='remove';
        // remove.style.backgroundColor='gray';
        remove.addEventListener('click',function(){
            removeFun(e,i);
        })
    box.append(image,name,brand,price,remove);
    document.querySelector('#products_data').append(box);




        
    });
    function removeFun(e,i){
        arr.splice(i,1);
        localStorage.setItem('data',JSON.stringify(arr));
       
        displayArr(arr);

    }


}

