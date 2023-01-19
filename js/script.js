const loadData = data => {
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`;
    fetch(url)
        .then(res => res.json())
        .then(json => getFood(json.meals))
}


const getFood = food => {
    // console.log(food[0])
    const getContainer = document.getElementById('food-container')
    getContainer.innerHTML = ``;
    food.forEach(meals => {
        // console.log(meals)
        const createDiv = document.createElement('div')
        createDiv.classList.add('col')
        createDiv.innerHTML = `
        <div onclick = "insideCard(${meals.idMeal})" class="card">
            <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meals.strMeal}</h5>
                <p class="card-text">${meals.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        getContainer.appendChild(createDiv);
    });
}

const searchFood = () => {
    const getInput = document.getElementById("search-field")
    const getValue = getInput.value;
    getInput.value = '';
    loadData(getValue)
}


const insideCard = getId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${getId}`;
    fetch(url)
        .then(res => res.json())
        .then(id => cardInformation(id.meals[0]))
    // console.log(url)
}

const cardInformation = info => {
    const getElement = document.getElementById('getCard')
    getElement.innerHTML = ``;
    const newDiv = document.createElement('div')
    newDiv.classList.add('card')
    newDiv.innerHTML = `
    <img src="${info.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${info.strMeal}</h5>
            <p class="card-text">${info.strInstructions.slice(0, 200)}</p>
        </div>
    `
    getElement.appendChild(newDiv)
    console.log(info)
}
