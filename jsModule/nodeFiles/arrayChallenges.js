// 'Always Hungry' exercise
function alwaysHungry(arr) {
    let present = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            present = true;
            console.log("yummy");
        }
    }
    if (!present) {
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4,1,5,7,2]);
console.log("");

// High Pass Filter exercise
function highPass(arr, cutoff) {
    let filteredArr = [];
    for(let i=0; i< arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
let result = highPass([6,8,3,10,-2,5,9],5);
console.log(result);
console.log("");

// Better Than Average exercise
function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i <arr.length; i++){
        sum += arr[i];
    }
    let avg = sum/(arr.length);
    console.log(avg);
    console.log(sum);
    var count = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i]>avg){
            count ++;
        }
    }
    return count;
}
console.log(betterThanAverage([6, 8, 3, 10, -2, 5, 9])); // we expect back 4
console.log("");


// Array Reverse exercise
function reverse(arr) {
    let tempArr = [];
    for (let i = arr.length-1; i >= 0; i--){
        tempArr.push(arr[i]);
    }
    arr = tempArr;
    return arr;
}
console.log(reverse(["a", "b", "c", "d", "e"])); // we expect back ["e", "d", "c", "b", "a"]
console.log("");

// Fibonacci Array exercise
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
        for (let i = 2; i < n ; i++) {
            fibArr.push(fibArr[i-1]+fibArr[i-2]);
        }
    return fibArr;
}
console.log(fibonacciArray(10)); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log("");