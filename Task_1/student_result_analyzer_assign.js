const students = [
    {name : "Turab" , marks : 78},
    {name : "Hassan" , marks : 45},
    {name : "Abdullah" , marks : 92},
    {name : "Baqir" , marks : 60},
];




//Declaration Of Values
const passed_Students = students.filter(passedStudent);
let total = 0;
let len = students.length;




//return Only Passed Students
function passedStudent(value) {
    return value.marks >=50 ;
};




// Calculate Average Marks
for (let student of students){
     total += student.marks; 
    }

average = total / students.length;




//Find the Topper Student
function topper(students){
    let max = -Infinity;
    while(len--){
        if(students[len].marks > max){
            max = students[len].marks;
        }
    }
    return max;
}
let topperStu = topper(students);




//Add Grade Field
function addGrades(){
    for (let student of students){
        if (student.marks >= 80){
            student.grade = "A";
        }
        else if(student.marks >= 60){
            student.grade = "B";
        }
        else if(student.marks >= 50){
            student.grade = "C";
        }
        else{
            student.grade = "F";
        }
    }
}




//Display the Values On Log
console.log(passed_Students);
console.log("Average Marks are :" + " " + average);
addGrades();
console.log("Topper is : "  + " " +topperStu);
console.log(students);
