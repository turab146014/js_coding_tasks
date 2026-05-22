const text = "JavaScript is great and JavaScript is powerful";
let count = {};

//COUNT FREQUENCY OF EACH WORD

function countFrequency(text){
    let words = text.toLowerCase().split(" ");
    for (let word of words){
        if(count[word]){
            count[word]++;
        }
        else{
            count[word] = 1;
        }
    }
    return count;
}



//  RETURN THE MOST REPEATED WORD IN THE STRING

function mostRepeatedWord(){
    let repeatedWord = "";
    let maxCount = 0 ;
    for (let word in count){
        if (count[word] > maxCount ){
            maxCount = count[word];
            maxCount = word;
            repeatedWord = word;
        }
    }
    return repeatedWord;
}



//CALLING THE FUNCTION

let frequency = countFrequency(text);
console.log(frequency);

console.log("The most repeated word is :" + mostRepeatedWord());










