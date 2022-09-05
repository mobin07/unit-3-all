function seeAlert(event)
{
    event.preventDefault();
    let status=true;
    let myPromise= new Promise(function(resolve,reject)
    {
        if(status==true)
        {
            setTimeout(function()
    {
        alert("Your order is accepted");
       
        
    },0);
    setTimeout(function()
    {
        alert("Your order is being Packed");
    
    },3000);
    setTimeout(function()
    {
        alert("Your order is in transit");
    ;
    },8000);
    setTimeout(function()
    {
        alert("Your order is out for delivery");
        
    },10000);
    setTimeout(function()
    {
        alert("Order delivered");
        window.location.reload();
    },12000);
        }

        else{
            reject();
        }
    })
    
   
      
    
    
}