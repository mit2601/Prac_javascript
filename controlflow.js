
//if else statement
let age =17;
if(age>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

// switch case
let day = "Monday";
switch(day){
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
        //exmple 
    default:
        console.log("Invalid day");
}


// ternary operator conditional statement

let voter=false;

age>=18?voter=true:voter=false;

if (voter){
    console.log("You are eligible to vote");
   // alert("You are eligible to vote"); alert is browser feature so cant be used in node.js environment
}
 else {
    console.log("You are not eligible to vote");
    // alert("You are not eligible to vote");
}