// // var age = 20
// // if (age >= 18) {
// //     console.log("you are an adult");
// // }else{
// //     console.log("you are a minor");
// // }

// var age = 12;
// var accompanied = true;
// var ageRequirement = age >= 13;
// console.log( age && (ageRequirement || accompanied));

 var randomBodyParts =["head","face","Nose","Mouth","Teeth"];
 var randomAdjectives =["Stupid","lazy","Nasty","Pathetic","Spineless"];
 var randomAnimals =["Monkey","Goat","Rat","Raccoon","Wombat","Bat"];
 var randomAnimalsBodyparts =["Neck","Nose","Ears","wings","Tail"];


 var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
 var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
 var randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
 var randomAnimalsBodypart = randomAnimalsBodyparts[ Math.floor(Math.random() * randomAnimalsBodyparts.length)];


 var randomInsulet =  ["Your",randomBodyPart , "is like" ,randomAdjective , randomAnimal , randomAnimalsBodypart];
 console.log(randomInsulet.join(" "));
 
