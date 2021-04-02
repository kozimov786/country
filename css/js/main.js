let darkButton=document.querySelector(".btn");
let body=document.querySelector(".light")
darkButton.onclick=function(){
    body.classList.toggle("light");
    body.classList.toggle("dark");
}