

function search (n,t){

    for( let i=0; i<n.length; i++){
        if (n[i]==t){
            return i +1
        }
    }
    return "Value not found"
}


const arr = [1, 2, 3, 4, 5];
console.log(search(arr, 3)); 
console.log(search(arr, 6)); 