// Select modal elements
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");
const recipeTitle = document.getElementById("recipe-title");
const recipeContent = document.getElementById("recipe-content");

// Attach click event to each food item
document.querySelectorAll(".food-item").forEach(item => {
    item.addEventListener("click", () => {
        // Get data from the food item
        const recipe = item.getAttribute("data-recipe");
        const foodName = item.querySelector("h3").innerText;

        // Populate modal content
        recipeTitle.textContent = foodName;
        recipeContent.textContent = recipe;

        // Show the modal
        modal.style.display = "flex";
    });
});

// Close modal on clicking the close button
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal on clicking outside of it
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
