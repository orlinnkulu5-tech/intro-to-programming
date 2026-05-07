// CRAETING AND ACCESSING ARRAYS
var favoritefood = [];

favoritefood = ["broccoli", "eggplant", "tacos", "mushrooms"];

var myArray = [5, "hi there", true];

console.log(myArray[0]);

// USING VARIABLES INSIDE ARRAYS 
var firstName = "orlin";
var middName = "melior";
var lastName = "Nkulu";

var Scientist = [firstName, middName, lastName];
console.log(Scientist);

//CHANGING ARRAY ELEMENT VALUES
var people = ["orlin", "melior", "nkulu"];
console.log(people);

people[0] = "georgie";
console.log(people);
// WORKING WITH ARRAYS
var people = ["orlin","bobby", "melior", "nkulu", "bryan" ,"bobby", "Eddie", "Herbie", "Boddy"];

var otherPeople = ["teddy", "bobby", "cathy", " G-berg", "georgie"];

document.getElementById("peopleIknow").innerHTML = people.toString();


// CONCAT()
people = people.concat(otherPeople);
console.log(people);


// INDEXOF()
console.log(people.indexOf("melior"));

// // JOIN()
// people = people.join(" # ");
document.getElementById("peopleIknow").innerHTML = people;

// LASTINDEXOF()
console.log(people.lastIndexOf("bobby"));
// POP()
var person = people.pop();
console.log(person);

// PUSH()
people.push("teddy");
console.log(people);

//REVERSE()
people.reverse();
console.log(people);

// SHIFT() AND UNSHIFT()
console.log (people.shift());
console.log(people);

people.unshift("orlin");
console.log(people);
// SLICE() 
console.log(people.slice(0,3));

// SORT()
 console.log(people.sort());

 // SPLICE()
 people.splice(1,0,"teagan");
 console.log(people);