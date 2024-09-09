//power of 2


function powerOf2 (n){

    for (let i=0; i<n ;i++){
        for(let j=2 ; j<=i ; j++ ){

         return j*i%n==0 ? true : false
        }
    }
}

console.log(powerOf2(4))