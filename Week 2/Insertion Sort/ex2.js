
function insertionSort(arr){

    for (let i=1; i<arr.length; i++){

        let insertion = arr[i] //initially first index
        let j = i-1 //initially 0 index

        while(j>=0 && arr[j]<insertion){

            arr[j+1]= arr[j]
            j--
        }

        arr [j+1]= insertion

    }

    return arr
}


let arr = [-2,-6,-9,1,100,20,4]

console.log(insertionSort(arr))