function linearSearch(arr, n) {
  for(var i = 0; i < arr.length; i++){
    if (arr[i] == n) return true;
  }
  return false;
}

function binarySearch(arr, n) {
  var lowIdx = 0, highIdx = arr.length - 1;
  
  while (lowIdx <= highIdx) {
    var midIdx = Math.floor((highIdx + lowIdx) / 2);
    if (arr[midIdx] == n) return arr[midIdx];
    else if (n>arr[midIdx]) lowIdx = midIdx;
    else highIdx = midIdx;
  }
  return -1;
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 32));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 3));