const question = "What is Ashy Slashy's real name?";
const answer = prompt(question);
alert(`You answered ${answer}`);

const hash = new Map();
const keyObject = {};

let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };

  console.log(user);

hash.set(1, 'I');
hash.set(keyObject);
hash.set(user);

console.log(hash);

let bottles = 10;
do {
    console.log(`Bottles: ${bottles} on wall`);
    bottles--;
} while(bottles > 0);