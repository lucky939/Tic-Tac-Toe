let boxes= document.querySelectorAll(".dabba");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let winnerContainer=document.querySelector("#winner");
let msgContainer=document.querySelector(".msg-container");


let turnO=true;//player O turn 
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () => {
    turnO =true;
    boxes.forEach((boxy) => {
        boxy.disabled=false;
        boxy.innerText="";
    });
    msgContainer.classList.add("hide");
};

boxes.forEach((boxy) =>{
    boxy.addEventListener("click",() => {
        console.log("Box was clicked");
        if(turnO){
            boxy.innerText="O";
            turnO = false; //player x turn 
        }
        else{
            boxy.innerText="X";
            turnO = true; // player o turn
        }
        boxy.disabled=true; 
        findWinner();
    });
});

const displayWinner = (winner) => {
    winnerContainer.innerText=`YaY Player ${winner} won :)`;
    msgContainer.classList.remove("hide");

}

const findWinner=() =>{
    for(let pattern of winPatterns){
        let pos0 = boxes[pattern[0]].innerText;
        let pos1 = boxes[pattern[1]].innerText;
        let pos2 = boxes[pattern[2]].innerText;
        if(pos0!="" && pos1!= "" && pos2!=""){
            if(pos0===pos1 && pos1===pos2){
    
                boxes.forEach((boxy)=>{
                    boxy.disabled=true;
                })
                displayWinner(pos0);
            }

        }
    }
}

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);

