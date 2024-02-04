function changeBackgroundColor() {
    
    const randomColor = `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;

    document.body.style.backgroundColor = randomColor;
}

function getRandomValue() {
    return Math.floor(Math.random() * 256);
}

