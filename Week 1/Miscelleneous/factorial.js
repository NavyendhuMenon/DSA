

//factorial of a number


function factorial (n){

    let fact=1

   for (let i=n ; i>=1 ; i--){

     fact *= i
   }
   
   return fact
}

console.log(factorial(0))