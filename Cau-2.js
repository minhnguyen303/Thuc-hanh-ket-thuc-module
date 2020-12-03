function tryRemoveFromArray(arr, x){
    for (let i in arr){
        if (arr[i] == x)
            arr.splice(i, 1);
    }
    return arr;
}