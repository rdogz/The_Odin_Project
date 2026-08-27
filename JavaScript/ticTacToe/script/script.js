console.log("hello");

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

        return true;
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
        return 0;
    }

    const gameStart = function(player1, player2) {
        let validChoice = false;
        let gameResult = 0;
        currentPlayer = player1;
        prevPlayer = player2;

        while (gameResult === 0 && gameTurn < 9) {

            while (!validChoice) {
                console.log(`${currentPlayer.name}'s turn`);
                const r = Number(prompt("\tEnter row: ")); 
                const c = Number(prompt("\tEnter column: "));  
                console.log(r, c);

                validChoice = choice(r, c);
            }

            if (gameTurn >= 5) {
                gameResult = checkWinner(prevPlayer);
            }
        }

        if (gameResult === 0) {
            return "Draw";
        }

        return prevPlayer;
    }

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
        reset
    };
}

