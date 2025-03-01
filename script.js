let boxes = document.querySelectorAll(".box")
let myrestt = document.querySelector("#myrest")
let newgame = document.querySelector("#mygame")
let msgcontainer = document.querySelector(".msg")
let msg = document.querySelector("#message")


let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetgame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide")
}



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button wass clicked");
        // box.innerText="abc";
        if (turnO) {
            box.innerText = "O";
            turnO = false;

        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const showwinner = (Winner) => {
    message.textContent = `Congratulations , Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}




const checkwinner = () => {
    for (patterns of winpatterns) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;


        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner");
                showwinner(pos1val);
            }
        }
    }


}

newgame.addEventListener("click", resetgame);
myrest.addEventListener("click", resetgame)