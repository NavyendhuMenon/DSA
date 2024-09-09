
//check if an element exists

// function binarySearchExists(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let middle = Math.floor((left + right) / 2);
//         if (arr[middle] === target) {
//             return true;
//         } else if (arr[middle] < target) {
//             left = middle + 1;
//         } else {
//             right = middle - 1;
//         }
//     }
//     return false;
// }



function largestNum (arr, t){

    let left =0
    let right = arr.length-1

    while (left <= right){

        let mid = Math.floor((left+right)/2)

        if (arr[mid]=== t){
            return true
        }else if (arr[mid]<t){

            left = mid +1
            
        }else{
            right = mid -1
        }
    }

    return false
}

let arr = [2, 4, 6, 8, 10];
console.log(largestNum(arr, 4)); 
