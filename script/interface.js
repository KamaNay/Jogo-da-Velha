document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;
    let shield = document.getElementById("shield");
    let sword = document.getElementById("sword");

    if (handleMove(position)) {
        setTimeout(() => {
            if (playerTime == 0) {
                player = sword.innerHTML;
            } else {
                player = shield.innerHTML;
            }
            alert("O jogo Acabou - O vencedor foi o  " + player);
        }, 10)
    }

    if (isDraw()) {
        setTimeout(() => {
            alert("O jogo empatou");
        }, 10)
    }

    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class = '${symbol}'></div>`
}

function reset() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        board[position] = '';

        square.innerHTML = `<div class = ''></div>`
    })

    draw = false;
    gameOver = false;
    playerTime = 0;
}