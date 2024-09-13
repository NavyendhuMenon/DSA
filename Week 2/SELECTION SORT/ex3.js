function selectionSortDescending(arr) {
    let maxIndex;

    for (let i = 0; i < arr.length - 1; i++) {
        maxIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }

        if (maxIndex !== i) {
            [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
        }
    }

    return arr;
}

const numbers = [5, 3, 8, 1, 2];
console.log(selectionSortDescending(numbers));

