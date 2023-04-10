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

// Defining Variables
let ingredientCheckbox = document.querySelectorAll("input_checkbox_class");
let ingredientsList = $('.selectedIngredients');
let generateBtn = $("#generateBtn");


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
    
    
    
    // Check boxes defined
    let checkBoxProtein=$('.proteinCheck');
    let checkBoxDairy=$('.dairyCheck');
    let checkBoxVeggies=$('.veggiesCheck');
    let checkBoxFruit=$('.fruitCheck');
    let checkBoxSpices=$('.spicesCheck');
    
    // Function to save checkbox values into local storage
    function saveIngredientsToLocalStorage(){
      
      const proteinCheckBox=$('.proteinCheck:checked').map(function() { return { 'name': $(this).val()} }).get();
      localStorage.setItem("Protein", JSON.stringify(proteinCheckBox));
      
      const dairyCheckBox=$('.dairyCheck:checked').map(function() { return { 'name': $(this).val()} }).get();
      localStorage.setItem("Dairy", JSON.stringify(dairyCheckBox));
      
      const veggiesCheckBox=$('.veggiesCheck:checked').map(function() { return { 'name': $(this).val()} }).get();
      localStorage.setItem("Vegetables", JSON.stringify(veggiesCheckBox));
      
      const fruitCheckBox=$('.fruitCheck:checked').map(function() { return { 'name': $(this).val()} }).get();
      localStorage.setItem("Fruit", JSON.stringify(fruitCheckBox));
      
      const spicesCheckBox=$('.spicesCheck:checked').map(function() { return { 'name': $(this).val()} }).get();
      localStorage.setItem("Spices", JSON.stringify(spicesCheckBox));
      
    }
    
    // Event Listener
    checkBoxProtein.on('click', saveIngredientsToLocalStorage);
    checkBoxDairy.on('click', saveIngredientsToLocalStorage);
    checkBoxVeggies.on('click', saveIngredientsToLocalStorage);
    checkBoxFruit.on('click', saveIngredientsToLocalStorage);
    checkBoxSpices.on('click', saveIngredientsToLocalStorage);
    
    
    // Getting Base URL for API with
    function getStarterURL(filteredIngredients){
      var newURL= baseURL
      newURL += filteredIngredients;
      return newURL
      console.log(newURL);
    }
    
    // Adding Ingredients parameter to Base URL for API Fetch
    function ingredientStringParam(newProtein){
      var newURL=getStarterURL(newProtein);
      return newURL;
    }
    
    // Generate a result list data for Results Page
    generateBtn.on('click', function(){
      const newProtein= JSON.parse(localStorage.getItem("Protein"))
      console.log(newProtein[0].name);
      const searchURL=ingredientStringParam(newProtein[0].name)
      
      // Fetching API 
         fetch(searchURL,options)
        .then(function(response){
          console.log(response);
          return response.json();
        })
        .then(function(data){
          console.log(data);
        })
      });