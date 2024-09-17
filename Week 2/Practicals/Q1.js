//buble sort

//Write a function to sort an array using the Bubble Sort algorithm.



function bubbleSort (arr){

    let swap 

    do{

        swap = false

        for(let i=0; i<arr.length; i++){

            if(arr[i]>arr[i+1]){

               [ arr[i+1], arr[i]] = [arr[i], arr[i+1]]
               swap = true
            }

        }

    }while(swap===true)

   return arr     

}


let arr = [1,3,100,43,122,99,10000,1,7]

console.log(bubbleSort(arr))

