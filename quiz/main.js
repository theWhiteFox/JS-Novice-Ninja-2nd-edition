const question = "What is Ashy Slashy's real name?";
// const answer = prompt(question);

// alert(`You answered ${answer}`);

const hash = new Map();

const map1 = new Map([["fish", "Mackerel"],["country", "Jamaica"]]);

let mapIter = map1.values();

console.log(mapIter.next().value)

console.log(map1.size);
console.log(map1.values());

document.getElementById('demo').innerHTML = map1[0];

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

// console.log(hash);

// let bottles = 10;
// do {
//     console.log(`Bottles: ${bottles} on wall`);
//     bottles--;
// } while(bottles > 0);