// const user = {
//     username : "sahil",
//     price :  999,

//     welcomeMessage : function(){
//         console.log(`welcome ${this.username} and the price is ${this.price}`);
   
//     }
// };

// user.welcomeMessage();

//object method practice
const userDetails = {
    firstName : "sahil", 
    lastName : " shrestha",
    age : 22,
    subject : "javascript",

    functionCallUserDetails : function(){
        console.log(`hey this is the userDetails portal dear ${this.firstName + this.lastName} and your age is : ${this.age}`);
        console.log(`and your subject is : ${this.subject}`);
    }
};

userDetails.functionCallUserDetails();







// function sahil(){
//     console.log(this);
// }

// sahil()

// const sahil = () => {//arrow function doesn't have its own this keyword
//     let username = "sahil"
//     console.log(this.username);
// }

// sahil()
 
// //basic arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// let addTwo = (number1, number2) => {
//     return number1 + number2
// }

// console.log(addTwo(10, 30));


// let addOne = (numb1, number4) => {
//     return numb1 + number4;
// }


//     addOne(10, 20)
// console.log(addOne);


// console.log(addTwo(10, 20));


//impilicit return
// const addTwo = (num1, num2) =>  num1 + num2


// console.log(addTwo(10, 20)); 

// function Db (){
//     console.log(`Database connected`)
// }
// Db()

//Immeditely invoked function expression (IIFE)
// (function Db(){
//     console.log(`Database connected`);
// })();

// ((name) => {
//     console.log(`Database connected ${name}`);
// })('sahil')



//basic arrow function practice 
const js = (nu1, nu2) => {
return nu1 + nu2;
}
console.log(js(500, 500));

// //implicit return 
// const sahil = (cat, dog) => cat + dog 
// let string = " hehehehe"


// console.log(sahil(100, 300) + string);