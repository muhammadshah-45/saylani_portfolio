var hamburger = document.querySelector(".hamburger");
var navlist= document.querySelector(".nav-list ul");
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navlist.classList.toggle("active")
});


