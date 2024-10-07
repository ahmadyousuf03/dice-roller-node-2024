function rollDice() {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('die1').value = die1.toString().padStart(2, ' ');
    document.getElementById('die2').value = die2.toString().padStart(2, ' ');
}
