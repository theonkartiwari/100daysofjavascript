const number = document.querySelector(".number");
const btn = document.querySelector(".generate");
console.log("I am born genius");


btn.addEventListener("click",()=>{
    const randomNumber = Math.floor(Math.random()*10+1);
    console.log(randomNumber);
    number.innerHTML=randomNumber;
    console.log("Created by Shweta ");

 });

