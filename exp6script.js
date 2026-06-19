let heading = document.getElementById("heading");
let input=document.getElementById("inputText");
let para = document.getElementById("para");
let backgroundColor=document.getElementById("bgColorBtn")
// cahnge heading text when button is click

document.getElementById("changeTextBtn").onclick =
function () {
  heading.innerText=input.value;
};

input.onchange = function() 
{
  console.log("input changed:", input.value);
};

// change background

document.getElementById("bgColorBtn").addEventListener("click", function () {
  document.body.style.backgroundColor="lightblue";
});

// change font size

document.getElementById("fontSizeBtn").addEventListener("click", function() {
heading.style.fontSize="40px";
  });

  let isVisible = false;
para.style.display = "none";
  document.getElementById("toggleParaBtn").onclick = function ()
{
if (isVisible)
{
  para.style.display="none"; //hide
  isVisible=false;
}
else{
  para.style.display="block"; //show
  isVisible=true;
}
};

// reset button

document.getElementById("resetBtn").onclick = function()
{
  location.reload() // this is a function used to reload a page
};