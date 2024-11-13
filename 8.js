/*
let btn1=document.querySelector("#btn1");

btn1.onclick = () =>{
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);
}

let div=document.querySelector("div");
div.onmouseover=(evt)=>{
    // console.log("you  r inside div");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clintY);
}
*/


// event listeners 
//add event

let btn1=document.querySelector("#btn1");
btn1.addEventListener("click", ()=>{
    console.log("button 1 was clicked-handeler 1");  
});

btn1.addEventListener("click", ()=>{
    console.log("button 1 was clicked-handeler 2");
});

// handler 3 koo same fxn me dalte hai
const handler3 = ()=>{
    console.log("button 1 was clicked-handeler 3");
};
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", ()=>{
    console.log("button 1 was clicked-handeler 4");
});

// remove event
btn1.removeEventListener("click", handler3);