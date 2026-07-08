// //     let a = 20;
// //     const b = 22;
// //     var c = 23;

// // console.log (a);
// // console.log(b);
// // console.log(c);


// let a = 200;
// if (true){
//     // let a = 100;
//     const b = 20;
// var c = 30;
// console.log(b);
// console.log(c);


// // console.log("inside if block", a);
// }
// console.log(b);
// console.log("outside if block", a);
// console.log(c);

function one(){
    const username = "sahil"

    function two(){
        const website = "youtube"
        console.log(website);
    }
    // console.log(website);
    two()
}

one()

if (true){
    const username = "sahil"
    if (username === "sahil"){
        const website = "youtube"
        console.log(username + website);
        
        console.log("outside if block", username);
    }     
}

// console.log("outside if block", username);