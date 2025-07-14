let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");

let newbtn=document.querySelector("#newbtn")
let msgcontainer=document.querySelector(".msg-container");

let msg=document.querySelector("#msg")

let turn0=true; //placer x, player 0

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

// adding event listners
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turn0){
            box.innerText="0";
            turn0=false;

        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;

        checkWinner();
    });
});

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}



const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}




const checkWinner=()=>{
    for(let pattern of winPatterns){
       let pos1val=boxes[pattern[0]].innerText;
       let pos2val=boxes[pattern[1]].innerText;
       let pos3val=boxes[pattern[2]].innerText; 

       if(pos1val != "" && pos2val !="" && pos3val !=""){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner",pos1val);
            showWinner(pos1val);
        }
       }
    }
     if (count === 9) {
    showDraw();
  }
};

const resetGame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");


}
const showDraw = () => {
  msg.innerText = `It's a Draw!`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);