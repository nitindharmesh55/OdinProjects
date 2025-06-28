// Create a function uniqueA(arr) that should retrun an array with unique items of arr;
function unique(arr)
{
    let result = [];
    for(let str of arr)
    {
        if(!result.includes(str))
        {
         result.push(str);
        }
    }
    return result;
}

let strings = ["Hare", "Krishna", "hare", "Krishna", "Krishna", "0"];
console.log(unique(strings)); 