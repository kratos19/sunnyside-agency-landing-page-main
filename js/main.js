"use strict";

const button = document.querySelector('.meniu');
const active = document.querySelector('.contact-section');

button.addEventListener('click', result)

function result() {
    active.classList.toggle('active');
}