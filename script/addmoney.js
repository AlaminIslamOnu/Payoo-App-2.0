document.getElementById('login-btn').addEventListener('click',function(event){ 
    event.preventDefault()
    const accountNumber=document.getElementById('main-account-number').value;
    console.log(typeof accountNumber);
    
    let amount = inputToNumber ('amount')
    let pin= document.getElementById ('your-secret').value;
    /* let pin = inputToNumber ('your secret')
    console.log(typeof pin); */
    
    let fixmainBalance =inputToNumber('main-balance')
    
    if (accountNumber.length === '11'){
        if (pin === '1234'){
           let sum=amount + fixmainBalance;
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