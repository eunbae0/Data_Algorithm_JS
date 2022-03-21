// 소인수분해
function primeFactors(n){
  while (n%2 == 0) {
    console.log(2);
    n = n/2;
  }
  for (var i=3; i*i <= n; i = i+2) {
    while(n%i == 0) {
      console.log(i);
      n = n/i;
    }
  }
  if (n>2){
    console.log(n);
  }
}
primeFactors(18);

//무작위 수 생성기
console.log(Math.random()*100);

//exercise 1
function modularExponentiation1( base, exponent, modulus ) {
  return Math.pow(base, exponent) % modulus;
}

function modularExponentiation2( base, exponent, modulus ) {
  if (modulus == 1) return 0;
  let value = 1;
  for (var i = 0; i < exponent; i++) {
    value = (value*base) % modulus;
  }
  return value;
} // O(n)

console.log(modularExponentiation2(4, 3, 5));

// exercise 2
function allPrimesLessThanN(n){
  for (var i = 0; i < n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n%2 == 0 || n%3 ==0) return false;
    for (var i = 5; i*i <= n; i+6) {
      if ( n%i == 0 || n%(i+2) == 0 ) return false;
    }
  }
} // O(sqrt)

//exercise 3
function maxDivide (number, divisor) {
  while (number % divisor == 0) number /= divisor;
  return number;
} 
function isUgly (number) {
  number = maxDivide(number, 2)
  number = maxDivide(number, 3)
  number = maxDivide(number, 5)
  return number === 1;
}
function arrayNUglyNumbers(n) {
  var counter = 0, currentNumber = 1, uglyNumbers = [];
  while (counter != n){
    if (isUgly(currentNumber)) {
      counter++;
      uglyNumbers.push(currentNumber);
    }
    currentNumber++;
  }
  return uglyNumbers;
}
console.log(arrayNUglyNumbers(10));