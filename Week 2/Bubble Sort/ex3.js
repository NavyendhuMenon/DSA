

function bubbleSort (arr){

    let swap 

    do{

        swap =false

        for(let i=0; i<arr.length-1; i++){

            if (arr[i].localeCompare(arr[i + 1]) > 0){

                [arr[i+1],arr[i]]=[arr[i],arr[i+1]]

                swap = true
            }
        }


    }while (swap===true){

    }

    return arr
}


let arr = ["banana", "apple", "orange", "kiwi"]

console.log(bubbleSort(arr))