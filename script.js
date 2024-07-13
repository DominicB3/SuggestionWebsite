// Declare your arrays here
let genres = ["Action", "Turn-Based", "Horror", "Open-World", "Fighting", "Rhythm", "Visual Novel", "Stealth", "Souls-like", "Roguelite", "Boomershooter", "Platformer", "RPGs"];

// Get HTML elements
let genreInput = document.getElementById("genreInput");
let submitButton = document.querySelector("button");
let contentDiv = document.querySelector(".content");

// Event listener for submit button
submitButton.addEventListener("click", function() {
    let genre = genreInput.value.trim();
    contentDiv.innerHTML = "";  // Clear previous content
    
    if (genres.includes(genre)) {
        contentDiv.innerHTML = `<p>You selected: ${genre}</p>`;
        displayImages(genre);
    } else {
        contentDiv.innerHTML = `<p>Invalid genre. Please select a valid genre from the list.</p>`;
    }
});

function displayImages(genre) {
    let imgDir = `images/${genre.replace(/\s/g, '')}/`;
    let images = [];
    
    if (genre === "Souls-like") {
        // Add images for Beginner and Challenging Souls-like games
        contentDiv.innerHTML += `<h2>Beginner</h2>`;
        images.push(...getImages(`${imgDir}Beginner/`, 3));
        images.slice(0, 3).forEach(img => contentDiv.appendChild(img));
        
        contentDiv.innerHTML += `<h2>Challenging</h2>`;
        images.push(...getImages(`${imgDir}Challenging/`, 3));
        images.slice(3).forEach(img => contentDiv.appendChild(img));
    } else {
        // Add 3 images for the selected genre
        images = getImages(imgDir, 3);
        images.forEach(img => contentDiv.appendChild(img));
    }
}

function getImages(directory, count) {
    let imgs = [];
    for (let i = 1; i <= count; i++) {
        let img = document.createElement("img");
        img.src = `${directory}image${i}.jpg`;
        img.alt = `image${i}`;
        img.classList.add("genre-image");
        imgs.push(img);
    }
    return imgs;
}
