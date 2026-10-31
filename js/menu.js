'use strict';

const body = document.querySelector("body");

const btnLeftPizza = document.querySelector(".left-pizza");
const btnRightPizza = document.querySelector(".right-pizza");
const containerMenuPizzas = document.querySelector(".container-menu-pizza");

const btnLeftEsfiha = document.querySelector(".left-esfiha");
const btnRightEsfiha = document.querySelector(".right-esfiha");
const containerMenuEsfiha = document.querySelector(".container-menu-esfiha");

const btnAdd = document.querySelectorAll(".btn-add");
const amountOrders = document.querySelector(".amount-orders");

function addOrder (title, img, price) {
    localStorage.setItem(`Pedido - ${title}`, `{"img": ${img}, "nome": ${title}, "preço": ${price}}`);
    amountOrders.textContent = localStorage.length;
}

function orders() {
    amountOrders.textContent = localStorage.length;
}


function notification (title) {
    const div = document.createElement("div");
    div.classList.add("notification");
    const text = document.createElement("p");

    localStorage.getItem(`Pedido - ${title}`) === null ? text.textContent = "Pedido adicionado com sucesso": text.textContent = "Pedido já foi adicionado";

    div.append(text);
    body.append(div);

    setTimeout(() => {
        body.removeChild(div);
    }, 3000) 
    
}


btnAdd.forEach(btn => {
    btn.addEventListener("click", () => {
        const title = btn.closest("article").getElementsByClassName("title").item(0).textContent;
        const img = btn.closest("article").getElementsByClassName("img").item(0).getAttribute("src");
        const price = btn.closest("article").getElementsByClassName("price").item(0).textContent;
        notification(title);
        addOrder(title, img, price);
    });
})

btnLeftPizza.addEventListener("click", () => {
    containerMenuPizzas.scrollBy(-210, 0);
});

btnRightPizza.addEventListener("click", () => {
    containerMenuPizzas.scrollBy(210, 0);
});

btnLeftEsfiha.addEventListener("click", () => {
    containerMenuEsfiha.scrollBy(-210, 0);
});

btnRightEsfiha.addEventListener("click", () => {
    containerMenuEsfiha.scrollBy(210, 0);
});

orders();