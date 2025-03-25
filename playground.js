// step 2
let name = "UMutesi";
const birthYear = 2003;
const currentYear = new Date().getFullYear();

// Step 3 Use Template Literals
let userAge = currentYear - birthYear;

let message = `Hello  your name is ${name} your age is ${userAge}`;
console.log(message);

//Step 4: Write Arrow Functions
let calcBirthYear = (userAge) => {
  let birthYear = currentYear - userAge;
  console.log(birthYear);
};

calcBirthYear(userAge);

// Step 5: Apply Destructuring

let user = { userName: `${name}`, age: `${userAge}`, country: "Rwanda" };
//let usersInfo = `Hello ${user.name} Your age is ${user.age}  You live in ${user.country}`;

let { userName, age, country } = user;
let usersInfo = `Hello ${userName} Your age is ${age} you live in ${country}`;
console.log(usersInfo);

let colors = ["White", "Pink", "Move", "Yellow", "Brown"];
let [color1, color2] = colors;
console.log(`first color is ${color1}  second color is ${color2}`);

// Step 6: Experiment with Rest and Spread Operators

const sumNumbers = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};

const number1 = [19, 92, 63];
const number2 = [40, 57, 65];
const newArray = [...number1, ...number2];

console.log(sumNumbers(...newArray));
