// Primer línea de código en JS
console.log("Hola mundo");

// DOM
let container = document.querySelector(".container");
let icons = document.querySelectorAll(".material-symbols-outlined");


// Agregar animación de salida
let arrows = document.querySelectorAll(".arrow");

arrows.forEach(function(arrow){
    arrow.addEventListener("click", function(){
        let content = document.querySelector(".content");

        content.classList.remove("animate__backInDown");
        content.classList.remove("animate__animated");

        content.classList.add("animate__animated");
        content.classList.add("animate__backOutUp");
    });
});


let closer = document.querySelector(".close");

closer.addEventListener("click", function(event){
    event.preventDefault();

    let content = document.querySelector(".content");

    content.classList.remove("animate__backInDown");
    content.classList.remove("animate__animated");
    content.classList.add("animate__animated");
    content.classList.add("animate__backOutUp");

    setTimeout(function(){
        location.href = "/";
    }, 800);

});