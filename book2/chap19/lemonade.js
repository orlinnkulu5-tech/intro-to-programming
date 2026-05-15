// CREATE DAYS OF WEEK ARRAY
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// DEFINE YPES OF WEATHER
var weather = ["Sunny", "Cloudy", "Raining", "Snowing", "Party Sunny", "Party Cloudy", "Thursday", "Foggy"];

//SET MIN AND MAX TEMPERATURES
var maxTemp = 100;
var minTemp = 0;
// cost of a cup of lemonade
var lemonadeCost = 0.5;
// ARRAY FOR STORING DAILY TEMPS
var dailyTemp = [];
/**generates weather for the week **/
generateWeather();
function generateWeather() {
     var weatherToday;
     var tempToday;

    for (var i = 0; i < days.length; i++) {
        weatherToday = weather[Math.floor(Math.random() * weather.length)];
        tempToday = Math.floor(Math.random() * (maxTemp - minTemp - minTemp) + minTemp);
        dailyTemp[i] = tempToday; document.getElementById("5DayWeather").innerHTML += "<div id='" +
            days[i] + "' class='" + weatherToday +
            "'><b>Forecast for " + days[i] + ":</b><br><br>" +
            weatherToday + " and " + tempToday + " degrees.</div>";

    }
}

// TODO: ADD COMMENTS
