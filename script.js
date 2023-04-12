var modalSelection = document.getElementById("dropdown1");

// This is the event listener for the modal
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

// This is the event listener for the dropdown menu
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("#dropdown-trigger");
  var instances = M.Dropdown.init(elems);
});

var beerButton = document.querySelector(".dropdown-trigger-1");
var beerPreferenceItem = document.querySelectorAll("#dropdown1");
beerPreferenceItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    beerButton.textContent = event.target.textContent;
  });
});

function storeValue(event) {
  console.log(event.target);
  var modalValue = event.target.id;
  localStorage.setItem("modalValue", modalValue);
  return modalValue;
}

modalSelection.addEventListener("click", storeValue);
