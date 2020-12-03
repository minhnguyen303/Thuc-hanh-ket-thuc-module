function findMax(arr){
    let max = 0;
    for (let num of arr){
        if (max < num)
            max = num;
    }
    return max;
}