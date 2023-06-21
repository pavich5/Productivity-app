function sumMaxMin(arr) {
    let min = arr[0];
    let max = arr[0];
    for(i = 1; i < arr.length;i++){
        if(arr[i] > max){
             max = arr[i];
        }
        else if (arr[i] < min){
             min = arr[i];
        }
    }

    return {
        max: max,
        min: min,
        sum: max + min
      };
}

const arr = [3, 5, 6, 8, 11];
const result = sumMaxMin(arr);

console.log(result.max);
console.log(result.min);
console.log(result.sum);

