// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.


function filterRangeInPlace(arr, a ,b)
{
    return arr.filter(items => (items >= a && items <= b));
}

const arr = [5,8,3,1];
console.log(filterRangeInPlace(arr, 1, 4));