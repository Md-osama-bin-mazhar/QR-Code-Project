let qrcode=document.querySelector('.qrcode');
let user_input =document.querySelector('.input');
let button= document.querySelector('.btn');

button.addEventListener("click", ()=>{
     let url=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${user_input.value}`;
     qrcode.src=url;
});