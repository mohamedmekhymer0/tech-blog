
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    let value = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".blog-card");

    cards.forEach(card => {

        let title = card.querySelector(".card-title")
        .textContent
        .toLowerCase();

        if(title.includes(value)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    });
});

const buttons = document.querySelectorAll(".read-more");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Full article page can be added here.");
    });

});