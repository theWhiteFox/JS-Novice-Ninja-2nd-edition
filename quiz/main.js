const square = x => {
  return x * x;
};

const numerically = (a, b) => {
  return a - b;
};

let result = [4, 3, 5, 1].map(square);

result.forEach(element => {
  console.log(element);
});

console.log(square(5));

console.log(result);

const arr = [0, 1, "0", false, true, "hello"];

console.log(`Array: ${arr}`);
console.log(`Filter Boolean Truthy Array: ${arr.filter(Boolean)}`);
console.log(`Filter Boolean Falsy Array: ${arr.filter(x => !x)}`);

const quiz = [
  ["What is Superman's real name?", "Clark Kent"],
  ["What is Wonder Woman's real name?", "Diana Prince"],
  ["What is Batman's real name?", "Bruce Wayne"]
];

function start(quiz) {
  let score = 0;

  for (const [question, answer] of quiz) {
    const response = ask(question);
    check(response, answer);
  }
  gameOver();

  function ask(question) {
    return prompt(question);
  }

  function check(response, answer) {
    if (response === answer) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! The correct answer was ${answer}`);
    }
  }
  function gameOver() {
    alert(`Game Over, you scored ${score} point${score !== 1 ? "s" : " "}`);
  }
}
start(quiz);
