function mergeArrays(arr1, arr2) {
    let mergedArr = [];
    let i = 0; //alterar valores iniciais para 0
    let j = 0; //alterar valores iniciais para 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++; //inserir variavel correta
    }
    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++; //inserir variavel correta
    }
    return mergedArr;
}
console.log(mergeArrays([1, 3, 5], [2, 4, 6]));