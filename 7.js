// let div =document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);


/*
let para = document.querySelector("p");
console.log(para.setAttribute("class", "newclass"));
*/

// bina html css me change kie hue js se kuch v change kr sakte  hai

/*
let div = document.querySelector("div");
div.style.backgroundColor="green";
div.style.fontSize="20px";
*/

/*
let newBtn = document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);

let div=document.querySelector("div");
// div.append(newBtn);
div.prepend(newBtn); // sabse uapar ayegaa butten
*/

// to add new line

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hi, I am new!<i>";

document.querySelector("body").prepend(newHeading);

// to remove line

let para= document.querySelector("p");
para.remove();

