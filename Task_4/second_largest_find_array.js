/*Problem


You have to write a function that will receive an array of numbers.
You have to to return the second largest number from the array.

The array will contain unique numbers (means there will be no duplicate)
The array will contain all positive integers.
*/



/* Solution */



const numbers = [52,65,81,25,34,56,68,98,85,105];
let len = numbers.length;
let big_no = 0;
let second_big_no = 0;

function findNo() {
    for (let i=0 ; i<len ; i++){
        if (numbers[i] > big_no){
            second_big_no = big_no;
            big_no = numbers[i];
        }
        else if (numbers[i] > second_big_no){
            second_big_no  = numbers[i];
        }
    }
    return second_big_no ;
}

console.log ("Second Largest Number is :" + " " + findNo())