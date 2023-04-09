// Linking API
var Key='a38198cdf8msh2c9c01e82804028p17fafejsnb3ea1a91c07b'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': Key,
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
	}
};

var ListRecipeURL= "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken"
var baseURL="https://tasty.p.rapidapi.com/recipes/list?"
// Defining Variables
let ingredientCheckbox = document.querySelectorAll("input_checkbox_class");
let ingredientsList = $('.selectedIngredients');
let generateBtn = document.getElementById("generateBtn");
var checkedBox= $('.checkedBox');

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

// Fetching API 
function getAPI(){

  fetch(ListRecipeURL,options)
  .then(function(response){
    console.log(response);
    return response.json();
  })
  .then(function(data){
    console.log(data);
  })
}
getAPI();

// Function to save checkbox values into local storage
console.log(checkedBox)
function saveIngredientsToLocalStorage(){
  for(var i=0; i<checkedBox.length;i++)
  var ingredientsArr=[];
  var ingredientsCheckList={
      "name": checkedBox[0].defaultValue,
    }
    ingredientsArr.push(ingredientsCheckList);
    savedIngredientsArr=localStorage.setItem("Ingredients", JSON.stringify(ingredientsCheckList));
    displayIngredientsLi();
  }

function displayIngredientsLi(){
ingredientsList.empty();
var savedIngredientsArr=localStorage.getItem("Ingredients");
ingredientsHist=JSON.parse(savedIngredientsArr)
console.log(ingredientsHist)

ingredientsList.append('<li>' + ingredientsHist.name + "</li>");
}

var savedIngredientsArr=[];

checkedBox.on('click', saveIngredientsToLocalStorage);
  
