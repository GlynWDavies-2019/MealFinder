// Get references to DOM elements

const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealsElement = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const singleMealElement = document.getElementById('single-meal');

// Functions

function searchMeal(event) {
    event.preventDefault();
    singleMealElement.innerHTML = '';
    const searchTerm = search.value;
    if(searchTerm.trim()) {
         fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                resultHeading.innerHTML = `<h2>Search results for '${searchTerm}':</h2>`;
                if(data.meals === null) {
                    resultHeading.innerHTML = `<p>There are no search results. Please try again.</p>`;
                }
            });
    } else {
       // Todo...
    }
}

// Event Listeners

submit.addEventListener('submit',searchMeal);