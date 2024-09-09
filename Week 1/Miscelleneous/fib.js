

function fibonacci (limit){

    if (limit == 0){
        return []
    }

    if (limit ==1){
        return[0]
    }


    let feb =[0,1]

    for (let i=2; i<limit ; i++){

        feb[i] = feb[i-1] + feb[i-2]
    }

    return feb
}


console.log(fibonacci (18))




function fb (n){

    if (n==0) return []
    if (n==1) return [0]

    let arr = [0,1]

    for(let i=2; i<n ; i++){
      
        arr[i]= arr[i-1] + arr[i-2]

    }

    return arr
}

console.log(fb (1))


// Big -O = O(n)