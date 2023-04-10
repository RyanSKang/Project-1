// Linking API
var Key='5c5121022cmsh6b74a533d86f689p10c9aejsnf1bd89d05ce6'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': Key,
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
	}
};

var baseURL="https://tasty.p.rapidapi.com/recipes/list?from=0&size=15&q=";

// Toggle light or dark mode
if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
    
    // Change the icons inside the button based on previous settings
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        themeToggleLightIcon.classList.remove("hidden");
      } else {
        themeToggleDarkIcon.classList.remove("hidden");
      }
      
      var themeToggleBtn = document.getElementById("theme-toggle");
      
      themeToggleBtn.addEventListener("click", function () {
        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle("hidden");
        themeToggleLightIcon.classList.toggle("hidden");
        
        // if set via local storage previously
        if (localStorage.getItem("color-theme")) {
          if (localStorage.getItem("color-theme") === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          }
          
          // if NOT set via local storage previously
        } else {
          if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          }
        }
      });

// Defining Variables

// Main div holding all divs
var mainCard = $('.card');
// Title of result (food) on Div
var titleOfFood = $('.resultsTitle');
// Div holding image/description/buttons
var hero = $('.hero');
// <a> tag holdimg image but outside of hero div
var displayPic = $('.resultsImg');
// Div within layer holding food description
var foodDescription = $('.foodDescription');
// See More Button
var seeMoreBtn = $('.seeMoreBtn');
// Save For Later Button
var saveLaterBtn = $('.saveLater');
// Home Button
var homeBtn = $('.homeBtn');
// About Button
var aboutBtn = $('.aboutBtn');
// Contact Button
var contactBtn = $('.contactBtn');
// Save for later Results Button
var saveLaterResultsBtn = $('.saveLaterResults');

// A function that retrieves data from API
function getResultsList() {
  const newSearch= JSON.parse(localStorage.getItem("Filtered Ingredients"))
  const searchURL=ingredientStringParam(newSearch)
  
  // Fetching API 
     fetch(searchURL,options)
    .then(function(response){
      console.log(response);
      return response.json();
    })
    .then(function(data){
      console.log(data);
      
      for(let i=0; i<data.results.length;i++){
      const food = data.results[i].name;
      console.log(food)
      displayName(food);
      
      const descriptionOfFood = data.results[i].description;
      console.log(descriptionOfFood)
      displayDescription(descriptionOfFood);
      
      const foodImg = data.results[i].thumbnail_url
      console.log(foodImg)
      displayImg(foodImg);
    }})
}
getResultsList();

// Saving results into local storage for saved results
function saveResultsArr(){
  const saveResultsArr=localStorage.setItem("SavedFood",JSON.stringify([]));
}
// A function that displays name from data onto card
function displayName(food) {

    // Display name of food on card
    var nameOfFood = $('<h5>');
    titleOfFood.append(nameOfFood);
    nameOfFood.append(food);
}

// A function that displays description from data onto card
function displayDescription(descriptionOfFood) {
    // Truncating long strips of description to the first sentence
    const stringArr = descriptionOfFood.split('.');

    // Display description of food on card
    var description = $('<p>');
    foodDescription.append(description);
    description.append(stringArr[0] + "...");
}

// A Function that displays img of food from data onto card
function displayImg(foodImg) {
    // Display food on card
    console.log(foodImg);
    var img = $("<img>");
    img.attr('class', 'object-cover h-96 w-full rounded-t-lg imgResult');
    img.attr('src', foodImg);
    displayPic.append(img);
}

// Creating a see more Btn that assigns to SeeMore.html
seeMoreBtn.on('click', function () {
  // Empty Local Storage Array for SeeMore
    var recipeArr = []

    localStorage.setItem("SeeMore", JSON.stringify(recipeArr));
    // console.log('seemorebtn');
    location.assign("./SeeMore.html");
})

// Creating a home page btn that assigns to index.html
homeBtn.on('click', function () {
    console.log('Home Button')
    location.assign("../.././index.html");
})

// Creating an About Me btn that assigns to about.html
aboutBtn.on('click', function () {
    console.log('About Button')
    location.assign("./about.html");
})

// Creating a Contact btn that assigns to contact.html
contactBtn.on('click', function () {
    console.log('Contact Button')
    location.assign("./contact.html");
})

// Save for Later Results button that assigns to SaveForLater.html
saveLaterResultsBtn.on('click', function () {
  // Empty Local Storage Array of SavedResults
    var savedResultsArr = []
    // console.log('results');
    location.assign("./SaveForLater.html");
    savedResultsArr = localStorage.getItem("SavedFood");
    // Execute a function that displays saved results onto page
    // function displaySavedResults(savedResultsArr)
})


// Save for later button should save data into local storage
saveLaterBtn.on('click', function () {

    saveResultsArr();
    console.log(titleOfFood[0].innerText);
    saveLaterArr=JSON.parse(localStorage.getItem("SavedFood"));
    var foodInfo = {
        "name": titleOfFood[0].innerText,
        "description": foodDescription[0].innerText,
        "img": displayPic[0].innerHTML,
    };
    saveLaterArr.push(foodInfo);
    savedArr = localStorage.setItem("SavedFood", JSON.stringify(saveLaterArr));
})

