let array = [10 , 20 , 30 , 40 , 50];

function sumofTripleEvens(array)
{
    let sum = 0;
    for (let i = 0; i < array.length; i++)
    {
        if(array[i] %2 === 0)
        {
            const tripleEvens = array[i] * 3;

            sum += tripleEvens;
        }
    }
    return sum;
}
console.log(sumofTripleEvens(array));

const maparr = array.map((num) => num + 1);
console.log(maparr);
const arr = [1,2,3,4];

const oddNumbers  = arr.filter((num) =>  num %2 !== 0);
console.log(oddNumbers);


const  alltimes = arr.reduce((total, currentValue)=>{
    return total * currentValue;
}, 1);


console.log(alltimes);