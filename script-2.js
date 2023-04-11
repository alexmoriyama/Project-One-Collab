jokeAPIurl =
  "https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=30&region=US&difficulty=medium";

var mainRandBrew = document.getElementById("brewery-container");
var randBrewButton = document.getElementById("randomize-button");
var randJokeButton = document.getElementById("randomize-joke");
var randJokeEl = document.getElementById("random-jokes-container");
var beerPreference = document.getElementById("dropdown1");

function getJokeApi() {
  fetch(jokeAPIurl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var jokes = data;
      var randomJokes = [];
      console.log(randomJokes);

      for (var i = 0; i < 1; i++) {
        var j = Math.floor(Math.random() * data.length);
        var temp = jokes[j];
        randomJokes.push(temp);
        console.log(randomJokes);
      }

      randJokeEl.innerHTML = " ";

      for (var i = 0; i < randomJokes.length; i++) {
        //create jokes h3 elements

        var question = document.createElement("h3");
        var jokesQuestion = document.createElement("h2");
        var answer = document.createElement("h3");
        var jokesAnswer = document.createElement("h2");

        //adds randomized jokes context
        question.textContent = "Question:";
        jokesQuestion.textContent = randomJokes[i].question;
        answer.textContent = "Answer:";
        jokesAnswer.textContent = randomJokes[i].correctAnswer;

        //appends randomized jokes content to the page
        randJokeEl.append(question);
        randJokeEl.append(jokesQuestion);
        randJokeEl.append(answer);
        randJokeEl.append(jokesAnswer);
      }
    });
}
getJokeApi();

BeerAPIurl = "https://api.openbrewerydb.org/v1/breweries/search?query=seattle";

function getBeerApi() {
  fetch(BeerAPIurl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var breweries = data;
      var randomBrewery = [];

      for (var i = 0; i < 3; i++) {
        var j = Math.floor(Math.random() * data.length);
        var temp = breweries[j];
        console.log("temp brew" + temp);
        randomBrewery.push(temp);
        console.log(randomBrewery);
      }
      //Creating a h3 element and a p element

      var randImg = [];

      for (var i = 0; i < 3; i++) {
        var j = Math.floor(Math.random() * 15);
        randImg.push(j);
        console.log(randImg);
      }

      mainRandBrew.innerHTML = " ";

      for (var i = 0; i < randomBrewery.length; i++) {
        var container = document.createElement("section");
        container.setAttribute("id", "brewery-container" + [i]);
        mainRandBrew.append(container);

        var image = document.createElement("img");
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

        image.setAttribute(
          "src",
          "assets/pics/brewer-pics/" + randImg[i] + ".jpg"
        );

        //Appending the dynamically generated html to the div associated with the id="users"

        container.append(image);
        container.append(breweryName);
        container.append(breweryLink);
        container.append(breweryAddress);
        container.append(breweryNum);

        //Append will attach the element as the bottom most child.
      }
    });
}
getBeerApi();

randBrewButton.addEventListener("click", getBeerApi);
randJokeButton.addEventListener("click", getJokeApi);
//TODO: get submit button and get them added to this in order to create filters
// beerPreference.addEventListener("click");
