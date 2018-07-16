console.log("Hello World!");

// const btn = document.getElementById("btn");

const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];

document.body.style.background = rainbow[Math.floor(7 * Math.random())];

// btn.addEventListener('click', change);

const wonderWoman = document.querySelector("ul#roster li:last-child");

document.getElementById("title").innerHTML = wonderWoman.textContent;

console.log(wonderWoman);

wonderWoman.setAttribute('class', 'villain');

wonderWoman.setAttribute('id', 'amazon');

console.log(wonderWoman);