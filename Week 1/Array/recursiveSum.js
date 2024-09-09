

function recursiveSum(arr, i=0){

  return i=== arr.length ? 0 : arr[i] + recursiveSum(arr,i+1)

}


let arr =[5,2,3,4,5]
console.log(recursiveSum(arr))