// Link tastyAPI to javascript
var Key='2cbea6cb03mshf171fe520b8f6d2p1beedfjsn067d28eee338'
const options = {
	method: 'GET',
	headers: {'X-RapidAPI-Key':Key, 
              'X-RapidAPI-Host': 'tasty.p.rapidapi.com'}
};
var getRecipeListURL='https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';

// Defining Variables

// Main div holding all divs
    var mainCard=$('.card');
// Main results info Card residing in Main Div
    var main=$('.mainResultsInfo');
// Title of result (food) on Div
    var titleOfFood=$('.resultsTitle');
// Div holding image/description/buttons
    var hero=$('.hero');
// div holdimg image but outside of layer div
    var resultsImg=$('.resultsImg');
// Div holding description and buttons on a hover affect
    var layer=$('.layer');
// Div within layer holding food description
    var foodDescription=$('.foodDescription');
// See More Button
    var seeMoreBtn=$('.seeMoreBtn');
// Save For Later Button
    var saveLaterBtn=$('.saveLater');
// Save for later Results
    var saveLaterResultsBtn=$('.saveLaterResults');
// Empty Local Storage Array of SavedResults
    var savedResultsArr=[]

// A function that retrieves data from API
function getName(){

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

    var foodImg=data.results[0].thumbnail_url
    displayImg(foodImg);

})
}
getName();

// A function that displays name from data onto card
function displayName(food){
    // Display name of food on card
    var nameOfFood=$('<h3>');
    titleOfFood.append(nameOfFood);
    nameOfFood.append(food);
}

// A function that displays description from data onto card
function displayDescription(descriptionOfFood){
    // Truncating long strips of description to the first sentence
    const stringArr=descriptionOfFood.split('!');
   
    // Display description of food on card
    var description=$('<p>');
    foodDescription.append(description);
    description.append(stringArr[0]+ "...");
}

// A Function that displays img of food from data onto card
function displayImg(foodImg){
    console.log(foodImg);
    // Display food on card
    var img=$("<img>");
    img.attr('src',foodImg)
    resultsImg.append(img);
}

// Creating a see more Btn that assigns to index3.html
seeMoreBtn.on('click',function(){
    // console.log('seemorebtn');
    location.assign("./index3.html");
})

// Save for later button should save data into local storage
saveLaterBtn.on('click',function(){
    // console.log('save later button');
    var savedArr=[];
    console.log(titleOfFood[0].innerHTML);
    var foodInfo={
        "name":titleOfFood[0].innerHTML,
        "description": foodDescription[0].innerHTML,
        "img": resultsImg[0].innerHTML,
    };
    console.log(foodInfo);
    savedResultsArr.push(foodInfo);
    savedArr=localStorage.setItem("SavedFood",JSON.stringify(foodInfo));
})

saveLaterResultsBtn.on('click', function(){
    // console.log('results');
    location.assign("../Additional HTML/help.html");
    savedResultsArr=localStorage.getItem("SavedFood");
    // Execute a function that displays saved results onto page
    function displaySavedResults(savedResultsArr);
})

function displaySavedResults({
    
})