let count = 0;

const countDisplay = document.getElementById("count");
const increaseBy1Btn = document.getElementById("increaseBy1Btn");
const increaseBy2Btn = document.getElementById("increaseBy2Btn");
const increaseBy5Btn = document.getElementById("increaseBy5Btn");
const increaseBy10Btn = document.getElementById("increaseBy10Btn");
const decreaseBy1Btn = document.getElementById("decreaseBy1Btn");
const decreaseBy2Btn = document.getElementById("decreaseBy2Btn");
const decreaseBy5Btn = document.getElementById("decreaseBy5Btn");
const decreaseBy10Btn = document.getElementById("decreaseBy10Btn");

increaseBy1Btn.addEventListener("click", function () {
    count += 1;
    countDisplay.textContent = count;
});

increaseBy2Btn.addEventListener("click", function () {
    count += 2;
    countDisplay.textContent = count;
});

increaseBy5Btn.addEventListener("click", function () {
    count += 5;
    countDisplay.textContent = count;
});

increaseBy10Btn.addEventListener("click", function () {
    count += 10;
    countDisplay.textContent = count;
});

decreaseBy1Btn.addEventListener("click", function () {
    count -= 1;
    countDisplay.textContent = count;
});

decreaseBy2Btn.addEventListener("click", function () {
    count -= 2;
    countDisplay.textContent = count;
});

decreaseBy5Btn.addEventListener("click", function () {
    count -= 5;
    countDisplay.textContent = count;
});

decreaseBy10Btn.addEventListener("click", function () {
    count -= 10;
    countDisplay.textContent = count;
});
const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function () {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});