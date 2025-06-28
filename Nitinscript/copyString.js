
let arr = ["HTML", "Javascript", "CSS"];
function copySorted(arr){
    return [...arr].sort();
}
let sorted = copySorted(arr);
console.log(sorted);