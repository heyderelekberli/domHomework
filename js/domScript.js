"use strict";

let cardDeck = document.querySelectorAll(".card-deck");
let myCard = cardDeck[0].children[0];
let button = myCard.querySelector("button");
button.addEventListener("click", function () {
    button.parentElement.parentElement.classList.toggle("color-left")
    let newItem = document.createElement("LI");
    let textnode = document.createTextNode("This li element is created now");
    newItem.appendChild(textnode);
    document.getElementById("myList").appendChild(newItem);
    console.log(newItem)
});


let cardDeck2 = document.querySelectorAll(".card-deck");
let myCard2 = cardDeck2[0].children[1];
let button2 = myCard2.querySelector("button");
button2.addEventListener("click", function () {
    button2.parentElement.parentElement.classList.toggle("color-middle")
    let newItem2 = document.createElement("LI");
    let textnode2 = document.createTextNode("This li element is created now too");
    newItem2.appendChild(textnode2);
    document.getElementById("myList2").appendChild(newItem2);
    console.log(newItem2)
});


let cardDeck3 = document.querySelectorAll(".card-deck");
let myCard3 = cardDeck3[0].children[2];
let button3 = myCard3.querySelector("button");
button3.addEventListener("click", function () {
    button3.parentElement.parentElement.classList.toggle("color-right")
    let newItem3 = document.createElement("LI");
    let textnode3 = document.createTextNode("This li element is also created now");
    newItem3.appendChild(textnode3);
    document.getElementById("myList3").appendChild(newItem3);
    console.log(newItem3)

});

