//for loop 

for (let sahil = 0; sahil <= 5; sahil++){
    const shrestha = sahil;
    console.log("sahil printed");
    console.log(shrestha);
}

// console.log(shrestha); out of scope error

for (let i = 0; i <= 5; i++){
    const element = i;
    if (element == 5){
        console.log("element is 5 is printed down");

    }
    console.log(element);
}
//multiplication table print
for (let i = 0; i <= 100; i++){
    console.log(`outer loop ${i}`);
    
    for (let j = 0; j <= 100; j++){
        // console.log(`inner loop ${j} and outer loop ${i}`);

        console.log(i + '*' + j + '=' + i*j);
        
    }
}