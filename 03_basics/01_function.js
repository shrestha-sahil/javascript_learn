function myfunction (){
    console.log("S");
    console.log("a");
    console.log("h");
    console.log("i");
    console.log("l");
}

// myfunction() //-->myfunction is reference and () helps to execute


// function addTwoNumber(Number1, Number2){
//     console.log(Number1 + Number2);
    
// }

function addTwoNumber(Number1, Number2){
    let result = Number1 + Number2
    // console.log("sahil");
    return result
    /*if the console log was in this line 
    then it will never be printed because
     above the return keyword is used so after
     return it doesn't goes for down step */
}


const result = addTwoNumber(10, 15)

// console.log("result is:", result);


function loginUserMessage (username = "sahil"){
    if(!username){
        console.log("please enter your username:");
        return
    }   
    return `${username} just logged in`
}
 console.log(loginUserMessage());
 

 function calculateCartPrice(num1){
    return num1
 }
 
 console.log(calculateCartPrice(7 + 'suiiiiiiii'));
 
//  console.log(calculateCartPrice(7 + "cr7"));



const user = {
    username : "sahil",
    price :  999
}

function handleObject (anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

++handleObject(user)

function sahil(hehe){
    console.log(`username is ${hehe.username} and the items of price is ${hehe.price}`);
    
}

++handleObject(user)
