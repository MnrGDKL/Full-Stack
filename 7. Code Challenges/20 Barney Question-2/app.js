//! Write a function that takes an object (a) and a string (b) as argument
//! Return true if a has a property with key b
//! Return false otherwise

function myFunction(a, b) {
  for (let key in a)
    if (key === b) {
      return true;
    }
  return false;
}
  
 
 console.log(myFunction({ a: 1, b: 2, c: 3 }, "b"));
 // Expected true
 console.log(myFunction({ x: "a", y: "b", z: "c" }, "a"));
 // Expected false
 console.log(myFunction({ x: "a", y: "b", z: "c" }, "z"));
 // Expected true