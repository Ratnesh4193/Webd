let randomNumber1=Math.floor((Math.random() * 10))%6 + 1;
let s1="./images/dice"+randomNumber1+".png"
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png")
let randomNumber2=Math.floor((Math.random() * 10))%6 + 1;
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png")
let s=""
console.log(randomNumber1,s1)
if(randomNumber1>randomNumber2){
    s="PLAYER 1 WINS!"
}
else if(randomNumber2>randomNumber1){
    s="PLAYER 2 WINS!"
}
else s="DRAW!!!!"

document.querySelector("h1").innerText=s
