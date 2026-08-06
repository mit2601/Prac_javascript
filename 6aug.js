// "use strict";

// console.log(this);

// function x(){

//     console.log(this);
// }

// x();
// window.x()


// const x = {
//    b:10,   
//      y:function (){
//         let a =10;
//         console.log(this);
//     }
// }

// x.y()


// const obj ={ 
//     name:"mit",
//     printname:function(){
//         console.log(this.name)
//     }
// }
// obj.printname()

// const studentname={
//     name:"rahul"
// }

// obj.printname.call(studentname) 
// here if we use call method so it will take ref of student name obj

// const obj ={
//     x: ()=>{
//         console.log(this)  // in arrow function it will act like global space
//     }
// }

// obj.x();


// const obj ={
//     x:function(){
//             // console.log(this)  
//         const y = ()=>{
//         console.log(this)  
//     }
//     y()
//   } 
// }
// // in nested arrow function it will ref this keyword as obj 
// obj.x();


const obj ={ 
    name:"mit",
    // printname:function(){
    //     console.log(`this.name`)
    // }
}
// obj.printname();

const studentname={
    name:"rahul"
}
  function printname (surname,hometown){
        console.log(`${this.name} ${surname},${hometown}`)
    }

printname.call(studentname,"patel","malosan");

printname.apply(studentname,["paatel","malosan"]) // diff between call and apply method is just the way of pass args

const print = printname.bind(studentname,"patel","malosan");
print()

// bind method bind all thing and return one function after execute that function we can get output

