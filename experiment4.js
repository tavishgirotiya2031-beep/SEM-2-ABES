function calculateResult(){

let sub1 = Number(document.getElementById("sub1").value);
let sub2 = Number(document.getElementById("sub2").value);
let sub3 = Number(document.getElementById("sub3").value);
let sub4 = Number(document.getElementById("sub4").value);
let sub5 = Number(document.getElementById("sub5").value);

let total = sub1 + sub2 + sub3 + sub4 + sub5;
let average = total / 5;

let grade = "";
let result = "";

if(average >= 90){
    grade = "A+";
}
else if(average >= 80){
    grade = "A";
}
else if(average >= 70){
    grade = "B";
}
else if(average >= 60){
    grade = "C";
}
else if(average >= 50){
    grade = "D";
}
else{
    grade = "F";
}

if(average >= 40){
    result = "Pass";
}
else{
    result = "Fail";
}

document.getElementById("total").innerText = total;
document.getElementById("average").innerText = average.toFixed(2);
document.getElementById("grade").innerText = grade;
document.getElementById("result").innerText = result;

}