const playButton = document.querySelector(".playButton");
const stopButton = document.querySelector(".stopButton");
const img = document.querySelector(".background");
const floor = document.querySelector(".floor");
const counter = document.querySelector(".counter");
const timer = document.querySelector(".timer");
const mainHeader = document.querySelector(".header");
const carrot = document.querySelector(".carrot");
const floorSize = floor.getBoundingClientRect();

let carrotCount = 9;
const bugCount = 9;

playButton.addEventListener("click", () => {
    addItem("carrot", carrotCount, "carrot/img/carrot.png");
    addItem("bug", bugCount, "carrot/img/bug.png");
    timer.style.visibility = "visible";
    counter.style.visibility = "visible";
    playButton.classList.toggle("off");
    stopButton.classList.toggle("off");
});

stopButton.addEventListener("click", () => {
    playButton.classList.toggle("off");
    stopButton.classList.toggle("off");
    timer.style.visibility = "hidden";
    counter.style.visibility = "hidden";
    floor.innerHTML = "";
});

/* item 생성함수 */

function addItem(name, count, imgSrc) {
    counter.innerText = carrotCount;

    const x1 = 0;
    const y1 = 0;
    const x2 = floorSize.width - 80;
    const y2 = floorSize.height - 100;

    for (let i = 0; i < count; i++) {
        const itemImg = document.createElement("img");
        itemImg.setAttribute("class", name);
        itemImg.setAttribute("src", imgSrc);
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        itemImg.style.left = `${x}px`;
        itemImg.style.top = `${y}px`;
        floor.appendChild(itemImg);
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

floor.addEventListener("click", (event) => {
    if (event.target.className === "carrot") {
        event.target.style.visibility = "hidden";
        carrotCount--;
    }

    if (event.target.className === "bug") {
        console.log("hello");
        alert("실패");
    }
});
