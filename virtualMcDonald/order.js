function food(){
    var checkedValue = null; 
var inputElements = document.getElementsByClassName('food');
// console.log(inputElements);
for(var i=0; inputElements[i]; i++){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
}
// console.log(checkedValue);
var image=document.querySelector('#image');
var orderid=document.querySelector('#orderid');



    // let order=document.getElementById('food').value;
    let status='open';
    let mypromise=new Promise(function(resolve,reject){
        let time=Math.random()*5*1000;
        setTimeout(function(){
            if(status=='open'){
                resolve(checkedValue);
            }else{
                reject();
            }
        },time);
    });

    mypromise.then(function(res){
        console.log(`${res} is ready`);
        if(res=='burger'){
            image.src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60';
            orderid.innerHTML='A123'

        }else if(res=='pizza'){
            image.src='https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60';
            orderid.innerHTML='B224'
        }else{
            image.src='https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aWNlJTIwY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60';
            orderid.innerHTML='C2334'
        }


    });
}