 document.getElementById('addmoney-btn').addEventListener('click',function(event){ 
    event.preventDefault()
    const accountNumber=document.getElementById('main-account-number').value;
    console.log(typeof accountNumber);
   
    let amount = document.getElementById('amount2').value;
     let fixamount= parseInt(amount);
     let pin= document.getElementById ('your-secret').value; 
   let fixpin = parseInt(pin);
    console.log(typeof fixpin); 
  let fixedmainBalance = document.getElementById("main-balance").innerText;
    let fixmainBalance =parseFloat(fixedmainBalance);
    
    if (accountNumber.length === 11){
        if (fixpin === 1234){
           let sum=  fixmainBalance+ fixamount;
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
 document.getElementById('withdrawmoney-btn').addEventListener('click',function(event){ 
    event.preventDefault()
    const accountNumber=document.getElementById('main-account-number').value;
    console.log(typeof accountNumber);
   
    let amount = document.getElementById('amount2').value;
     let fixamount= parseInt(amount);
     let pin= document.getElementById ('your-secret').value; 
   let fixpin = parseInt(pin);
    console.log(typeof fixpin); 
  let fixedmainBalance = document.getElementById("main-balance").innerText;
    let fixmainBalance =parseFloat(fixedmainBalance);
    
    if (accountNumber.length === 11){
        if (fixpin === 1234){
           let sum=  fixmainBalance - fixamount;
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
