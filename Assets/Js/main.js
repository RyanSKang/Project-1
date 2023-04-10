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
  
