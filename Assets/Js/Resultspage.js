// link tastyAPI to javascript
var Key='2cbea6cb03mshf171fe520b8f6d2p1beedfjsn067d28eee338'
const options = {
	method: 'GET',
	headers: {'X-RapidAPI-Key':Key, 
              'X-RapidAPI-Host': 'tasty.p.rapidapi.com'}
};

// Defining Variables
var main=$('.mainResultsInfo');
var imgResults=$('.resultsImg');
var seeMore=$('.seeMore');
var saveLater=$('.saveLater');
var mainCard=$('.card');


// A function that retrieves data from API
function getName(){
var getRecipeListURL='https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';

// fetch API
fetch(getRecipeListURL, options)
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(data){
    console.log(data);
    
    var food=data.results[0].name;
    displayName(food);

    var descriptionOfFood=data.results[0].description;
    displayDescription(descriptionOfFood);

})
}
getName();

// A function that displays name from data onto card
function displayName(food){
    // Display name of food on card
    var nameOfFood=$('<div>');
    mainCard.append(nameOfFood);
    nameOfFood.append('<h3>' + food + '</h3>');
}

function displayDescription(descriptionOfFood){
    // Display description of food on card
    var description=$('<div>');
    mainCard.append(description);
    description.append('<p>' + descriptionOfFood + '</p>');
    console.log(descriptionOfFood);
    // console.log(description);

}


// var imgDisplay=$('<div>');
// imgDisplay.attr('class', 'resultsImg');
// imgDisplay.append(main);
// // console.log(imgDisplay);


// var moreInfoPage=$('<div>');
// moreInfoPage.append(main)
// // console.log(moreInfoPage);