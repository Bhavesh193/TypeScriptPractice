
// let userInfo = { name: "Bhavesh", age: 34 };
// console.log(userInfo.name)

// console.log(user.mail)

// function user(name: string) {
//     return 0;
// }

// console.log(user("Bhavesh"))


///////////////////////////////

// interface UserData {
//     readonly dbId: number,
//     email: string,
//     userId: number,
//     googleId?: string,
//     startTrail() : string
// }

// function trailMethod(): string {
//     return "Bhavesh"
// }

// const User: UserData = {
//     dbId: 56343,
//     email: "bhavesh@gmail.com",
//     userId: 2001,
//     startTrail : trailMethod ,
// }

// User.userId = 43594839
// console.log("UserData : " + User.userId)



//// Object Type
// const car: { type: string, model: string, year: number } = {
//     type: "Toyoto",
//     model: "Corolla",
//     year : 2002
// }

// car.model = ""


/// Enum

// enum User {
//     name, 
//     rollNo,
//     id,
//     email = "user@gmail.com"
// }

// let user: User = User.email
// console.log(user);


/// type narrowing

// type Admin = { name: string; role: string };
// type User = { name: string; email: string };

// function printPerson(person: Admin | User) {
//   if ("role" in person) {
//     console.log("Admin Role:", person.role);
//   } else {
//     console.log("User Email:", person.email);
//   }
// }
// // Test cases
// const a: Admin = { name: "Alice", role: "Manager" };
// const u: User = { name: "Bob", email: "bob@example.com" };

// printPerson(a); // 👈 Output: Admin Role: Manager
// printPerson(u); // 👈 Output: User Email: bob@example.com



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
function getFirst<T>(items: T[]): T {
    return items[0];
  }
  
  let firstNum = getFirst([1, 2, 3]);        // T = number
  let firstStr = getFirst(["a", "b", "c"]);  // T = string
  
console.log(firstNum);
console.log(firstStr);


























































export{}