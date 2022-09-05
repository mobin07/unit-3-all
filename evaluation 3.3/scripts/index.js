// Store the wallet amount to your local storage with key "amount"
let amount=localStorage.getItem('amount') || 0

document.getElementById('add_to_wallet').addEventListener('click',addToWallet);

function addToWallet(){
    inamo=document.getElementById('amount').value;
    console.log(inamo);
    amount=Number(amount)+Number(inamo);
    localStorage.setItem('amount',amount);
    console.log(amount);
    document.getElementById('wallet').innerText=amount;
}

