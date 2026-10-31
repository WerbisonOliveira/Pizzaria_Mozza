'use strict';

const imgs = document.querySelectorAll(".carousel-img");
const indicators = document.querySelectorAll(".btn-color");
const btn_indicators = document.querySelectorAll(".btn-indicator");


function replaceSlide (action = false, index = 0) {
    let current = index + 1;
    let indice = index;


    setInterval(() => {

        if (imgs[current].classList.contains("active")) {        
            imgs[current].classList.remove("active");
            indicators[indice].classList.remove("selected");
        }

        current += 1;
        indice++;

        if (current === imgs.length - 1) {
            current = 1;
            indice = 0;
        }

        imgs[current].classList.add("active");  
        indicators[indice].classList.add("selected");   

    }, 7000)

}
replaceSlide();

// indicators.forEach((indicator, index) => {
//     indicator.addEventListener("click", () => {
//         replaceSlide(true, index);
//         console.log(index)
//         indicators.forEach((indicator) => indicator.classList.remove("selected"));
//         imgs.forEach((img) => img.classList.remove("active"));
//         imgs[index + 1].classList.add("active");
//         indicator.classList.add("selected");
        
//     })
// })

