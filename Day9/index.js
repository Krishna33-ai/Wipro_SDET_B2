//Default parameters

function welcome(name = "Guest"){
    console.log(`Welcome ${name}`);

}

welcome("Aaryan");
welcome("Rohit");
welcome() // default parameter is passed here in this case



//Spread Operator

const nums = [1,2,3,4,5];
const newNums = [...nums,6,7,8];

console.log(newNums);





const obj = {
    name: "Sam",
}
const updatedObj = {
    ...obj,
    age:25
};
console.log(updatedObj);




//Rest Operator

const cal = {
    sum : (...nums)=> nums.reduce((a,b)=> a+b,0),
}

console.log(cal.sum(1,4,7,8))




//Destructuring

// const arr = ["Aryan", "Sam", "Rohit", "John"];

// const first = arr[0];
// const second = arr[1];
// const third = arr[2];
// const fourth = arr[3];



const [first, second, third, fourth] = ["Aryan", "John", "Sam", "William"];
console.log(first,second,third,fourth);



const [one , two, ...three] = [1,3,4,8,5]
console.log(one, two, three);





//Key based extraction

const {name, age} = {name: "aryan", age: 25};

console.log(age, name)