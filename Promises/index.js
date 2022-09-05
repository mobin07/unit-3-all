function checkTransaction(){
    return true;
}

const myPromise= new Promise(function(resolve,reject){
    let transaction_status=false;

    setTimeout(function(){
        transaction_status=checkTransaction();

        if(transaction_status===true){
            resolve('Payment Successful')
        }else{
            reject('Payment Failed')
        }
    },3000);
});

myPromise
  .then(function(res){
     console.log('res:' +res) ;
     image.src='https://giphy.com/stories/ketanji-brown-jackson-93604c59-b323';
  })
  .catch(function(err){
      console.log('this is my err',err);
  });