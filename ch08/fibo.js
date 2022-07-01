// 피보나치 수열

function getNthFibo(n) {
  if (n <= 1) {
    return n;
  } else {
    return getNthFibo(n - 1) + getNthFibo(n - 2);
  }
} // O(2^n)

function getNthFiboBetter(n, lastlast, last) {
  if (n == 0) {
    return lastlast;
  } 
  if (n == 1) {
    return last;
  }
  return getNthFiboBetter(n-1, last, lastlast + last);
} // O(n)

console.log(getNthFibo(8)); 
console.log(getNthFiboBetter(8, 0, 1)); 

