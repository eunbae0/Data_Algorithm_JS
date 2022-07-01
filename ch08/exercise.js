// 10 -> 2

function base10ToString(n) {
  let binaryString = "";

  function base10ToStringHelper(n) {
    if (n < 2) {
      binaryString += n;
      return;
    } else {
      base10ToStringHelper(Math.floor(n / 2));
      base10ToStringHelper(n % 2);
    }
  }
  base10ToStringHelper(n);

  return binaryString;
} // O(log_2(n))

console.log(base10ToString(232));

// all permute

function swap(strArr, index1, index2) {
  let temp = strArr[index1];
  strArr[index1] = strArr[index2];
  strArr[index2] = temp;
}

function permute(strArr, begin, end) {
  if (begin == end) {
    console.log(strArr);
  } else {
    for (var i = begin; i < end + 1; i++) {
      swap(strArr, begin, i);
      permute(strArr, begin + 1, end);
      swap(strArr, begin, i);
    }
  }
}

function permuteArray(strArr) {
  permute(strArr, 0, strArr.length -1);
} // O(n!)

permuteArray(["A", "C", "D"]); // ?????

// Palindrome?

function isPalindromeRecursive(word) {
  return isPalindromeHelper(word, 0, word.length -1);
}

function isPalindromeHelper(word, beginPos, endPos) {
  if (beginPos >= endPos) return true;
  if (word.charAt(beginPos) != word.charAt(endPos)) return false; 
    else {
      return isPalindromeHelper(word, beginPos + 1, endPos - 1);
    }
} 
// O(n)

console.log(isPalindromeRecursive('hi'));
console.log(isPalindromeRecursive('lll'));
console.log(isPalindromeRecursive('aibohphobia'));

