var saveButton = document.querySelector(".button")
var resultsContainer = document.querySelector("#selectedRecipe")
var descriptionResults = document.querySelector("#foodDescription")
var recipeResults = document.querySelector("#instructions")
var instructionList = document.querySelector("#instructions-list")
var listedSteps = document.querySelector("#recipe")
var mealPlan = document.querySelector("#recipe-steps")


function getRecipes() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2cbea6cb03mshf171fe520b8f6d2p1beedfjsn067d28eee338',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };

    fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', options)
        .then(response => response.json())
        .then(response => {
            showRecipe(response)
        })
        .catch(err => console.error(err));
}

saveButton.onclick = function () {
    getRecipes()
    getDescription()
    getResults()
    getSteps()

}

function showRecipe(data) {
    console.log(data)
    resultsContainer.textContent = data.results[0].display
}

function getDescription() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0e963f4346mshe75e58bd44d5740p145596jsnca9c024f5cd7',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };

    fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
        .then(response => response.json())
        .then(response => {
            showDescription(response)
        })
        .catch(err => console.error(err));


}

function showDescription(data) {
    console.log(data)
    descriptionResults.textContent = data.results[0].description
}


function getResults() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0e963f4346mshe75e58bd44d5740p145596jsnca9c024f5cd7',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };

    fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
        .then(response => response.json())
        .then(response => {
            showResults(response)
        })
        .catch(err => console.error(err));
}

function showResults(data) {
    console.log(data)
    for (let index = 0; index < data.results[0].instructions.length; index++) {
        var p = document.createElement("p")
        p.textContent = "- " + data.results[0].instructions[index].display_text
        instructionList.appendChild(ul)
    }
}

function getSteps(data) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2cbea6cb03mshf171fe520b8f6d2p1beedfjsn067d28eee338',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };

    fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
        .then(response => response.json())
        .then(response => {
            showSteps(response)
        })
        .catch(err => console.error(err));
}

function showSteps(data) {
    console.log(data)
    for (let index = 0; index < data.results[0].instructions.length; index++) {
        var p = document.createElement("p")
        p.textContent = "- " + data.results[0].instructions[index].display_text
        listedSteps.appendChild(p)
    }
}


//get title to show in "title os selected recipe"
//get description of food to display in "description of food box"
//figure our second API to display photos on my page
//get recipe to show in recipe box
//get instructions to post in box 5 (instructions)

