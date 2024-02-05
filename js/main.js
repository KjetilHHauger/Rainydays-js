const content = document.getElementById("content");

let apiData = [];

fetch("https://api.noroff.dev/api/v1/rainy-days")
.then((response) => response.json())
.catch(() => renderError())
.then((dataResult) => {
    apiData = dataResult;
    for (const data of apiData) {
        displayData(data)
    }
});


function displayData(data) {
    content.innerHTML += `
        <div class="card">
            <img src="${data.image}" alt="Image of ${data.title}">
            <h2 class="title">${data.title}</h2>
            <p class="price">${data.price}</p>
            <h3 class="discounted">${data.discountedPrice}</h3>
            <p class="sizes">${data.sizes}</p>
            <button class="addToCart">Add to cart</Button>
        </div>
    `
}

function renderError() {
    const error = document.getElementById("content")
    error.innerHTML = "ERROR"
}