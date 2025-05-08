let boxes=document.querySelectorAll(".main");
let resetbtn=document.querySelector(".bttn");
let newbtn=document.querySelector("#newgme");
let win=document.querySelector(".wins");
let drawing=document.querySelector(".draw");
let turn0=true;
let winPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],     
[3,4,5],
[6,7,8]
];
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      count++;
      if(turn0){
        box.innerHTML="X";
        turn0=false;
      }
      else{
        box.innerHTML="O";
        turn0=true;
      }
      box.disabled=true;
      winner();
    });
});
const winner=()=>{
  for(let value of winPatterns){
    let val1=boxes[value[0]].innerHTML;
    let val2=boxes[value[1]].innerHTML;
    let val3=boxes[value[2]].innerHTML;
    if(val1!="" && val2!="" && val3!=""){
        // draw();
        if(val1===val2 && val2===val3){
          disablebtn();
          winners(val1);
      }
    }
  }
};
const winners=(wins)=>{
     win.innerHTML=`${wins} is the winner`;
};
const draw=()=>{
  if(count===9){
  drawing.innerHTML="Game Drawn";
  }
};
  
const disablebtn=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
};
const enablebtn=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerHTML="";
  }
};
const resetgame=()=>{
  turn0=true;
  enablebtn();
  win.innerHTML="";
};
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
