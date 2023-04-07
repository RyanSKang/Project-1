// const $triggerE1: HTMLElement = document.getElementById('vue-checkbox-poultry');
// const $targetE1: HTMLElement = document.querySelector('selected-ingredients1');



// const Tooltip = new Tooltip(
// $targetE1, $triggerE1, options
// );

// const options = {
//     triggerType: 'click',
//     onShow: () => {
//         console.log('its working?');
//     }
// };

// const tooltip: TooltipInterface = new Tooltip($targetEl, $triggerEl, options);
// tooltip.show();



// const carousel = new Carousel(items, options);

// const catBtn = document.querySelector('.categorybtn');
// const submitBtn = document.querySelector('.submitbtn');
// const categoryResults = document.querySelector('.categoryContainer');

// let categoryItems = [
//     {seasoning: [Salt, AllSpice, Garlic],
//     protein: [chicken, beef, pork],
//     carbs: [bread, rice, beans],
//     veggies: [carrots, onion, potato]}
// ];

// function displayCategories(categoryItems) {
//     let itemList = document.getElementById('resultcontainer');

//     itemList.textContent = categoryItems.seasoning[0];
    
// }


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