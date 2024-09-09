// Write a function to implement binary search on a sorted array. 
// Given a sorted array arr and a target value x, return the index of x in arr. 
// If x is not present, return -1.


function findTarget (arr,target){

    let left = 0
    let right = arr.length-1


    while (left <= right){

      let mid = Math.floor((left+right)/2)

      if (arr[mid]===target){

        return mid

      } else{

        arr [mid]< target ?left= mid+1 : right= mid-1
      }

    }

 return -1
}

const arr = [3, 8, 15, 23, 42, 56, 78, 99];

console.log(findTarget (arr,78))
