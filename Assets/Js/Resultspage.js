// Link tastyAPI to javascript
var Key = 'a38198cdf8msh2c9c01e82804028p17fafejsnb3ea1a91c07b'
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': Key,
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};
var getRecipeListURL = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';

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
// Empty Local Storage Array of SavedResults
var savedResultsArr = []

var Recipe = null

// A function that retrieves data from API
function getName() {

    // fetch API
    fetch(getRecipeListURL, options)
        .then(function (response) {
            console.log(response);
            return response.json();
        })

        .then(function (data) {
            console.log(data);

            Recipe = data.results[0]

            var food = data.results[0].name;
            displayName(food);

            var descriptionOfFood = data.results[0].description;
            displayDescription(descriptionOfFood);

            var foodImg = data.results[0].thumbnail_url
            displayImg(foodImg);

        })
}
getName();

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
    const stringArr = descriptionOfFood.split('!');

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
    localStorage.setItem("SeeMore", JSON.stringify(Recipe));
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
    // console.log('results');
    location.assign("./SaveForLater.html");
    savedResultsArr = localStorage.getItem("SavedFood");
    // Execute a function that displays saved results onto page
    // function displaySavedResults(savedResultsArr)
})


// Save for later button should save data into local storage
saveLaterBtn.on('click', function () {
    // console.log('save later button');
    var savedArr = [];
    console.log(titleOfFood[0].innerText);
    var foodInfo = {
        "name": titleOfFood[0].innerText,
        "description": foodDescription[0].innerText,
        "img": displayPic[0].innerHTML,
        // "ingredient":
        // "instructions":
    };
    console.log(foodInfo);
    savedResultsArr.push(foodInfo);
    savedArr = localStorage.setItem("SavedFood", JSON.stringify(foodInfo));
})

