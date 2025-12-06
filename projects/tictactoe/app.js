let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#resetBtn")

let declareTxt = document.querySelector(".declareTxt")

let patternO = [];
let patternX = [];

let turnO = true;

const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        let sym = symbol(turnO);
        box.innerText = sym;
        updatePattern(sym, index);
        
        checkDeclare(checkWin());
        turnO = !turnO;
        box.disabled = true;
    })
});

function symbol(turn) {
    if (turn) {
        return "O";
    } else {
        return "X";
    }
}

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => reset(box))
    declareTxt.innerText = ``;
})

function reset(box) {
    turnO = true;
    box.innerText = "";
    box.disabled = false;
}

function updatePattern(symbol, index) {
    if (symbol == "O") {
        patternO.push(index);
    }
    else {
        patternX.push(index);
    }
}

function checkWin() {
    if (patternX.length >= 3) {
        if (checkPattern(patternX)) {
            return "X";
        };
    }
    if (patternO.length >= 3) {
        if (checkPattern(patternO)) {
            console.log("O won the game");
            return "O";
        };
    }
}



function checkPattern(pattern) {
    let count = 0;
    let found = false;
    winningPatterns.forEach(winpattern => {
        count = 0;
        winpattern.forEach(winnum => {
            pattern.forEach(unit => {

                if (unit == winnum) {
                    count++;
                }

            })
        })
        if (count == 3) {
            found = true;
        };
    })
    return found;
    // pattern.forEach(unit => {
    //     if(unit== pattern)
    //         return true;
    // });
}

function checkDeclare(winner){
    if (checkWin()) {
        declare();

        (() => {
            boxes.forEach((box) => {
                box.disabled= true;
            })
        })();

        declareTxt.innerText = `${winner} won the game.`;
    }
}

function declare(){

}