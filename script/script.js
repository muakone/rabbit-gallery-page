let rabbits = [
    {
        name: "dutch",
        image: "a",
        price: "#12,000"
    },
    {
        name: "dwarf",
        image: "b",
        price: "#13,000"
    },
    {
        name: "new zealand(white)",
        image: "c",
        price: "#11,500"
    },
    {
        name: "new zealand(brown)",
        image: "d",
        price: "#15,000"
    },
    {
        name: "new zealand(red)",
        image: "e",
        price: "#19,000"
    },
    {
        name: "chinchila",
        image: "f",
        price: "#10,000"
    },
    {
        name: "angola",
        image: "g",
        price: "#12,000"
    },
    {
        name: "hyla",
        image: "h",
        price: "#9,000"
    },
    {
        name: "hyla max",
        image: "i",
        price: "#14,000"
    },
    {
        name: "flemish giant",
        image: "j",
        price: "#18,000"
    },
    {
        name: "america sabu",
        image: "k",
        price: "#16,000"
    },
    {
        name: "hyla coloured",
        image: "l",
        price: "#12,000"
    }

]
let RabbitGallery = document.getElementById('list');
let html = "";
rabbits.forEach(e => {
    html += `
    <div class="col">
              <div class="card h-100 border border-white shadow-sm mb-5 bg-body rounded">
                <img src="./images/${e.image}.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${e.name}</h5>
                  <p class="card-text fw-bold fs-4">${e.price}</p>
                </div>
              </div>
            </div>

    `
    RabbitGallery.innerHTML = html
})
