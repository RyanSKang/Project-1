// defined variables
var saveButton = document.querySelector(".button")
var resultsContainer = document.querySelector("#selectedRecipe")
var descriptionResults = document.querySelector("#foodDescription")
var recipeResults = document.querySelector("#instructions")
var instructionList = document.querySelector("#instructions-list")
var listedSteps = document.querySelector("#recipe")
var mealPlan = document.querySelector("#recipe-steps")
var foodPic = document.querySelector("#recipePhoto")

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

var foodName = params.food;
let item = localStorage.getItem("SeeMore")


function showRecipe(data) {
    console.log(data)
    resultsContainer.textContent = data.results[0].name
    localStorage.setItem("item", data.results[0].name)
}

function showDescription(data) {
    descriptionResults.textContent = data.results[0].description
}

function getResults() {
    var response = { results: [JSON.parse(item)] }
    showRecipe(response)
    showResults(response)
    showDescription(response)
    showSteps(response)
    showPic(response)
}


// function getResults() {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'a38198cdf8msh2c9c01e82804028p17fafejsnb3ea1a91c07b',
//             'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//         }
//     };
//     fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//             showRecipe(response)
//             showResults(response)
//             showDescription(response)
//             showSteps(response)
//             showPic(response)
//         })
//         .catch(err => console.error(err));
// }
function showResults(data) {
    var ingredientStuff = data.results[0].sections[0].components
    for (let index = 0; index < ingredientStuff.length; index++) {
        var p = document.createElement("p")
        p.textContent = "- " + ingredientStuff[index].raw_text
        instructionList.append(p)
    }
}


function showSteps(data) {
    var differentSteps = data.results[0].instructions
    for (let index = 0; index < differentSteps.length; index++) {
        var p = document.createElement("p")
        p.textContent = (index + 1) + ". " + differentSteps[index].display_text
        mealPlan.append(p)
    }
}

// Home Button to return to home page

const homeBtn = document.getElementById("home-btn")
homeBtn.addEventListener("click", function () {
    window.location.assign("../.././index.html")
})

// Image function

function showPic(data) {
    foodPic.src = data.results[0].thumbnail_url
}


getResults()
