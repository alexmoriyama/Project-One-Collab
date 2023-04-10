jokeAPIurl = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"


function getJokeApi(){
fetch(jokeAPIurl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


}
getJokeApi();

BeerAPIurl = "https://api.openbrewerydb.org/v1/breweries/search?query=seattle"


function getBeerApi(){
fetch(BeerAPIurl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    for (var i = 0; i < data.length; i++) {
        //Creating a h3 element and a p element
        var breweryName = document.createElement('h3');
        var breweryLink = document.createElement('p');
        var breweryAddress = document.createElement('p');
        var breweryNum = document.createElement('p');
        
        //Setting the text of the h3 element and p element.
        breweryName.textContent = data[i].name;
        breweryLink.textContent = data[i].website_url;
        breweryAddress.textContent = data[i].street;
        breweryNum.textContent = data[i].phone;

        //Appending the dynamically generated html to the div associated with the id="users"
        //Append will attach the element as the bottom most child.
        mainRandBrew.append(breweryName);
        mainRandBrew.append(breweryLink);
        mainRandBrew.append(breweryAddress);
        mainRandBrew.append(breweryNum);
    }
  });


}
getBeerApi();

