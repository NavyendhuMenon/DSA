//first occurance 



function firstoccurance (arr, target){


    let left =0
    let right = arr.length-1
    let result =-1


    while(left<=right){

        let middle = Math.floor((left+right)/2)

        if (arr[middle]===target){
            result = middle
            right = middle-1
        }else if(arr[middle]>target){
            right = middle-1
        }else{
            left = middle+1
        }
    }

    return result
}


let arr = [1, 2, 2, 2, 3, 4, 5];
let target = 2
console.log(firstoccurance(arr, target));




//Find the Last Occurrence of a Target

function lastOccurance(arr, target){
    let left =0
    let right = arr.length-1
    let result =-1


    while(left<=right){
       let mid = Math.floor((left+right)/2)

       if(arr[mid]===target){
          
        result = mid
        left = mid+1

       }else if(arr[mid]< target){

          right = mid-1

       }else{
           
         left = mid+1
       }
    }

    return result
}

let arr2 = [1, 2, 2, 2, 3, 4, 5];
let target2 = 2
console.log(lastOccurance(arr, target));
