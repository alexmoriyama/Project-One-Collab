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

var beerButton = document.querySelector('.dropdown-trigger-1');
var beerPreferenceItem = document.querySelectorAll('#dropdown1');
beerPreferenceItem.forEach(item => {item.addEventListener('click', event=>{
    beerButton.textContent = event.target.textContent;});
    
});

var hoppinessBtn = document.querySelector('.dropdown-trigger-2');
var hoppinessBtnItem = document.querySelectorAll('#dropdown2');
hoppinessBtnItem.forEach(item => {item.addEventListener('click', event=>{
    hoppnessBtn.textContent = event.target.textContent;});
    
});

var abvBtn = document.querySelector('.dropdown-trigger-3');
var abvPreferenceItem = document.querySelectorAll('#dropdown3');
abvPreferenceItem.forEach(item => {item.addEventListener('click', event=>{
    abvBtn.textContent = event.target.textContent;});
    
});