// Textarea
const textInput = document.getElementById("textBox");

// Buttons
const uppercaseBtn = document.getElementById("uppercase-btn");
const lowercaseBtn = document.getElementById("lowerBtn");
const capitalizeBtn = document.getElementById("capitalBtn");
const copyBtn = document.getElementById("copyBtn");

// Statistics
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");

function updateStatistics() {
    const text = textInput.value;
    charCount.textContent = text.length;
    const words = text.trim() === ""
        ? 0
        : text.trim().split(/\s+/).length;
    wordCount.textContent = words;
}

textInput.addEventListener("input", updateStatistics);

uppercaseBtn.addEventListener("click", () => {
    textInput.value = textInput.value.toUpperCase();
    updateStatistics();
});

lowercaseBtn.addEventListener("click", () => {
    textInput.value = textInput.value.toLowerCase();
    updateStatistics();
});

capitalizeBtn.addEventListener("click", () => {

    textInput.value = textInput.value
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    updateStatistics();

});

copyBtn.addEventListener("click", async () => {

    await navigator.clipboard.writeText(textInput.value);

    copyBtn.textContent = "Copied!";

    setTimeout(() => {

        copyBtn.textContent = "Copy Text";

    }, 1500);

});