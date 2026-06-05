/*Problem: Longest Common Prefix]

Given an array of strings, return the longest prefix that is common to all strings in the array.

A prefix is the beginning part of a string.

Return an empty string if there is no common prefix.

Explanation:
There is no prefix common to all strings.
*/


const words = ["flower", "flow", "flought", "flowing"];

let commonPrefix = " ";

function longCommonPrefix () {
    for (let i=0 ; i < words[0].length ; i++){

        let letter = words[0][i];

        for(let j=1 ; j < words.length ; j++){
            if (words[j][i] !== letter){
                return commonPrefix;
            }

        }
        commonPrefix += letter;
    }
     return commonPrefix;
}

console.log("Longest Common Prefix is : " + "" + longCommonPrefix());
