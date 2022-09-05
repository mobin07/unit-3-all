// const url=`https://fakestoreapi.com/products`;
const url=`https://reqres.in/api/users?page=2`;
let container=document.querySelector('#container');

fetch(url)
        .then(function(res){
            return res.json();
        })
        .then(function (res){
            console.log("res:",res);
            appendData(res.data);
            
        })
        .catch(function(err){
            console.log("err:",err);
        })

function appendData(data){
    data.forEach(function (el){
        console.log(el.first_name);
     var box=document.createElement('div');
     let first_name=document.createElement('p');
     first_name.innerText=el.first_name;

     let last_name=document.createElement('p');
     last_name.innerText=el.last_name;

     let avatar=document.createElement('img');
     avatar.src=el.avatar;
     avatar.id='avatar'
     

     box.append(avatar,first_name,last_name);
     container.append(box);

    })
}