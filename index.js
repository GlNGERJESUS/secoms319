fetch("data.json")
    .then(response => response.json())
    .then(data => dataToHTML(data))

function dataToHTML(data) {
    let mainContainer = document.getElementById("bikeList");
    for (let i = 0; i < data.bikes.length; i++) {
        let condition = data.bikes[i].condition;
        let model = data.bikes[i].model;
        let description = data.bikes[i].description;
        let price = data.bikes[i].price;
        let imgPath = data.bikes[i].imgPath;
        let newCol = document.createElement("div");
        newCol.classList.add("col");
        let newCard = document.createElement("div");
        newCard.className = "card shadow-sm";
        let newImg = document.createElement("img");
        newImg.src = imgPath; newImg.alt = model;
        let newCbod = document.createElement("div");
        newCbod.className = "card-body";
        let otherText = document.createElement("h4")
        otherText.innerHTML = `$${price} - ${condition}`;
        let desc = document.createElement("p");
        desc.class = "card-text";
        desc.innerHTML = `${description}`;
        otherText.append(desc);
        newCbod.appendChild(otherText);
        newCard.appendChild(newImg);
        newCard.appendChild(newCbod);
        newCol.appendChild(newCard);
        mainContainer.appendChild(newCol);
    }
}

