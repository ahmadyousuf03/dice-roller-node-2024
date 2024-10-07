function rollDice() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dice1").value = dice1;
    document.getElementById("dice2").value = dice2;
}
