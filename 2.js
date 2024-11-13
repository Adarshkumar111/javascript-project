// this code prints hello world

// console.log("Hellow world!");

//this is a comment
/*

let a=5;
let b=2;

console.log("a=",a, "& b= ",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);//power
*/



//unary operator


/*
let a=5;
let b=2;

console.log("a=",a, "& b= ",b);


//a=a+1;
//console.log(a);

//console.log("++a=", ++a); //pre incriment

console.log("a++=", a++); //post increment
console.log(a);

*/



//Assign operator


/*
let a=5;
let b=2;

a +=4
console.log("a = ",a);
// isi tara se sare operator me workkk krega

*/


//Comparison operator

/*
let a=5;
let b=2;

console.log("a==b", a==b);
console.log("a!=b", a!=b);
console.log("a===b", a===b);
console.log("a!==b", a!==b);

console.log("5>2",a>b);
console.log("5<2",a<b);

*/


//logical operator

/*
let a=5;
let b=2;

let cond1=a<b; //false
let cond2 = a===5; //true
console.log("cond1 && cond2 =",cond1&&cond2);
// AND both true then true 

console.log("cond1 || cond2 =", cond1||cond2);
//OR 1 true then true

console.log("!(5<2)=",!(a<b));//false
// !- true ko false or false ko true bnaa deta hai

*/


// conditional statement

/*
let age =16;
if (age>=18){
    console.log("You  can vote");

}
if(age<18){
    console.log("You cannot vote");
    
}
*/


/*
let mode="dark"
let color;

if(mode ==="dark"){
    color="black";
}

if(mode ==="light"){
    color = "white";
}

console.log(color);
*/


// if-else statement

/*
let age = 25;

if (age>=18){
    console.log("vote");
    }
 else {
    console.log("not vote");
    
}

*/

/*
let num = 10;
if (num % 2 === 0) {
    console.log(num, "is even");

}
else {
    console.log(num, "is odd");

}
*/


//else-if statement

/*
let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}
else if (mode === "blue") {
    color = "blue";
}
else if (mode === "pink") {
    color = "pink";
}
else {
    color = "white";
}

console.log(color);

if(mode==="dark"){
    console.log(mode);
}

*/


//conditionnal statement

/*
let age=25;

let result = age>=18? "adult" : "not adult";
console.log(result);
*/


// get user to input a number using prompt("Enter a  umber:"). check if the number is a multiple of 5 or not


/*
let num=prompt("enter a number:")

if (num%5===0){
    console.log(num, "is multiple  of 5")
}
else{
    console.log(num, "is not multiple of 5");
    
}
*/

/*
let score = 78;
let grade;

if(score>=90 && score <=100){
    grade="A";
} else if(score>=70 && score <=89){
    grade="B";
}
else if(score>=60 && score <=69){
    grade="C";
}
else if(score>=50 && score <=59){
    grade="D"
}
else if(score>=0 && score <=49){
    grade="F"
}
console.log("according to scores, your grade is: ", grade);
*/