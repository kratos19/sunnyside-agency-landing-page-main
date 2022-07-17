"use strict";

const button = document.querySelector('.nav-bar');
const active = document.querySelector('.contact-section');

button.addEventListener('click', result)

function result() {
    active.classList.toggle('active');
}