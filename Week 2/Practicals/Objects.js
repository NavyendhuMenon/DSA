


let obj = [
    {"apple": 20, "orange": 50, "pineApple": 150},   
    {"banana": 30, "grapes": 40},                  
    {"mango": 25, "pear": 35, "kiwi": 45}         
]

let sum =0

for (let currentObj of obj){


    for (let key in currentObj){

        console.log(key)

        console.log( currentObj[key] )

        if (typeof currentObj[key] ==='number'){
 
            sum+= currentObj[key]
        }
    }

}

console.log(sum)



