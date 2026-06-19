let boxes=document.querySelectorAll(".box");
let button=document.querySelector("#reset");
let newgamebtn=document.querySelector("#newbutton");
let msgcontainer=document.querySelector(".msg-container")
let message=document.querySelector("#message");
let turn0=true;
const winpatterns=[[0,1,2], [0,3,6], [0,4,8], [1,4,7],[2,5,8], [2,4,6],[3,4,5],[6,7,8]];
const resetgame = () =>
{
    turn0=true;
    enableboxes ();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was cicked");
        
        if(turn0)
        {
box.innerHTML="O";
box.classList.add("O");
turn0=false;
        }
        else
        {
            box.innerHTML="X";
            box.classList.add("X");
            turn0=true;
        }
        box.disabled=true; //yaha par jo true hai iska upar wale true se lena dena nahi hai is true ka mtlb  asli true hai
       checkwinner ();
      
    })
});
const disableboxes = () =>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
const enableboxes = () =>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};

        ;const showwinner = (winner) =>
{
   message.innerText=`congratulation the winner is ${winner}`;
   msgcontainer.classList.remove("hide");
   
disableboxes();
}
const checkwinner = () =>{
    for(let pattern of winpatterns)
    {
       let pos1val=boxes[pattern[0]].innerText;
       let pos2val=boxes[pattern[1]].innerText;
       let pos3val=boxes[pattern[2]].innerText;

       if(pos1val != "" && pos2val != "" && pos3val != "")
       {
        if(pos1val===pos2val && pos2val===pos3val)
        {
            console.log("winner", pos1val);
            showwinner(pos1val);
        }
    }
}};
newgamebtn.addEventListener("click", resetgame);
button.addEventListener("click", resetgame);