/*Problem  :
 Write a function that will receive a string. Return true if the string is palindrome, otherwise return false.*/




// let str = "Turab";

// let reverse_str = str.split("");
// let reverse_str = str.reverse();
// let reverse_str = str.join("");

function palindromeCheck(str) {
    
    let reverse_str = str.split(""). reverse(). join("");

    if(str === reverse_str){
        return true;
    }
    else {
        return false;
    }
}

// console.log ("the reverse string is : " + reverse_str);

console.log ("The String is Palindrome : " + "" + palindromeCheck ("adda"));