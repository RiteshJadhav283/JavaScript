function randomColorMaker() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeColor() {
    const color = randomColorMaker();
    document.body.style.backgroundColor = color;
    document.getElementById("colorOutput").textContent = color;
}