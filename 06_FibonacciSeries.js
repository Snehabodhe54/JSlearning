//addition of previous two number
let fibonacciSeries = function (num) {
  let a = 0;
  let b = 1;
  console.log(b);
  for (let i = 0; i < num; i++) {
    let result = a + b;
    console.log(`${result}`);
    a = b;
    b = result;
  }
};
fibonacciSeries(10);

console.log(`----------------------------using array------------------------`);

let fibonacciSeries1 = function (num) {
  let fibonacciArray = [1, 1];
  for (let i = 1; i < num; i++) {
    let element = fibonacciArray[i - 1] + fibonacciArray[i];
    fibonacciArray.push( element);
  }

  return fibonacciArray;
};
console.log(`FibonacciSeries: ${fibonacciSeries1(10)}`);
