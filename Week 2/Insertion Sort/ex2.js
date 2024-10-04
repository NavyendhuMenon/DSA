
// function insertionSort(arr){

//     for (let i=1; i<arr.length; i++){

//         let insertion = arr[i] 
//         let j = i-1 
        
//         while(j>=0 && arr[j]<insertion){

//             arr[j+1]= arr[j]
//             j--
//         }

//         arr [j+1]= insertion

//     }

//     return arr
// }


// let arr = [-2,-6,-9,1,100,20,4]

// console.log(insertionSort(arr))

function insertionSort(arr){
    
    
    for(let i=1; i<arr.length; i++){
        let insertion = arr[i]
        let j = i-1
        
        while(j>=0 && arr[j]>insertion){
            arr[j+1]= arr[j]
            j--
        }
        arr[j+1]= insertion
    }
    
    return arr
  
}

let arr = [1,3,1000,3,111,2,33,0,8]

console.log( insertionSort(arr))