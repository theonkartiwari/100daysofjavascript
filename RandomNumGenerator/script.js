const number = document.querySelector(".number");
const btn = document.querySelector(".generate");


btn.addEventListener("click",()=>{
    const randomNumber = Math.floor(Math.random()*10+1);
    number.innerHTML=randomNumber;
 });

