let a=5;
let b= 4;

//Mathematical operations

console.log("Addition:", a+b);
console.log("Subtraction:", a-b);
console.log("Product:", a*b);
console.log("Division:", a/b);
console.log("Remainder:", a%b);cd

//String operations

let str = "Hey Buddy!";

console.log("Original String:", str);
console.log("Length of String:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("SubString:", str.substring(0,4));




//logical operations

console.log("a > b:", a > b); 
console.log("a < b:", a < b); 
console.log("a == b:", a == b); 
console.log("a != b:", a != b); 
console.log("a >= b:", a >= b); 
console.log("a <= b:", a <= b); 



let obj={
    name: "Alice",
    age : 30,
    Role: "Trainer"
}

console.log(obj.age);
console.log(obj.Role);


function product(a,b){
    return a*b;

}
console.log("Product:", product(3,5))


//Array

let arr = [1, 3,"Hey", true, 5];
let arr2 = [1, 2, 3, 4, 5];

for(let i =0;i< arr.length;i++){
    console.log(arr[i])
}

for(let i =0;i< arr.length;i++){
    console.log(arr[i]*2)
}


arr2.forEach(function(x){
    console.log(x * 2)
})

//if-else:

let i = 4;
let j = 6;

if(i > j) {
    console.log("i is greater");
} else {
    console.log("j is greater");
}

//Switch

let choice = 1;

switch(choice) {
    case 1:
        console.log("Choice is A");
        break;
    case 2:
        console.log("Choice is B");
        break;  
    default:
        console.log("Invalid choice");
}