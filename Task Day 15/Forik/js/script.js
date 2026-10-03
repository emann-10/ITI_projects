const searchInput = document.querySelector(`#searchinput`);
const userSelect = document.querySelector(`#userselect`);
const dataRow = document.querySelector(`#dataRow`);
const recipeList = ["carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber", "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin", "red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini", "radish", "sweet potato", "artichoke", "leek", "cabbage", "celery", "chili", "garlic", "basil", "coriander", "parsley", "dill", "rosemary", "oregano", "cinnamon", "saffron", "green bean", "bean", "chickpea", "lentil", "apple", "apricot", "avocado", "banana", "blackberry", "blackcurrant", "blueberry", "boysenberry", "cherry", "coconut", "fig", "grape", "grapefruit", "kiwifruit", "lemon", "lime", "lychee", "mandarin", "mango", "melon", "nectarine", "orange", "papaya", "passion fruit", "peach", "pear", "pineapple", "plum", "pomegranate", "quince", "raspberry", "strawberry", "watermelon", "salad", "pizza", "pasta", "popcorn", "lobster", "steak", "bbq", "pudding", "hamburger", "pie", "cake", "sausage", "tacos", "kebab", "poutine", "seafood", "chips", "fries", "masala", "paella", "som tam", "chicken", "toast", "marzipan", "tofu", "ketchup", "hummus", "maple syrup", "parma ham", "fajitas", "champ", "lasagna", "poke", "chocolate", "croissant", "arepas", "bunny chow", "pierogi", "donuts", "rendang", "sushi", "ice cream", "duck", "curry", "beef", "goat", "lamb", "turkey", "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs"];
function fillSelect() {
    let options = ``;
    for (const item of recipeList) {
        options += `<option value="${item}">${item}</option>`;
    }
    userSelect.innerHTML = options;
}
fillSelect();

// جلب الوصفات
async function getRecipes(searchTerm = `pizza`) {
    try {
        let response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`);
        let responseData = await response.json();
        displayContent(responseData.data.recipes);
    } catch (error) {
        console.log(`An Error: ${error}`);
    }
}
getRecipes();

// عرض الكروت
function displayContent(recipes) {
    let contentContainer = ``;
    for (const recipe of recipes) {
        let { title, image_url, publisher } = recipe;
        contentContainer += `
            <div class="col-md-3 col-sm-6 my-3">
                <div class="card h-100">
                    <img class="card-img-top " src="${image_url}" alt="${title}" />
                    <div class="card-body">
                        <h4 class="card-title ">${title}</h4>
                        <p class="card-text">${publisher}</p>
                    </div>
                </div>
            </div>
        `;
    }
    dataRow.innerHTML = contentContainer;
}

// البحث
searchInput.addEventListener(`input`, function (e) {
    const value = e.target.value.trim().toLowerCase();
    getRecipes(value === `` ? `pizza` : value);
});

// الاختيار من القائمة
userSelect.addEventListener(`change`, function (e) {
    getRecipes(e.target.value.toLowerCase());
});