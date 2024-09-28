let boxes = document.querySelectorAll(".boxes");
let turnX = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

let player1 = prompt('Enter Name Of Player Takes X');
let player2 = prompt('Enter Name Of Player Takes O');
let guid = document.querySelector(".heading p");
guid.innerText = `First Turn Is of ${player1}`;

function disableBtn() {
    for(let box of boxes){
        box.disabled = true;
    }
}
const reset = document.querySelector(".reset");
reset.addEventListener("click",()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
   document.querySelector(".winner").style.display = "none";

    }
    
})
const winner =()=>{
   document.querySelector(".winner").style.display = "flex";
  if (turnX) {
     document.querySelector(".winner_heading").innerText = `winner ${player1}(O)`
  }else{
    document.querySelector(".winner_heading").innerText = `winner ${player2}(X)`
   
  };
 disableBtn();

}

function checkWinner(){
    for(let patterns of winPatterns){
        let value0 = boxes[patterns[0]].innerText;
        let value1 = boxes[patterns[1]].innerText;
        let value2 = boxes[patterns[2]].innerText;        
        if(value0 != "" && value1 != "" && value2 != ""){
          if (value0 === value1 && value1 === value2 && value0 === value2) {
            winner();
          }
        };
    };
     
    
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
if(turnX){
    box.innerText = "X";
    turnX = false;
}else{
    box.innerText = "O";
    turnX = true;
}
checkWinner();
box.disabled = true;

    })
})
