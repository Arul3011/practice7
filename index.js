const calsses = document.querySelectorAll(".noteContIMP");
const span = document.getElementsByClassName("circle");
const notnum=document.getElementById("noNotfication");
const btn = document.querySelector("button");
var num = 3;

calsses.forEach((element,index) => {
    element.addEventListener("click",()=>{
        element.style.backgroundColor="transparent";
        // console.log(element);
        num-=1;
        notnum.innerText=num;
        span[index].style.backgroundColor="transparent";
    })
});
btn.addEventListener("click",()=>{
    // console.log("clicked");
   for (let i = 0; i < calsses.length; i++) {
    calsses[i].style.backgroundColor="transparent";
    span[i].style.backgroundColor="transparent";
    notnum.innerText=0;
   } 
})