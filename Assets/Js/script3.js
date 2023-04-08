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
let item = localStorage.getItem("item")
//console.log("item", item)

// function to display Title of selected recipe (save for later button to generate data from API- just to see if it is correctly showing data)

// function getRecipes() {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '0e963f4346mshe75e58bd44d5740p145596jsnca9c024f5cd7',
//             'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//         }
//     };

//     fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=' + foodName, options)
//         .then(response => response.json())
//         .then(response => {
//             showRecipe(response)
//         })
//         .catch(err => console.error(err));
// }

// button to display data from API

// saveButton.onclick = function () {
//     getRecipes()
//     getResults()
//     getSteps()

// }

function showRecipe(data) {
    //console.log(data)
    resultsContainer.textContent = data.results[0].name
    localStorage.setItem("item", data.results[0].name)
}


// function to display decription of selected recipe on page

// function getDescription() {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '0e963f4346mshe75e58bd44d5740p145596jsnca9c024f5cd7',
//             'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//         }
//     };

//     fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
//         .then(response => response.json())
//         .then(response => {
//             showDescription(response)
//             showPic(response)
//         })
//         .catch(err => console.error(err));


// }

function showDescription(data) {
    //console.log(data)
    descriptionResults.textContent = data.results[0].description
}


function getResults() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3602e7d2c0msh7b77c709e71ee6fp121298jsnc07eb1430570',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };
    fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
        .then(response => response.json())
        .then(response => {
            //console.log("response", response)
            showRecipe(response)
            showResults(response)
            showDescription(response)
            showSteps(response)
            showPic(response)
        })
        .catch(err => console.error(err));
}
function showResults(data) {
    var ingredientStuff = data.results[0].sections[0].components
    for (let index = 0; index < ingredientStuff.length; index++) {
        var p = document.createElement("p")
        p.textContent = "- " + ingredientStuff[index].raw_text
        instructionList.append(p)
    }
}


// function to display Recipe in card on page

// function getSteps(data) {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '0e963f4346mshe75e58bd44d5740p145596jsnca9c024f5cd7',
//             'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//         }
//     };

//     fetch('https://tasty.p.rapidapi.com/feeds/list?size=5&timezone=%2B0700&vegetarian=false&from=0', options)
//         .then(response => response.json())
//         .then(response => {
//             showSteps(response)
//         })
//         .catch(err => console.error(err));
// }

function showSteps(data) {
    //console.log(data)
    var differentSteps = data.results[0].instructions
    //console.log(differentSteps)
    for (let index = 0; index < differentSteps.length; index++) {
        var p = document.createElement("p")
        p.textContent = (index + 1) + ". " + differentSteps[index].display_text
        //console.log(p)
        mealPlan.append(p)
    }
}

//Created goBackBtn so user can return to previous page

const goBackBtn = document.getElementById("go-back-btn")
goBackBtn.addEventListener("click", function () {
    location.assign("./ResultsPage.html")
})

const homeBtn = document.getElementById("home-btn")
homeBtn.addEventListener("click", function () {
    window.location.assign("../index.html")
})

// function getPic() {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '0e963f4346mshe75e58bd44d5740p145596jsnca9c024f5cd7',
//             'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//         }
//     };

//     fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
//         .then(response => response.json())
//         .then(response => {
//             showPic(response)
//         })
//         .catch(err => console.error(err));
// }

function showPic(data) {
    //console.log(data)
    foodPic.src = data.results[0].thumbnail_url
}


getResults()

//NEED TO FINISH

// Need to make page look better
// need photo to appear in box
// need to link results from previous page
//remove save for later button