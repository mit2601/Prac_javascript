let name = "mit patel";
const country="india";
let num=2;
//console.log(name);
var age = 22; 

const printage = ( age) =>{
    console.log (age);
   
    var dis="mahesana";

}

const printName = (name) => {
    
  console.log(name);
}
console.log(dis);//this won't work because dis is defined in printage function and it is not accessible outside the function.   
printName(name);
printage(age);
console.log(country);
console.log(num);
