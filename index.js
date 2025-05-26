// Exercise #1 ( sugerencia join() ) -------------------------------------------------------------------------

let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  return arr.join(" ");
}

printOutString(); //This is a sentence.

// Exercise #2 (sugerencia map() )  -------------------------------------------------------------------------
// Write a function that:
// •	Takes in an array of numbers.
// •	Doubles the value of each number in the array.
// •	Prints out the new updated array.
// Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

function doubleNumbers(arr) {
  const doubled = arr.map(num => num * 2);
  console.log(doubled);
  return doubled;
}

doubleNumbers([1, 2, 4, 5]); //[2, 4, 8, 10]


// Exercise #3 (sugerencia reduce() )  -------------------------------------------------------------------------
// Write a program to compute the sum and product (multiplication) of an array of numbers. 
// Print out the sum and the product.
// Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

function sumAndProduct(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const product = arr.reduce((acc, num) => acc * num, 1);
  
  console.log("Sum:", sum);
  console.log("Product:", product);
  return sum, product;
}

sumAndProduct([1, 2, 3, 4]); // 10, 24


// Exercise #4 (sugerencia filter() e includes() )  -------------------------------------------------------------------------
// let student1Courses = ['Math', 'English', 'Programming'];
// let student2Courses = ['Geography', 'Spanish', 'Programming'];
// Create a program that loops over the 2 arrays; 
// if there are any common courses print them out to the console.

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function findCommonCourses() {
  const commonCourses = student1Courses.filter(course => student2Courses.includes(course));
  console.log(commonCourses);
}

findCommonCourses(); //['Programming']


// Exercise #5 -------------------------------------------------------------------------
// For each of the exercises below, assume you are starting with the following people array.

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1.	Write a command that prints out all of the people in the list.
console.log(people);

// 2.	Write the command to remove "Dani" from the array.
people.splice(people.indexOf("Dani"), 1);

// 3.	Write the command to remove "Juan" from the array.
people.splice(people.indexOf("Juan"), 1);

// 4.	Write the command to move "Luis" to the front of the array.
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);

// 5.	Write the command to add your name to the end of the array.
people.push("KarlaJM");

// 6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") {
    break;
  }
}

// 7.	Write the command that gives the indexOf where "Maria" is located.
console.log(people.indexOf("Maria"));



// Exercise # 6 -------------------------------------------------------------------------
// Realizar una función que realice el algoritmo de burbuja.
// Entrada [3, 6, 12, 5, 100, 1 ]
// Salida [1, 3, 5, 6, 12, 100]

function bubbleSort(arr) {
  let n = arr.length;
  
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  console.log(arr);
}

bubbleSort([3, 6, 12, 5, 100, 1]);
