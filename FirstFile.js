"use strict";
// let userInfo = { name: "Bhavesh", age: 34 };
// console.log(userInfo.name)
Object.defineProperty(exports, "__esModule", { value: true });
function printPerson(person) {
    if ("role" in person) {
        console.log("Admin Role:", person.role);
    }
    else {
        console.log("User Email:", person.email);
    }
}
// Test cases
var a = { name: "Alice", role: "Manager" };
var u = { name: "Bob", email: "bob@example.com" };
printPerson(a); // 👈 Output: Admin Role: Manager
printPerson(u); // 👈 Output: User Email: bob@example.com
// function handleStatus(status: "success" | "error") {
//     if (status === "success") {
//       console.log("Operation succeeded");
//     } else {
//       console.log("Operation failed");
//     }
//   }
//   handleStatus("success")
//   function log(id: string | number) {
//     if (typeof id === "string") {
//       console.log(id.toUpperCase());
//     } else {
//       console.log(id.toFixed(2));
//     }
//   }
//   log("Bhavesh")
// class Dog {
//     bark() {
//       console.log("Woof!");
//     }
//   }
//   class Cat {
//     meow() {
//       console.log("Meow!");
//     }
//   }
//   function makeSound(pet: Dog | Cat) {
//     if (pet instanceof Dog) {
//       pet.bark();  // Only Dogs bark
//     } else {
//       pet.meow();  // Only Cats meow
//     }
//   }
//   const myDog = new Dog();
//   const myCat = new Cat();
//   makeSound(myDog); // Output: Woof!
//   makeSound(myCat); // Output: Meow!
//✅ Generic with Arrays
function getFirst(items) {
    return items[0];
}
var firstNum = getFirst([1, 2, 3]); // T = number
var firstStr = getFirst(["a", "b", "c"]); // T = string
console.log(firstNum);
console.log(firstStr);
