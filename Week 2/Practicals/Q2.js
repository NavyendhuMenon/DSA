//Implement the Insertion Sort algorithm to sort a given list of numbers.
//Problem: Sort an array of integers in ascending order using Insertion Sort.


function insertionSort(arr){

    for (let i=1 ; i<arr.length; i++){

        let insertion= arr[i]
        let j= i-1

        while(j>=0 && arr[j]<insertion){

            arr[j+1]= arr[j]
            j--
        }

        arr[j+1]= insertion


    }

    return arr
}


let arr = [1,3,100,43,122,99,10000,1,7]

console.log(insertionSort(arr))

