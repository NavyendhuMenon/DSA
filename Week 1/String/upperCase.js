

function upperCasel(str){

    if(str.length==0) return "Empty string"

    let result =""
    let lastIndex = str.length-1

    for (let i=0; i<str.length ; i++){
        if (i=== lastIndex){
            result+= str[i].toUpperCase()
        }else{
            result += str[i]
        }
    }
    return result
}

let str ="Navyendhu"
console.log(upperCasel(str))