document.getElementById('cashout').style.display = "none"
document.getElementById('sendmoney').style.display = "none"
document.getElementById('getbonus').style.display = "none"
document.getElementById('paybill').style.display = "none"

document.getElementById('cashout-box').addEventListener('click',function(event){ 
    event.preventDefault()
    
    hide ("addmoney",'none')
    hide ("sendmoney", "none")
    hide ('getbonus','none')
    hide ('paybill','none')
    hide ("cashout", "block")
})
document.getElementById('addmoney-box').addEventListener('click',function(event){ 
    event.preventDefault()
    
    hide ("addmoney",'block')
    hide ("cashout", "none")
    hide ("sendmoney", "none")
    hide ('getbonus','none')
    hide ('paybill','none')
})
document.getElementById('sendmoney-box').addEventListener('click',function(event){ 
    event.preventDefault()
    
    hide ("addmoney",'none')
    hide ("cashout", "none")
    hide ('getbonus','none')
    hide ('paybill','none')
    hide ("sendmoney", "block")
})
document.getElementById('getbonus-box').addEventListener('click',function(event){ 
    event.preventDefault()
    
    hide ("addmoney",'none')
    hide ("cashout", "none")
    hide ("sendmoney", "none")
    hide ('paybill','none')
    hide ('getbonus','block')
})
document.getElementById('paybill-box').addEventListener('click',function(event){ 
    event.preventDefault()
    
    hide ("addmoney",'none')
    hide ("cashout", "none")
    hide ("sendmoney", "none")
    hide ('getbonus','none')
    hide ('paybill','block')
})