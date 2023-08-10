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
