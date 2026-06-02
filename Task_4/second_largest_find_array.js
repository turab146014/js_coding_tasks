/*Problem


You have to write a function that will receive an array of numbers.
You have to to return the second largest number from the array.

The array will contain unique numbers (means there will be no duplicate)
The array will contain all positive integers.
*/



/* Solution */



const numbers = [10, 15, 5, 6, 12, 32, 4];
let len = numbers.length;
let largest = 0;
let second_largest= 0;
function second_large(){
    for (let i=0; i<len; i++){
        if(numbers[i] > largest) {
            second_largest = largest;
            largest = numbers[i];
        }
       else if(numbers[i] > second_largest){
            second_largest = numbers[i];
       }
    }
    return second_largest;
}
console.log("Second Largest Number is :" + " " + second_large());
