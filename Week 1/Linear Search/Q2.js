//element exist

function elementExists(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
    }
 }
    return false; 

}

let arr = [7, 8, 5, 2, 4];
console.log(elementExists(arr, 5)); 