// Load data from the JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const cardContainer = document.getElementById('card-container');

        // Loop through the data and create a card for each item
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');

            // Assuming the JSON has fields: 'title', 'description', 'image'
            card.innerHTML = `
                <img src="${item.image}">
                <h3>${item.cropname}</h3>
                <h2>${item.croptype}<h2>
                <h3>${item.category}</h3>
                <p>${item.soil}</p>
                <p>${item.season}</p>
                <p>${item.water}</p>
            `;

            // Append the card to the container
            cardContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error loading JSON:", error);
    });
