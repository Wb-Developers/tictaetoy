let boxes = document.querySelectorAll(".boxes");
let turnX = true;

//
  let input1;
  let input2;
  let player1;
  let player2;
let inputX = document.querySelector("#inputX");
let inputO = document.querySelector("#inputO");
function handleEnter(){
    document.querySelector('.outline').style.display = 'none';
    document.querySelector('.playerName').style.display = 'none';
    input1 = inputX.value;
    input2= inputO.value;
     player1 = input1;
     player2 = input2;


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
     document.querySelector(".winner_heading").innerText = `winner ${player2}(O)`
  }else{
    document.querySelector(".winner_heading").innerText = `winner ${player1}(X)`
   
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


}
