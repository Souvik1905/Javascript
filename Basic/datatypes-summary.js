
// Primitive datatype

// String  Number  Boolean  Undefined  BigInt  Null Symbol 


const name= Symbol(123)
const name2=Symbol("123a")

console.log(name === name2);// === helps in checking the equality between two things

// Refernce(non primitive)
// Array  Objects Functions


const heros =["Souvik" ,"Rohan"]

console.log(heros);


let objId ={
  
    name:"Souvik",
    age:22,
    City:"Dibrugarh",

}

console.log(objId);

   



const func = function() {

console.log("Hello World!");

}

 
console.log(typeof name2);  // *****typeof helps in finding the datatype of the Variable*****



//Stack(primitive) and Heap(Non primitive)

// Example of Stack
let NameOne ="Souvik";

let NameTwo = NameOne;
NameTwo="Rohan";

console.log(NameOne)
console.log(NameTwo)

//Example of Heap

let place ={
  
    City:"Dibrugarh"
 

}
place.City="Moran"

console.log(place)// In heap memory we get the refernce value  of the Variable any changes to the value reflects on the Original Value too.
