function getRandomSymbol() {
    const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇', '🍓'];
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spin() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const message = document.getElementById('message');

    const symbol1 = getRandomSymbol();
    const symbol2 = getRandomSymbol();
    const symbol3 = getRandomSymbol();

    reel1.textContent = symbol1;
    reel2.textContent = symbol2;
    reel3.textContent = symbol3;

    if (symbol1 === symbol2 && symbol2 === symbol3) {
        message.textContent = 'Wygrana!';
    } else {
        message.textContent = 'Spróbuj ponownie.';
    }
}
