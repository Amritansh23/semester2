let heading=document.getElementById("mainHeading");
let paragraph=document.getElementById("paragraph");
let input=document.getElementById("userInput");

let fontSize=16;

// change heading text (onclick using addEventlistner)

document.getElementById("changeTextBtn").addEventListener("click", function() {
  if(input.value!== "")
  {
    heading.innerHTML=input.value;
  }
});
// change background color on click

document.getElementById("bgColorBtn").onclick=function()
{
  document.body.style.backgroundColor="red";
};
 // increase font size

 document.getElementById("fontSizeBtn").addEventListener("click", function()
{
 fontSize+=2;
 paragraph.style.fontSize=fontSize+"px";
});

//show hide paragraph
document.getElementById("toggleBtn").addEventListener("click", function()
{
  if(paragraph.style.display==="none"){
    paragraph.style.display="block";
  }
  else{
    paragraph.style.display="none";
  }
});

// reset page
document.getElementById("resetBtn").addEventListener("click", function()
{
  heading.innerHTML="welcome to javascript";
  paragraph.style.display="block";
  paragraph.style.fontSize="16px";
  document.body.style.backgroundColor="lightBlue";
  input.value="";
  fontSize=16;
})