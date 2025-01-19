function printNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

const myNumbers: number[] = [1,2,3,4,5];

printNumbers(myNumbers); // Works fine

const myMixedArray: (number | string)[] = [1,2,"3",4,5];

//Solution 1: Type Assertion (Use with caution!)
printNumbers(myMixedArray as number[]); //This will execute, but may lead to runtime errors if the array contains non-numbers.

//Solution 2: Type Guard
function isNumber(item: any): item is number {
    return typeof item === 'number';
}

function printNumbersSafe(arr: (number | string)[]): void {
    for (let i = 0; i < arr.length; i++) {
        if (isNumber(arr[i])) {
            console.log(arr[i]);
        } else {
            console.log(`Non-number element encountered: ${arr[i]}`); //Handle non-number gracefully
        }
    }
}

printNumbersSafe(myMixedArray); //This will execute safely, handling string values appropriately.

//Solution 3: Filter the array
const filteredNumbers = myMixedArray.filter(isNumber);
printNumbers(filteredNumbers); //This will only print numbers
