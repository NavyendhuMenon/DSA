

function insertionSort (arr){


    for (let i=1; i<arr.length; i++){

        let insertion = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>insertion){
            arr[j+1]= arr[j]
            console.log("arr j+1",arr[j+1])
            console.log("first j",j)
            j--
            console.log("second j",j)
        }
        console.log(" loop exit arr j+1",arr[j+1])
        console.log(insertion)

        //here it becomes decremented j+1 
        arr[j+1] = insertion
        console.log("after assigning",arr[j+1])
    }
    return arr
}


let arr = [-2,-6,-9,1,100,20,4]

console.log(insertionSort(arr))