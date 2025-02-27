document.getElementById('cashout').style.display = "none"

document.getElementById('login-btn').addEventListener('click',function(event){ 
    event.preventDefault()
    const accountNumber=document.getElementById('account-number').value;
    let amount = inputToNumber ('amount')
    let pin = inputToNumber ('pin-number')
    console.log(typeof pin);
    
    let fixmainBalance =inputToNumber('main-balance')
    
    if (accountNumber.length === 11){
        if (pin === 1234){
            let sum= fixmainBalance + amount;
            document.getElementById('main-balance').innerText =sum;

        }
        else{
          alert("Invalid pin")
        }
   }
   else {
      alert("Invalid Number")
   }


   
})