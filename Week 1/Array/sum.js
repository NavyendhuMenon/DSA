

function Sum ( arr){

    let sum=0

    for (let i=0; i<arr.length; i++){

        sum += arr[i]

    }

    return sum
}

let ar = [10,5,6,9]
console.log(Sum(ar))