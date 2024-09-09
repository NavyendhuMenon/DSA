

function Reverce (arr){


    let arr2 =[]

    for (let i=arr.length-1; i>=0 ; i--){
        
        arr2.push(arr[i])
    }

    return arr2

}

let arr = [1,2,3,4,5,6]


console.log(Reverce(arr))



function revercenotbyarr (arr){

    let n = arr.length

    for (let i=0; i< Math.floor(n/2);i++){

        let j = n-1-i

        let temp = arr[i]
            arr[i]= arr[j]
            arr[j]= temp

    }

    return arr
}

let arr2 = [1,2,3,4,5,6]
console.log(revercenotbyarr(arr2))