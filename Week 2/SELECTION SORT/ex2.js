

function selectionSortStrings(arr) {

    let minIndex;

    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j].localeCompare(arr[minIndex]) < 0) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}


const strings = ["banana", "apple", "cherry", "date"];
console.log(selectionSortStrings(strings));
