const playButton = document.querySelector(".playButton");
const img = document.querySelector(".background");
const floor = document.querySelector(".floor");
const floorSize = floor.getBoundingClientRect();

playButton.addEventListener("click", () => {
    addItem("carrot", 10, "carrot/img/carrot.png");
    addItem("bug", 10, "carrot/img/bug.png");
});

function addItem(name, count, imgSrc) {
    const x1 = 0;
    const y1 = 0;
    const x2 = floorSize.width - 80;
    const y2 = floorSize.height - 80;

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
