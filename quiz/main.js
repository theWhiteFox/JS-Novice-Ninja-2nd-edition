const square = (x) => {
  return  x * x;
}

const numerically = (a,b) => {
  return a - b;
}

let result = [4,3,5,1].map(square);

result.forEach(element => {
  console.log(element);
})

console.log(square(5));

console.log(result);