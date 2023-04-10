jokeAPIurl =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple";

var mainRandBrew = document.getElementById("brewery-container1");
var randBrewButton = document.getElementById("randomize-button");
var randJokeButton = document.getElementById("randomize-joke");

function getJokeApi() {
  fetch(jokeAPIurl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
// getJokeApi();

BeerAPIurl = "https://api.openbrewerydb.org/v1/breweries/search?query=seattle";

function getBeerApi() {
  fetch(BeerAPIurl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      var breweries = data;
      var randomBrewery = [];

      // for (var i = 0; i < data.length; i++) {
      for (var i = 0; i < 3; i++) {
        var j = Math.floor(Math.random() * data.length);
        var temp = breweries[j];
        randomBrewery.push(temp);
        console.log(randomBrewery);
      }
      //Creating a h3 element and a p element

      mainRandBrew.innerHTML = " ";

      for (var i = 0; i < randomBrewery.length; i++) {
        var breweryName = document.createElement("h3");
        var breweryLink = document.createElement("p");
        var breweryAddress = document.createElement("p");
        var breweryNum = document.createElement("p");

        // clears content to start

        //Setting the text of the h3 element and p element.

        breweryName.textContent = randomBrewery[i].name;
        breweryLink.textContent = randomBrewery[i].website_url;
        breweryAddress.textContent = randomBrewery[i].street;
        breweryNum.textContent = randomBrewery[i].phone;

        //Appending the dynamically generated html to the div associated with the id="users"
        mainRandBrew.append(breweryName);
        mainRandBrew.append(breweryLink);
        mainRandBrew.append(breweryAddress);
        mainRandBrew.append(breweryNum);

        //Append will attach the element as the bottom most child.
      }
    });
}
// getBeerApi();

// randBrewButton.addEventListener("click", getBeerApi);
// randJokeButton.addEventListener("click", getJokeApi);

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});