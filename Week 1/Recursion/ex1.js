
//console num

function show(num) {
    if (num >= 5) {
        return "limit reached"; 
    }

    console.log("Hi", num);
    num++;
    return show(num); 
}

console.log(show(4));

//find count 

function count(n){

    if (n===0){
        return 0
    }else{
        console.log(n)
        return count(n-1)
    }
}

console.log(count(5))


//find factorial

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    }
    return n * factorial(n - 1); 
}

console.log(factorial(5))


//fibonachi
function fibonacci(n) {
    if (n === 0) {
        return 0; 
    }
    if (n === 1) {
        return 1; 
    }
    return fibonacci(n - 1) + fibonacci(n - 2); 
}

console.log(fibonacci(6)); 



//sum of a array



function arSum (arr, i=0){

    return i===arr.length ? 0 : arr[i] + arSum(arr, i+1)
}

let arr = [5,5,5]
console.log("recursiveSum:", arSum(arr))


//factorial


function fact (n){

    return n===0 || n===1 ? 1 : n* fact(n-1)
}

console.log(fact(5))
