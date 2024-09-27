

//sum of an array


function sum (arr, i=0){

    if(arr.length <=i){
        return 0
    }


    return arr[i] + sum(arr, i+1)

}


let arr = [1,3,22,111,100]

console.log(sum(arr))