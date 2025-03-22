// Step 1

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(`Ages: ${ages}`);

ages[ages.length-1] -= ages[0];
console.log(`Ages: ${ages}`);

ages.push(19);
ages[ages.length-1] -= ages[0];
console.log(`Ages: ${ages}`);

let ageSum = 0;
for(let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
console.log(`Average age: ${ageSum / ages.length}`);

// Step 2

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(`Names: ${names}`);

let nameLengthSum = 0;
for(let i = 0; i < names.length; i++) {
  nameLengthSum += names[i].length;
}
console.log(`Average name length: ${nameLengthSum / names.length}`);

// assumes names has at least 1 item
let nameString = names[0];
for(let i = 1; i < names.length; i++) {
  nameString += ` ${names[i]}`;
}
console.log(`Names concatenated: ${nameString}`)

// Step 3
console.log(`array[array.length-1]`);

// Step 4
console.log(`array[0]`);

// Step 5

let nameLengthList = [];
for(let i = 0; i < names.length; i++) {
  nameLengthList[i] = names[i].length;
}
console.log(`Name lengths: ${nameLengthList}`);

// Step 6

let nameLengthListSum = 0;
for(let i = 0; i < nameLengthList.length; i++) {
  nameLengthListSum += nameLengthList[i];
}
console.log(`Name length sum: ${nameLengthListSum}`);

// Step 7

const concatenateLoop = (word, n) => {
  let result = "";
  for(let i = 0; i < n; i++) {
    result += word;
  }
  return result;
}

console.log(concatenateLoop("TestPhrase", 4));

// Step 8

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(`Full Name: ${fullName("David", "Smith")}`);

// Step 9

const sumGreaterThan100 = (array) => {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum > 100;
}

console.log(`Sum of array > 100: ${sumGreaterThan100([40, 37, 22, 52])}`);

// Step 10

const arrayAverage = (array) => {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum/array.length;
}

console.log(`Average of array: ${arrayAverage([36, 200, -23, -190])}`)

// Step 11

const arrayCompareAverage = (array1, array2) => arrayAverage(array1) > arrayAverage(array2);

console.log(`Compare array averages: ${arrayCompareAverage([8, 10, 9], [5, 73, 2])}`);

// Step 12

const willBuyDrink = (isHotOutside, moneyInPocket) => moneyInPocket > 10.5 && isHotOutside;

console.log(`Will buy drink: ${willBuyDrink(true, 25.10)}`);

// Step 13

/* This function will determine whether the average person will purchase a drink given the
    parameters of if it's hot outside and an array containing how much money everyone has */
const willAverageBuyDrink = (isHotOutside, wallets) => willBuyDrink(isHotOutside, arrayAverage(wallets));

console.log(`Will the average person buy drink: ${willAverageBuyDrink(true, [4.10, 8.75, 12.92])}`);