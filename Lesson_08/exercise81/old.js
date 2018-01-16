console.log("start");
const anArray = new Array(-1); //rangeError
anArray.push("0");
console.log(anArray);

const width = 12;
console.log(width * height); //referenceError

let list = ['element 1', 'Element 2' //syntaxError
'Element 3'];
console.log(list[0].upperCase()); //typeError

width.toFixed(30); //rangeError

const user = {
    first name: "Bartek", //syntaxError
    lastName: "Nowak",
    age: 25
}
console.log(user.age.tostring()); //typeError
