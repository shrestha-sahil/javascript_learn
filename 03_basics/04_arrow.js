// const user = {
//     username : "sahil",
//     price :  999,

//     welcomeMessage : function(){
//         console.log(`welcome ${this.username} and the price is ${this.price}`);
   
//     }
// };

// user.welcomeMessage();

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

// console.log(addTwo(10, 20));


//impilicit return
// const addTwo = (num1, num2) =>  num1 + num2


// console.log(addTwo(10, 20)); 

function Db (){
    console.log(`Database connected`)
}
Db()
