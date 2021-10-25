const inputNode = document.querySelector("#name-input");
const titleNode = document.querySelector("#name-output");

inputNode.addEventListener("input", (event) => {
    if (event.currentTarget.value === "") {
        titleNode.textContent = "Anonymous";
    } else {
        titleNode.textContent = event.currentTarget.value;
    }
});



 