/*
Suppose you are given an array: [1, 8, 7, 3, 2, 9, 10, 12].
You need to find out whether a number is prime or not
(Hint: a prime number is a number that is divisible by 1 and itself).
What approach would you take to do that? Support it with the relevant code.
*/

let myArray = [1, 8, 7, 3, 2, 9, 10, 12];

myArray.forEach(function checkResult(arrElement) {
    const isPrime = checkPrime(arrElement);
    if (isPrime == true) {
      console.log(arrElement, "is a prime number");
    } else {
      console.log(arrElement, "is NOT a prime number");
    }
  });

  
function checkPrime(arrElement) {
  if (arrElement <= 1) {
    return false;
  } else {
    for (let i = 2; i < arrElement; i++) {
      if (arrElement % i == 0) {
        return false;
      }
    }
    return true;
  }
}