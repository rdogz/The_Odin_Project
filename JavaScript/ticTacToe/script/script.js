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

function Player(argMark, argPlayerNum) {
    const mark: argMark;
    const number: argPlayerNum;
}

function Game(params) {
    const state = {
        row: [0, 0, 0],
        col: [0, 0, 0],
        diag: [0, 0]
    }

    const choice = function (r, c) {
        if (board.gameboard[r][c] == "") {
            board.gameboard[r][c] = player.mark;
            state.row[r] += player.number;
            state.col[c] += player.number;
            nextTurn(); // TODO
        }
    }
}

