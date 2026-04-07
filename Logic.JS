let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");
let box5 = document.querySelector("#box5");
let box6 = document.querySelector("#box6");
let box7 = document.querySelector("#box7");
let box8 = document.querySelector("#box8");
let box9 = document.querySelector("#box9");

let body = document.querySelector("body");
let reset = document.querySelector("#reset");
let p = document.createElement("p");
let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

let player1 = "X";
let player2 = "O";
let currentPlayer = player1;
let winner = false;
let count = 0;

reset.addEventListener("click", () => {
    for (let box of boxes) {
        box.textContent = "";
    }
    winner = false;
    currentPlayer = player1;
    count = 0;
    p.textContent = "";
})

box1.addEventListener("click", () => {
    click(box1);
});

box2.addEventListener("click", () => {
    click(box2);
});

box3.addEventListener("click", () => {
    click(box3);
});

box4.addEventListener("click", () => {
    click(box4);
});

box5.addEventListener("click", () => {
    click(box5);
});

box6.addEventListener("click", () => {
    click(box6);
});

box7.addEventListener("click", () => {
    click(box7);
});

box8.addEventListener("click", () => {
    click(box8);
});

box9.addEventListener("click", () => {
    click(box9);
});

const click = (box) => {
    if (winner == false) {
        if (box.textContent === "") {
            box.textContent = currentPlayer;
            checkWin(currentPlayer);
            if (currentPlayer === player1) {
                currentPlayer = player2;
            } else {
                currentPlayer = player1;
            }
        }
    }
}

const checkWin = (currentPlayer) => {
    if (box1.textContent === box2.textContent && box2.textContent === box3.textContent && box3.textContent != "") {
        console.log("Winner is : ", currentPlayer);
        winner = true;
    } else if (box4.textContent === box5.textContent && box5.textContent === box6.textContent && box6.textContent != "") {
        console.log("Winner is : ", currentPlayer);
        winner = true;
    } else if (box7.textContent === box8.textContent && box8.textContent === box9.textContent && box9.textContent != "") {
        console.log("Winner is : ", currentPlayer);
        winner = true;
    } else if (box1.textContent === box4.textContent && box4.textContent === box7.textContent && box7.textContent != "") {
        console.log("Winner is : ", currentPlayer);
        winner = true;
    } else if (box2.textContent === box5.textContent && box5.textContent === box8.textContent && box8.textContent != "") {
        console.log("Winner is : ", currentPlayer);
        winner = true;
    } else if (box3.textContent === box6.textContent && box6.textContent === box9.textContent && box9.textContent != "") {
        console.log("Winner is : ", currentPlayer);
        winner = true;
    } else if (box1.textContent === box5.textContent && box5.textContent === box9.textContent && box9.textContent != "") {
        console.log("Winner is : ", currentPlayer);
        winner = true;
    } else if (box3.textContent === box5.textContent && box5.textContent === box7.textContent && box7.textContent != "") {
        console.log("Winner is : ", currentPlayer);
        winner = true;
    }

    if (winner == true) {
        body.prepend(p);
        p.textContent = `The Winner Is : ${currentPlayer}`;
        return 0;
    }

    count = 0;
    for (let box of boxes) {
        if (box.textContent != "") {
            count++;
            if (count == 9) {
                body.prepend(p);
                p.textContent = "The Match Is Draw!!!!";
            }
        } else {
            break;
        }
    }
}