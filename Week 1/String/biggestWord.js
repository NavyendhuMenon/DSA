

function bigWord(str) {
    let words = str.split(' '); // Split the string into words
    let biggestWord = '';

    for (let word of words) {
        if (word.length > biggestWord.length) {
            biggestWord = word;
        }
    }

    return biggestWord;
}


let str = "The quick brown fox jumps over the lazy dog"

console.log(bigWord(str))