document.getElementById('login-btn').addEventListener('click',function(event){
      event.preventDefault()
  
    const accountNumber=document.getElementById('mobile-number').value;
    
    
  /* const accountNumber = inputToNumber ('mobile-number'); */
  const pin= inputToNumber('pin')
     if (accountNumber === 11){
          if (pin ===1234){
              window.location.href="./main.html"
          }
     }
     else {
        alert("Invalid Number")
     }
  
})