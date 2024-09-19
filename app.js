var hamburger = document.querySelector(".hamburger");
var navlist= document.querySelector(".nav-list ul");
var menuItem= document.querySelectorAll(".nav-list ul li a");
var header = document.querySelector("header")
console.log(navlist);
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navlist.classList.toggle("active")
});


menuItem.forEach(item => {
    item.addEventListener("click",()=>{
        hamburger.classList.toggle("active");
        navlist.classList.toggle("active")
    })
});

document.addEventListener("scroll",()=>{
    var scroll_position = window.screenY;
    if(scroll_position > 250){
        header.style.backgroundColor = "red"

    }else{
        header.style.backgroundColor= "green"
    }
})