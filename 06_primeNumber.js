console.log(`--------------------Prime number using loop--------------------`);

function if_prime(num) {
  for (let N = 2; N <= num; N++) {
    let prime = 1;
    for (let index = 2; index < N; index++) {
      if (N % index == 0) {
        prime = 0;
        break;
      }
    }
    if (prime) {
      console.log(N);
    }
  }
}
if_prime(10);

console.log(
  `----------------------To check single number if it is prime or not--------------------`
);

function is_prime(num) {
  let prime = 1;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      console.log(`not`);
      return 0;
    }
  }
  if (prime) {
    console.log(`it is`);
  }
}
is_prime(11);
