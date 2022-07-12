// bubble sort

function swap(strArr, index1, index2) {
  let temp = strArr[index1];
  strArr[index1] = strArr[index2];
  strArr[index2] = temp;
}

function bubbleSort(array) {
  for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
    for (var j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j);
      }
    }
    console.log(array);
  }
  return array;
}

function bubbleSort2(array) {
  for (var i = 0, arrayLength = array.length; i < arrayLength - 1; i++) {
    for (var j = 0; j < arrayLength - 1 - i; j++) {
      if (array[j] > array[j+1]) {
        swap(array, j, j+1);
      }
    }
    console.log(array);
  }
  return array;
}

// console.log(bubbleSort([55 ,7 ,78 ,12 ,42]));
console.log(bubbleSort2([55 ,7 ,78 ,12 ,42]));
// console.log(bubbleSort([7 ,55 ,78 ,12 ,42]));
// console.log(bubbleSort([7 ,55 ,78 ,12 ,42]));
// console.log(bubbleSort([7 ,12 ,55 ,78 ,42]));
// console.log(bubbleSort([7 ,12 ,42 ,55 ,78]));


// i = 0, j = 0
// i = 1, j = 0, 1
// i = 2, j = 0, 1, 2
// i = 3, j = 0, 1, 2, 3
// i = 4, j = 0, 1, 2, 3, 4

// selection sort

function selectionSort(items) {
  var len = items.length, min;

  for (var i = 0; i < len; i++) {
    min = i;
    for (j = i+1; j < len; j++) {
      if (items[j] < items[min]) {
        min = j; // 최솟값의 위치를 min값에 할당
      }
    }
    if (i != min) { // 현재 위치가 최솟값의 위치가 아니면 교환
      swap(items, i, min);
    }
  }
  return items;
}

console.log(selectionSort([6, 1, 23, 4, 2, 3]));

// insertion sort

function insertionSort(items) {
  var len = items.length, value, i, j;
  
  for (i=0; i < len; i++) {
    value = items[i]; // 현재 값 덮어써질수 있으므로 저장함

    for (j = i-1; j > -1 && items[j] > value; j--) { // value가 검사값보다 작다면 검사값 위치 +1
      items[j+1] = items[j];
    } // j는 검사값이 크지 않을 때 까지 감소한다.
    items[j+1] = value; // 감소한 j값 +1이 value의 위치(가장 작은값)
    console.log(items);
  }
  return items;
}

console.log(insertionSort([6, 1, 23, 4, 2, 3]));

// quick sort

function quickSort(items) {
  return quickSortHelper(items, 0, items.length - 1);
}
function quickSortHelper(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right);

    if (left < index - 1) { // 기준점 왼쪽 빠른정렬
      quickSortHelper(items, left, index - 1);
    }
    if (index < right) { // 기준점 오른쪽 빠른정렬
      quickSortHelper(items, index, right);
    }
  }
  return items;
}
function partition(array, left, right) { // 기준점 중앙으로
  var pivot = array[Math.floor((right + left) / 2)];
  while (left <= right) {
    while (pivot > array[left]) {
      left++;
    }
    while (pivot < array[right]) {
      right--;
    }
    if (left <= right) {
      var temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}

console.log(quickSort([6, 1, 23, 4, 2, 3]));

// quick selection

var arr = [1, 3, 3, -2, 3, 14, 7, 8, 1, 2, 2];
function quickSelectInPlace(A, l, h, k) {
  var p = partition(A, l, h);
  if (p == (k-1)) {
    return A[p]; // 일치하면 값 return
  } else if (p > (k-1)) {
    return quickSelectInPlace(A, l, p-1, k); // pivot 왼쪽배열 재귀
  } else {
    return quickSelectInPlace(A, p+1, h, k); // pivot 오른쪽배열 재귀
  }
}
function medianQuickselect(arr) {
  return quickSelectInPlace(arr, 0, arr.length-1, Math.floor(arr.length/2));
}

console.log(quickSelectInPlace(arr, 0, arr.length-1, 5));
console.log(quickSelectInPlace(arr, 0, arr.length-1, 10));
console.log(medianQuickselect(arr));

// merge sort

function merge(leftA, rightA) {
  var results = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < leftA.length && rightIndex < rightA.length) {
    if (leftA[leftIndex] < rightA[rightIndex]) {
      results.push(leftA[leftIndex++]);
    } else {
      results.push(rightA[rightIndex++]);
    }
  }
  var leftRemains = leftA.slice(leftIndex),
  rightRemains = rightA.slice(rightIndex);

  return results.concat(leftRemains.concat(rightRemains));
}

function mergeSort(array) {
  if (array.length<2){
    return array;
  }
  var midpoint = Math.floor((array.length)/2),
  leftArray = array.slice(0, midpoint),
  rightArray = array.slice(midpoint);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

console.log(mergeSort([6, 1, 23, 4, 2, 3]));

// count sort

function countSort(arr) {
  var hash = {}, countArr = [];
  for (var i=0; i<arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
  }
  // hash = { '1': 3, '2': 5, '3': 4, '4': 1, '6': 1, '23': 1, '123': 2 }
  for (var key in hash) { // 항목이 몇개가 되든 해당 항목을 배열에 추가한다
    for (var i=0; i<hash[key]; i++) {
      countArr.push(parseInt(key)); // key 를 hash[key] 값만큼 arr에 push한다.
    }
  }
  return countArr;
}
console.log(countSort([6, 1, 23, 2, 3, 2, 1, 2, 2, 3, 3, 1, 123, 123, 4, 2, 3]));