// const user = {
//     name: "Mit",
//     address: {
//       //  city: "Ahmedabad"
//     }
// };

// //console.log(user.address?.city);
// //console.log(user.phone?.number);

// const employee = {};

// //console.log(employee.company?.location?.city);

// const cars = ["BMW", "Audi", "Tesla"];

// //console.log(cars?.[1]);

// const student = {
//     greet() {
//         return "Hello";
//     }
// };

// //console.log(student.greet?.());

// let age = 0;
// //console.log(age ?? 18);

// let salary;
// //console.log(salary ?? 50000);

// let city = "";   // it  will print empty string its only work when string is undefined or null
// console.log(city ?? "vijapur");

// const customer = {
//     name: "Rahul"
// };

// //console.log(customer.address?.city ?? "City Not Available");


// const employees = [
//     {
//         name: "Mit",
//         department: "QA"
//     },
//     {
//         name: "Rahul",
//         department: "Engineering"
//     }
// ];

// console.log(employees?.[1].name);

// console.log(employees?.[0]);
// console.log(employees?.[0].address?? "address not available");

// console.log(employees?.address);

const response = {     ///dataset code is from Ai
    success: true,
    message: "Data fetched successfully",
    data: {
        company: {
            id: "CMP001",
            name: "Xenabler",
            location: {
                city: "Ahmedabad",
                state: "Gujarat"
            }
        },
        employees: [
            {
                id: 1,
                name: "Mit",
                department: "QA",
                salary: 55000,
                active: true,
                skills: ["JavaScript", "React", "Git"],
                address: {
                    city: "Ahmedabad",
                    pincode: 380001
                },
                manager: {
                    id: 101,
                    name: "Neel"
                }
            },
            {
                id: 2,
                name: "Rahul",
                department: "Engineering",
                salary: 85000,
                active: true,
                skills: ["Node.js", "Express", "MongoDB"],
                manager: {
                    id: 102,
                    name: "Ankit"
                }
            },
            {
                id: 3,
                name: "Priya",
                department: "HR",
                salary: 60000,
                active: false,
                skills: [],
                address: {
                    city: "Surat",
                    pincode: 395007
                }
            },
            {
                id: 4,
                name: "Nisarg",
                department: "Engineering",
                salary: 95000,
                active: true,
                skills: ["Java", "Spring Boot", "MySQL"],
                address: {
                    city: "Vadodara",
                    pincode: 390001
                },
                manager: {
                    id: 102,
                    name: "Ankit"
                }
            }
        ]
    }
};

// function getemployeename(id){
//  return response.data.employees.find((emp)=>emp.id===id)?.name??"employee not exist";
// }
// console.log(getemployeename(10));


// function getEmployeeCity(id){
//     const employee=response.data?.employees?.find(emp => emp.id===id);

//     if(!employee){
//         console.log("employee not exist");

//     }
//     else{
//         return employee.address?.city??"address not available"
//     }
// }

// console.log(getEmployeeCity(2)); //address not available
// console.log(getEmployeeCity(3)); //get the city


// function getAllActiveEMP(){
//     const engineer = response?.data?.employees.filter(emp => emp.active===true);
//     // return engineer.forEach((i)=>{console.log(i.name)}); //it is for only for print not return any value
        
//    return engineer.map((emp)=>emp.name);
// }

// console.log(getAllActiveEMP());



// JS Callback

