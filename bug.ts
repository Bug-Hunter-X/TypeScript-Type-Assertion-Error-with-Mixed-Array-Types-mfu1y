function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myArray: number[] = [1, 2, 3, 4, 5];

printArray(myArray); // This will work fine

const myArray2: (number | string)[] = [1, 2, "3", 4, 5];

printArray(myArray2); // This will also work fine

const myArray3: (number | string | boolean)[] = [1, 2, "3", true, 5];

printArray(myArray3); // This will also work fine, demonstrating type flexibility

const myArray4: (number | string | boolean | object)[] = [1, 2, "3", true, { name: "John" }, 5];

printArray(myArray4); // This will also work fine, even with objects

//Consider this situation

function printNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

const myNumbers: number[] = [1,2,3,4,5];

printNumbers(myNumbers); // Works fine

const myMixedArray: (number | string)[] = [1,2,"3",4,5];

printNumbers(myMixedArray); // Type 'string' is not assignable to type 'number'.