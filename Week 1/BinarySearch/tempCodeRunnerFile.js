function firstOccurance (arr,target){

    let left =0
    let right = arr.length-1

    while(left<=right){
    
        let mid = Math.floor((left+right)/2)

        if(arr[mid]===target){
            return mid
        }else{
           arr [mid]< target ? left = mid +1 : right = mid - 1
        }
    }

    return -1
}


let arr =[1, 2, 2, 2, 3, 4]

console.log(firstOccurance (arr,2))