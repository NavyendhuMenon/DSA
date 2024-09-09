
function sum (a,b){

    let sum=0

    for(let i=0; i<a.length ;i++){

       

            sum += a[i]+b[i]

      
    }

    return sum
}

console.log(sum([1, 2], [3, 4]))