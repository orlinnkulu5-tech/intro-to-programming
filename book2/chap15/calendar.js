// var weekday = prompt("enter your favorite day of the week");
// var theResponse;

// switch (weekday) {
//     case "Monday":
//         theResponse = "ack!";
//         break;

//     case "Tuesday":
//         theResponse = "Taco day!";
//         break;

//     case "wednesday":
//         theResponse = "awesome !";
//         break;

//     case "thursday":
//         theResponse = "It's the new friday!";

//     case "Friday":
//         theResponse = "TGIF! Yeah!"
//         break;

//     case "saturday":
//         theResponse = "what a day!"
//         break;

//     case "sunday":
//         theResponse = "sunday = funday!";
//         break;

//     default:
//         theResponse = "I haven't heard of that one!";
// }
// alert(theResponse)
//=================================================================================================================
//                   ACTIVITY  CALENDAR
//=================================================================================================================
var myDate = new Date();
console.log(myDate);

// GETTER METHODES

console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.getTime());

// SETTER METHODES
var myNewDate = new Date();
console.log(myNewDate.getMonth(8));
