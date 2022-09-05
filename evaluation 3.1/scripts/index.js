//store the products array in localstorage as "data"

    var arr= JSON.parse(localStorage.getItem('data')) || [];
    console.log(arr);
    document.querySelector('#show_products').addEventListener('click',show);
    function show(){
        window.open('\inventory.html');

    }
    document.querySelector('form').addEventListener('submit',addProduct);
    function product(b,n,p,i){
        this.brand=b;
        this.name=n;
        this.price=p;
        this.image=i;

    }

    function addProduct(){
        event.preventDefault();
        var form=document.querySelector('form');
        var brand=form.product_brand.value;
        var name=form.product_name.value;
        var price=form.product_price.value;
        var image=form.product_image.value;
       let p1=new product(brand,name,price,image);
       arr.push(p1);
       localStorage.setItem('data',JSON.stringify(arr));



    }
    
        



