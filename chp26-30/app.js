// 
let  userInput = parseInt(prompt("Enter a positive integer: "));
if (isNaN(userInput) || userInput <= 0) {
  alert("Invalid input: Please enter a positive integer.");
} else {
  let number = userInput; 
  let roundOff = Math.round(number);
  let floorValue = Math.floor(number);
  let  ceilValue = Math.ceil(number);
  document.write(`Number: ${number}`);
  document.write(`Round off value: ${roundOff}`);
  document.write(`Floor value: ${floorValue}`);
  document.write(`Ceil value: ${ceilValue}`);
}
// 2
let  usersInput = parseFloat(prompt("Enter a negative floating-point number: "));

if (isNaN(userInput) || usersInput >= 0) {
  alert("Invalid input: Please enter a negative floating-point number.");
} else {
    let  number = usersInput; 
    let  roundOff = Math.round(number);
    let  floorValue = Math.floor(number);
    let ceilValue = Math.ceil(number);

  document.write(`Number: ${number}`);
  document.write(`Round off value: ${roundOff}`);
  document.write(`Floor value: ${floorValue}`);
  document.write(`Ceil value: ${ceilValue}`);
}
// 3

let number = parseFloat(prompt("Enter a number: "));
let absoluteValue = Math.abs(number);
document.write(`The absolute value of ${number} is: ${absoluteValue}`);

// 4
let num = parseFloat(prompt("Enter a number: "));
let absValue = Math.abs(num);
document.write(`The absolute value of ${num} is: ${absValue}`);

// 5
const randomNumber = Math.floor(Math.random() * 6) + 1; 
console.log("You rolled a", randomNumber); 
// 6
const ranNumber = Math.floor(Math.random() * 100) + 1;
console.log("Your random number is:", ranNumber); 
