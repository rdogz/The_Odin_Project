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

board.gameboard[0][0] = "x";

function Game(params) {
    
}

function Player(params) {
    
}
