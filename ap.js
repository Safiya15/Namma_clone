// let over = document.querySelector(".overlay");

// let btn = document.querySelector(".btn");

// btn.addEventListener("mouseenter", function() {
//     over.style.opacity = "0";
// });

// btn.addEventListener("mouseleave", function() {
//     over.style.opacity = "1";
// });

let menu = document.querySelector(".menu");


let lineup = document.querySelector(".lineup");
let linemid = document.querySelector(".linemid");
let linedown = document.querySelector(".linedown");

let flag = true;

let menu_op = document.querySelector(".menu-op");

menu.addEventListener("click", function() {
    if(flag==true){
        flag = false;
        lineup.style.transform = "rotate(45deg)";
        linemid.style.display = "none";
        linedown.style.transform = "rotate(-45deg)";
        menu.style.justifyContent = "center";
        menu_op.style.right = "0%";
    }else{
        lineup.style.transform = "rotate(0deg)";
        linemid.style.display = "block";
        linedown.style.transform = "rotate(0deg)";
        menu.style.justifyContent = "space-evenly";
        menu_op.style.right = "-50%";
        flag = true;
    }
});

