const name = "Amanmittrpriya"
const repoCount = 50

// console.log(name + repoCount +" Value");


console.log(`Hello my name ${name} and my repo count is ${repoCount}`);

const gameName = new String('amanmittrpriya')

// console.log(gameName[0]);
// console.log(gameName.__proto__);



// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringsOne = "  Amanmittrpriya  "
console.log (newStringsOne);
console.log (newStringsOne.trim());

const url = "https://amanmittrpriya.com/amanmittrpiya%20mittrpriya"


console.log(url.replace('%20', '_'))

console.log(url.includes('sundar'))




console.log(gameName.split('-'));