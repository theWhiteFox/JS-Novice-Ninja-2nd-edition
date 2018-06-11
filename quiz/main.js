const question = "What is Ashy Slashy's real name?";

const hash = new Map();

const map1 = new Map([["fish", "Mackerel"],["country", "Jamaica"]]);


let mapIter = map1.values();

console.log(mapIter.next().value)

console.log(map1.size);
console.log(map1.values());

for (const dinner of map1.keys()) { 
  console.log(dinner);
}

let list = document.getElementById('demo');

map1.forEach((value, key, array) => {
  let items = `<li>${key}: ${value}</li>`;
  list.innerHTML = list.innerHTML + items;
});


const n = 5;
n % 2 === 0 ? console.log("even") : console.log("odd");

const keyObject = {};

let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };

  console.log(user);
  console.log(`this is map1 ${map1}`);

hash.set(1, 'I');
hash.set(keyObject);
hash.set(user);