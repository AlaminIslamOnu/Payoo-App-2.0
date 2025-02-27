document.getElementById('login-btn').addEventListener('click',function(event){
      event.preventDefault()
  
     const accountNumber=document.getElementById('mobile-number').value; 
    
     const pinn= inputToNumber('pin'); 
  ;
  
     if (accountNumber.length === 11){
          if (pinn === 1234){
             window.location.href="main.html"
          }
          else{
            alert("Invalid pin")
          }
     }
     else {
        alert("Invalid Number")
     }
   
})