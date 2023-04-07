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
        instructionList.append(p)
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

    fetch('https://tasty.p.rapidapi.com/feeds/list?size=5&timezone=%2B0700&vegetarian=false&from=0', options)
        .then(response => response.json())
        .then(response => {
            showSteps(response)
        })
        .catch(err => console.error(err));
}

function showSteps(data) {
    var differentSteps = data.results[0].item.recipes[0].instructions
    console.log(differentSteps)
    for (let index = 0; index < differentSteps.length; index++) {
        var p = document.createElement("p")
        p.textContent = (index + 1) + ". " + differentSteps[index].display_text
        console.log(p)
        mealPlan.append(p)
    }
}