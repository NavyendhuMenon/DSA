

function bubbleSort (ar){


    let swap


    do{
        console.log("hellooo")
        swap = false

        for (let i =0; i<ar.length-1; i++){

            if(ar[i]<ar[i+1]){
            
                [arr[i+1], arr[i]] = [arr[i], arr[i+1]]

                swap = true

                console.log(swap)

            }
        }

        console.log("before while")
    }while(swap===true){

        console.log("swap is now");
        
    }


   return arr
}

let arr = [1,-1,-6,9,10,222,1113,2,6]
console.log(bubbleSort(arr))