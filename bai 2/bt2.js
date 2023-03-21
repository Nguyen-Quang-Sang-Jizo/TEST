function test(arr){
    let max = arr[0];
    let secondMax = arr[1];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]> max){
            secondMax = max;
            max = arr[i]
        }else if (arr[i]> secondMax && arr[i] !== max){
            secondMax = arr[i];
        }
    }
    return secondMax;
}