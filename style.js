const boxes = document.querySelectorAll(".box");
const reset = document.querySelector("#reset");
const playAgain = document.querySelector("#playAgain");
const playAgain1 = document.querySelector("#playAgain1");
const msg = document.querySelector("#msg");
const coverImg = document.querySelector(".cover-img");
const tieCoverImg = document.querySelector(".tieCover-img");
const h3ShowTurn = document.querySelector("h3");

let turnO = true; //playerO , player X
h3ShowTurn.innerHTML = "Turn : Player 1";

const winPatterns = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"],
];

let matchTie = true;
let checkTie = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O";
            box.style.backgroundColor = "var(--oBackgroundColor)";
            turnO = false;
        } else {
            box.innerHTML = "X";
            box.style.backgroundColor = "var(--xBackgroundColor)";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();

        let turn = turnO ? "Turn : Player 1" : "Turn : Player 2";
        h3ShowTurn.innerHTML = turn;

        if (box.disabled === true) {
            checkTie += 1;
            console.log(checkTie);
            console.log(matchTie);
            if (checkTie == 9) {
                console.log("pawan", matchTie);
                ShowMatchTie();
            }
        }
    });
});
const checkWinner = () => {
    for (const pattern of winPatterns) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if (posVal1 === posVal2 && posVal2 === posVal3) {
                console.log("winner");
                showWinner(posVal1);
                disabledButton();
                matchTie = false;
            }
        }
    }
};
const showWinner = (winner) => {
    coverImg.classList.remove("hide");
    if (winner == "O") {
        msg.innerHTML = `Player 1 (${winner}) Winner `;
    } else {
        msg.innerHTML = ` Player 2 (${winner}) Winner `;
    }
};
const ShowMatchTie = () => {
    tieCoverImg.classList.remove("hide");
};

let disabledButton = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
};

const enablebtn = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
        box.style.backgroundColor = "var(--boxBackground)";
        turnO = true;
        h3ShowTurn.innerHTML = "Turn : Player 1";
        checkTie = 0;
    }
};
reset.addEventListener("click", () => {
    enablebtn();
});
playAgain.addEventListener("click", () => {
    coverImg.classList.add("hide");

    enablebtn();
    console.log("wwwwww");
});
playAgain1.addEventListener("click", () => {
    tieCoverImg.classList.add("hide");
    enablebtn();
    console.log("wwwwww");
});
