const catBtn = document.querySelector('.categorybtn');
const submitBtn = document.querySelector('.submitbtn');
const categoryResults = document.querySelector('.categoryContainer');


let categoryItems = [
    {seasoning: [Thyme, AllSpice, Garlic],
    protein: [chicken, beef, pork],
    carbs: [bread, rice, beans],
    veggies: [carrots, onion, potato]}
]

function displayCategories(categoryItems) {
    let itemList = document.getElementById('resultcontainer');

    itemList.textContent = categoryItems.seasoning;
    
}


// function getRecipes() {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '2cbea6cb03mshf171fe520b8f6d2p1beedfjsn067d28eee338',
//             'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//         }
//     };

//     fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
//     }
// getRecipes();



// catBtn.addEventListener('click', getRecipes);