

function bubbleSort (arr){
    let swap 
    do{
        swap = false

        for(let i=0; i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                [arr[i], arr[i+1]]= [arr [i+1], arr[i]]
                swap = true 
            }
        }

    }while (swap===true)

    return arr
}


const array = [29, 10, 14, 37, 13];
console.log(bubbleSort(array))