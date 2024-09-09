

function findVowel (str){
   let result =""
   let vowels = "aeiouAEIOU"

   for(let i=0; i<str.length ; i++){

    if(!vowels.includes(str[i])){

        result += str[i]
    }
   }

   return result
}

let str = "Hellooo"
console.log("Result", findVowel(str))