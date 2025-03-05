function inputToNumber (id){
 let x= document.getElementById(id).value;
 let xyz= parseInt(x);
 return xyz;
}


function hide (id,display){
document.getElementById (id).style.display = display;
}