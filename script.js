// index.ts
var toggleButton = document.getElementById("toggleButton");
var isResumeCreated = false;
toggleButton.addEventListener("click", function () {
    if (isResumeCreated) {
        toggleButton.innerText = "create resume";
        toggleButton.style.backgroundColor = "black";
    }
    else {
        toggleButton.innerText = "resume created!";
        toggleButton.style.backgroundColor = "green";
    }
    isResumeCreated = !isResumeCreated;
});
