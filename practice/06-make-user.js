// Task 6: makeUser (Easy)
// Create and return a user object.
//
// - The object has name, age and isAdult.
// - isAdult is true when age is 18 or more.

function makeUser(name, age) {
  let user = {};
  user.name = name;
  user.age = age;
  user.isAdult = age >=18 ? true: false; 
  return user;
}

// Expected output:
console.log(makeUser("Ann", 25));  // { name: "Ann", age: 25, isAdult: true }
console.log(makeUser("Bob", 15));  // { name: "Bob", age: 15, isAdult: false }
console.log(makeUser("Cid", 18));  // { name: "Cid", age: 18, isAdult: true }
