// index.ts
const toggleButton = document.getElementById("toggleButton") as HTMLButtonElement;

let isResumeCreated = false;

toggleButton.addEventListener("click", () => {
    if (isResumeCreated) {
        toggleButton.innerText = "create resume";
        toggleButton.style.backgroundColor = "black";
    } else {
        toggleButton.innerText = "resume created!";
        toggleButton.style.backgroundColor = "green";
    }
    isResumeCreated = !isResumeCreated;
});