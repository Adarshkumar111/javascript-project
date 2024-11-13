// function
/*
function myfunction(){
    console.log("Welcome to my world");
    console.log("We are learning jjs")
    console.log("Welcome to my world");
    console.log("We are learning jjs")
}
myfunction();
myfunction();
*/


/*
function myfunction(msg){
    console.log(msg);
    
}
myfunction("i love js");

*/


//function-> 2 numbers,  sum

/*
function sum(x, y){
    console.log(x+y);
}
sum(5, 6)
*/


/*
function sum(x, y){
    s=x+y;
    return s;
    
}
let val = sum(3, 4);
console.log(val);
*/

/*
// sum function

function sum(a, b){
    return a+b;
}

// multiplication function
function mul(a, b){
    return a*b;
}
*/

/*
// arrow functionn

const arrowsum=(a, b)=>{
    console.log(a+b);
};

*/

// Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

/*
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        console.log(char);
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u") {
            count++
        }

    }
    
   
    return count;
}

*/



// for each looop in array

/*

let arr=[1, 2, 3, 4, 5];
arr.forEach(function printVal(val){
    console.log(val);
});
*/



/*

let arr = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego"];
arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx);
});

*/



// number ka square

/*
let num=[2, 3, 4, 5, 6];

num.forEach((num)=>{
    console.log(num*num);
});

*/

// method 2



/*
let num=[12, 13, 14]

let calcSquare=(num)=>{
    console.log(num*num);
};

num.forEach(calcSquare);
*/


// MAP in arr

/*
let num=[67, 52, 39];

let newArr=num.map((val)=>{
    // return val;
    // return val*2;
    return val*val;
});
console.log(newArr);
*/


//filter

/*
let arr = [1, 2, 3, 4, 5, 6, 7];
let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);
*/

// reduce

/*
let arr=[1,2,3,4];

const output = arr.reduce((res, curr)=>{
    return res + curr;
});

console.log(output);
*/

/*
let arr=[5, 4, 6, 23];
const output=arr.reduce((prev, curr)=>{
    if(prev>curr){
        return prev;
    }
    else{
        return curr;
    }
});
console.log(output);
*/

// 2nd method
/*
let arr=[5, 4, 6, 23];
const output=arr.reduce((prev, curr)=>{
    return prev>curr? prev : curr;
});
console.log(output);
*/


/*
let marks=[97, 64, 32, 49, 99, 96, 86];
let newArr=marks.filter((val)=>{
    return val>90;
});

console.log(newArr);
*/


/*
let n = prompt("Enter a number: ");
let arr = [];

for (let i = 1; i < n; i++) {
    arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
}, 0);
console.log(sum);

let factorial = arr.reduce((res, curr) => {
    return res * curr;
}, 1);
console.log(factorial);
*/