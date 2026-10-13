const button = document.getElementById("experiment-button");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    result.textContent = "The button worked!";
});

document.getElementById("my-name").innerHTML = "Hello JavaScript";