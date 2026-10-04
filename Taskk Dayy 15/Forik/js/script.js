let searchInput = document.querySelector(`#searchInput`);
let userSelect = document.querySelector(`#userSelect`);

(function () {
    const recipeList = ["carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber", "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin", "red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini", "radish", "sweet potato", "artichoke", "leek", "cabbage", "celery", "chili", "garlic", "basil", "coriander", "parsley", "dill", "rosemary", "oregano", "cinnamon", "saffron", "green bean", "bean", "chickpea", "lentil", "apple", "apricot", "avocado", "banana", "blackberry", "blackcurrant", "blueberry", "boysenberry", "cherry", "coconut", "fig", "grape", "grapefruit", "kiwifruit", "lemon", "lime", "lychee", "mandarin", "mango", "melon", "nectarine", "orange", "papaya", "passion fruit", "peach", "pear", "pineapple", "plum", "pomegranate", "quince", "raspberry", "strawberry", "watermelon", "salad", "pizza", "pasta", "popcorn", "lobster", "steak", "bbq", "pudding", "hamburger", "pie", "cake", "sausage", "tacos", "kebab", "poutine", "seafood", "chips", "fries", "masala", "paella", "som tam", "chicken", "toast", "marzipan", "tofu", "ketchup", "hummus", "chili", "maple syrup", "parma ham", "fajitas", "champ", "lasagna", "poke", "chocolate", "croissant", "arepas", "bunny chow", "pierogi", "donuts", "rendang", "sushi", "ice cream", "duck", "curry", "beef", "goat", "lamb", "turkey", "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs"];
    let selectOptions = ``;
    for (const option of recipeList) {
        selectOptions += `
        <option value="${option}">${option}</option>
        `
    }
    document.querySelector(`#userSelect`).innerHTML = selectOptions;
})();

async function getRecipes(searchTerm = `Pizza`) {
    try {
        let response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`);
        let responseData = await response.json();
        displayContent(responseData.data.recipes);
    } catch (error) {
        console.log(`An Error: ${error}`);
    }
}

getRecipes();
function displayContent(recipes) {
    let contentContainer = ``;
    for (const recipe of recipes) {
        let { title, image_url, publisher } = recipe;
        contentContainer += `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card">
                    <img class="card-img-top" src="${image_url}" alt="${title}" />
                    <div class="card-body">
                        <h4 class="card-title">${title}</h4>
                        <p class="card-text">${publisher}</p>
                    </div>
                </div>
            </div>
        `
    }
    document.querySelector(`#datarow`).innerHTML = contentContainer;
}
document.querySelector(`#searchInput`).addEventListener(`input`, function (e) {
    getRecipes(e.target.value.toLowerCase());
});
document.querySelector(`#searchInput`).addEventListener(`blur`, function (e) {
    if (e.target.value === ``) {
        getRecipes(`Pizza`);
    }
});
document.querySelector(`#userSelect`).addEventListener(`change`, function (e) {
    getRecipes(e.target.value.toLowerCase());
});