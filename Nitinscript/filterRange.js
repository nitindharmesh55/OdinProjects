function fillterRange(arr, a,b)
{
    return arr.filter(items => (a <= items && items <= b))
}

const arr = [5, 3 , 8 ,1];
let filtered = fillterRange(arr, 1, 4);
console.log(filtered)