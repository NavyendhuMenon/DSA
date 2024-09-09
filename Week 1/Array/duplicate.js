

function Dup (arr){

    
    for (let i=0; i<arr.length; i++){

        for (let j=i+1 ; j<arr.length; j++){

            if(arr[i]===arr[j]){

                arr.splice(j,1)
                j--

            }

        }

    }

   return arr
}


let arr= [1,2,1,1,3,3,2,2,5,4,9]

console.log(Dup(arr))