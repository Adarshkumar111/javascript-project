// console.log("Apna college");
// console.log("Apna college");
// console.log("Apna college");
// console.log("Apna college");


// for loop

/*
for(let count=1; count<=5; count++){
    console.log("Apna college");
    
}
*/


// calculate sum of 1 to n

/*
let sum = 0;
let n = 100;
for (let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log("sum=", sum);
console.log("loop has ended")
*/



//while loop
/*
let i =1;
while(i<=5){
    console.log("i=",i);
    i++

}
*/


//do while

/*
let i =1;
do{
    console.log("i =", i);
    i++;
} while(i<=10);
*/


// for  of loop

/*
let str="javascript";

let size=0;
for(let i of str){
    console.log("i = ", i)
    size++;
}

console.log("String size = ", size);
*/

// for in loop

/*
let student ={
    name: "Rahul kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true,
};

for(let key in student){
    console.log("Key =",key, "value=", student[key]);
}
    */


// print all even numbers from  0 to 100;

/*
for(let num=0; num<=100; num++){
    if(num%2==0){
        console.log("num = ", num);
    }

}
*/

// create a game where you start with any random game number. ask the user to keep  guessing the game number until the user enters correct value

/*
let gameNum=25;

let userNum = prompt("guess the game number : ")

while(userNum!=gameNum){
    userNum=prompt("you entered wrong number. guess again")
}
console.log("Congratulation, you entered the righht bym");
*/


// string

/*
let str = "Adarsh";

console.log(str[0])
console.log(str[1])
console.log(str[2])
console.log(str[3])
console.log(str[4])
*/


//template literals

/*
let specialString='This  is a template literal';
console.log(specialString);
console.log(typeof specialString);
*/


/*
let obj ={
    item: "pen",
    price: 10,
};
let output = `the cost ${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log("the cost of ", obj.item,  "is", obj.price, "rupees");
*/


/*
let specialString=`This  is a template literal ${1+2+3}`;
console.log(specialString);
*/


// \n next  line
// \t next  tab


//string method


/*
let str="apna college";
upper=str.toUpperCase()
console.log(upper);
console.log(str);
*/


/*
let str="         Apna         college         js  ";
console.log(str.trim());
console.log(str);
*/


// let str = "01234567";
// console.log(str.slice(0, 3));

/*
let str1 = "apna";
let str2= "college";
let res = str1 + str2;
console.log(res);
*/



// let str="hello";
// console.log(str.replace("h", "m"));


// let str="Ilovejs";

// console.log(str.charAt(2));


let str = "I love js";
str=str.replace("I", "s");
console.log(str);
