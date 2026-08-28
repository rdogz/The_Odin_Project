const htmlBoard = document.querySelector(".board");
const startButton = document.querySelector("#start-game");

startButton.addEventListener("click", () => {
    htmlBoard.innerHTML = "";

    const p1 = document.querySelector('[name="player1"]').value;
    const p2 = document.querySelector('[name="player2"]').value;

    if (p1 === "" || p2 === "") {
        alert("You must choose the player names");
        return;
    }
    
    startButton.innerText = "Restart";
    gameRender(p1, p2);
})


const board = (() => {
    const gameboard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    const reset = function () {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j ++) {
                gameboard[i][j] = "";
            }
        }
    }

    return { gameboard, reset };
})();

function Player(name, mark, number) {
    return { name, mark, number };
}

function Game() {
    let currentPlayer;
    let prevPlayer;
    let gameTurn = 0;

    const state = {
        row: [0, 0, 0],
        col: [0, 0, 0],
        diag: [0, 0]
    }

    const choice = function(r, c) {
        if (board.gameboard[r][c] !== "") {
            return false;
        }

        board.gameboard[r][c] = currentPlayer.mark;

        // UPDATE GAME SCORE
        state.row[r] += currentPlayer.number;
        state.col[c] += currentPlayer.number;
        if (r === c) {
            state.diag[0] += currentPlayer.number;
        }
        if (r + c === 2) {
            state.diag[1] += currentPlayer.number;
        }
        gameTurn++;

        // Change currentPlayer and prevPlayer
        [currentPlayer, prevPlayer] = [prevPlayer, currentPlayer];

        return prevPlayer;
    }

    const checkWinner = function(p){
        for (let i = 0; i < 3; i++) {
            if (state.row[i] === (3 * p.number) || state.col[i] === (3 * p.number) ) {
                return p.number;
            }
        }
        for (let i = 0; i < 2; i++) {
            if (state.diag[i] === (p.number * 3)) {
                return p.number;
            }
        } 

        if (gameTurn > 8) {
            return "Draw";
        }
        return 0;
    }

    const gameStart = function(p1, p2) {
        currentPlayer = p1;
        prevPlayer = p2;
    };

        
    const reset = function() {
        board.reset();

        state.row = [0, 0, 0];
        state.col = [0, 0, 0];
        state.diag = [0, 0];

        gameTurn = 0;

        currentPlayer = undefined;
        prevPlayer = undefined;
    };

    return {
        gameStart,
        choice,
        checkWinner,
        reset
    };
}

const gameRender = function(p1Name, p2Name) {
    const game = Game();

    const player1 = Player(p1Name, "X", 1);
    const player2 = Player(p2Name, "O", -1);


    // Draw board
    for (let i = 0; i < 9; i++) {
        let div = document.createElement("div");
        
        div.classList.add("board-square");

        div.addEventListener("click", () => {
            const row = Math.floor(i / 3);
            const col = i % 3;

            const player = game.choice(row, col);

            if (!player) {
                return;
            }

            div.textContent = player.mark;

            result = game.checkWinner(player);

            if (result == "Draw") {
                game.reset();
                htmlBoard.innerHTML = "";
                htmlBoard.textContent = "It's a Draw!"
                startButton.innerText = "Play again!";

            } else if (result) {
                game.reset();
                htmlBoard.innerHTML = "";
                htmlBoard.textContent = `${player.name} wins!`
                startButton.innerText = "Play again!";
            }
            return;
        })
        htmlBoard.appendChild(div);
    }
    
    game.gameStart(player1, player2);


}

// TEMP STUFF FOR TESTING
/*const player1 = Player("Player 1", "X", 1);
const player2 = Player("Player 2", "O", -1);

const game = Game();

console.log(`${game.gameStart(player1, player2)} wins!`); */
// END OF TEMP STUFF
