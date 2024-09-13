

function selectionSort(arr){


    let min =0

    for(let i=0; i<arr.length; i++){
        min=i

        for(let j=0; j<arr.length; j++){

            if(arr[j] < arr[min]){

                min = j
            }
        }

        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }

    return arr
}


const array = [64, 25, 12, 22, 11];
console.log(selectionSort(array)); 