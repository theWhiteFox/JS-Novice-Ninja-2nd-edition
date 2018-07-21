console.log("Hello World!");

// const btn = document.getElementById("btn");

const rainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "rebeccapurple",
  "violet"
];

document.body.style.background = rainbow[Math.floor(7 * Math.random())];

// btn.addEventListener('click', change);

const wonderWoman = document.querySelector("ul#roster li:last-child");

document.getElementById("title").innerHTML = wonderWoman.textContent;

console.log(wonderWoman);

wonderWoman.setAttribute("class", "villain");

wonderWoman.setAttribute("id", "amazon");

console.log(wonderWoman);

function addClass(element, newClass) {
  if (element.className) {
    element.className = element.className + " " + newClass;
  } else {
    element.className = newClass;
  }
  return element.className;
}
addClass(wonderWoman, "warrior");

console.log(wonderWoman);

const arya = document.createElement("li");

// const aryaText = document.createTextNode('Arya');
let name = (arya.textContent = "Arya Stark");

console.log(name);

console.log(`Arya is a ${typeof arya} element`);

// Get the text content:
var text = document.getElementById("divA").textContent;
// |text| is set to "This is some text".

// Set the text content:
document.getElementById("divA").textContent = "This is some text";
// The HTML for divA is now:
//   <div id="divA">This is some text</div>
console.log(text);

function createElement(tag, text) {
  const el = document.createElement(tag);
  el.textContent = text;
  return el;
}

const jaime = createElement("li", "Jaime Lanister");

roster.appendChild(arya);

roster.insertBefore(jaime, wonderWoman);

roster.appendChild(wonderWoman);

roster.removeChild(bats);

const h1 = document.getElementById("title");
const oldText = h1.firstChild;
const newText = document.createTextNode("Games of Thrones");
h1.replaceChild(newText, oldText);

console.log(roster.innerHTML);

h1.innerHTML = "Characters from GoT";

roster.innerHTML =
  "<li>Bran Stark</li><li>Tywin Lanister</li><li>Brienne of Tart</li>";

const heroes = document.getElementById("roster");
const superman = heroes.children[0];
superman.style.border = "red 1px solid";

// superman.style["background color"] = "blue";

// superman.style.backgroundColor = "pink";

superman.style.display = 'none';

superman.style.display = 'block';

console.log(getComputedStyle(superman).getPropertyCSSValue('color').cssText);

superman.classList.add('highlighted');
