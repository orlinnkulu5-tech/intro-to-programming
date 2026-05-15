// LISTING 18-1
// var i = 0;
// while (i < 500) {
//   console.log(i + ": Hello javascript!");
//   i++;
// }

//LISTING 18-2
  // var count = 10;
  // while (count > 0) {
  //   alert(count);
  //   count--;

  // }
  // alert ("blast off!");

// LISTING 18-3
// var people = ["deborah", "carla", "mary", "suzanne"];
// var i = 0;
// while (people[i]) {
//   alert(people[i]);
//   i++;
// }
//================================================================================================


// declare globals
let money = 20;
let lunches = 0;

//display lunch budget
document.getElementById("money").innerHTML = money;

//listen for order
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/* buys specified number of sandwiches per day at current prices */
function buyLunches() {
 resetForm();
 var day = 0;

 while(money > 0) {
  var priceToday = getSandwichPrice();

  var numberOfSandwiches = document.getElementById("numSandwiches").value;

  var totalePrice = priceToday * numberOfSandwiches;

  if (money >= totalePrice ) {
    money = money - totalePrice;
    lunches++;
    day++;
    document.getElementById("receipt").innerHTML += "<p>On day " + day + ",sandwiches are: R " + priceToday + "you have R" +  money.toFixed(2) + "left. </p>";
  } else {
    document.getElementById("receipt").innerHTML += "<p>Today,sandwiches are: R " + priceToday + "you don't have enough money. maybe your sister will give you some of her sandwish </p>";

    money = 0;
  }

 }
document.getElementById("receipt").innerHTML += "<p>You bought " + lunches + " lunches this week.</p>";

}

/*
gets the current price of sandwiches
*/
function getSandwichPrice() {
  let sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2);
  return sandwichPrice;
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
  money = 20;
  lunches = 0;
  document.getElementById("receipt").innerHTML = "";
}
