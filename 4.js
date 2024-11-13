//Array
/*
let marks = [97, 82, 75, 64, 36];
console.log(marks);
console.log(marks.length);
*/

//using loop in array

/*

let heros = ["ironman", "spiderman", "hulk", "saktiman", "antmaan"]
//use loop
for(let idx=0; idx<heros.length; idx++){
    console.log(heros[idx]);
}

*/


/* 

this is shortcut

//for of loop
let heros = ["ironman", "spiderman", "hulk", "saktiman", "antmaan"]
for(let hero of heros){
    console.log(hero);
}
*/


/*
let cities = ["delhi", "pune", "mumbai", "bangluru", "haydrabad"];

for(let city of cities){
    console.log(city.toUpperCase())
}
*/

// avg marks

/*
let marks=[85, 97, 44, 37, 76, 60];
let sum=0;
for(let val of marks){
    sum=sum+val;
}
let avg=sum/marks.length;
console.log(`avg marks of the class = ${avg}`);
*/


/*

// offer 10% and minus

// using for of  loop
let items = [25, 645, 300, 900, 50];

let i = 0;

for (let val of items) {
    console.log(`value at index ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`vaalue after offer = ${items[i]}`);
    i++;
}

*/


//method 2

/*
let items=[250, 645, 300, 900,  50];
let i=0;

for(let i=0; i<items.length; i++){
    let offer=items[i]/10;
    items[i]-=offer;
}
console.log(items);
*/


// arrays 

/*
let foodItems=["potato", "apple", "litchi", "tomato"];

//foodItems.push("chips", "burger", "paneer"); // use for add to end in new items

console.log(foodItems);

foodItems.pop(); // delet for last item

console.log(foodItems);

*/


/*
let foodItems=["potato", "apple", "litchi", "tomato"];
console.log(foodItems);
console.log(foodItems.toString()); // convert in array to string

*/


/*
let marvelhero=["thor", "spiderman", "ironman"];
let DChero=["superman", "batman"];

let heroes=marvelhero.concat(DChero); // add for 2 array
console.log(heroes);

*/


/*
let marvelhero=["thor", "spiderman", "ironman"];
let hero=marvelhero.unshift("antman");
console.log(hero);
*/

/*
let marvelhero=["thor", "spiderman", "ironman", "Dr. strange", "antman"];
console.log(marvelhero);

console.log(marvelhero.slice(1, 4))
*/

