function calculateResult(){
  let n=document.getElementById("subjects").value;
  let total=0;
for(let i=0; i<n; i++)
{
let marks=parseFloat(prompt("enter marks for subjects" +i));
total=total+marks;
}
let average=total/n;
let grade;
let result;
if(average>=90)
{
  grade="A+";
}
else if(average>=75)
{
  grade="A";
}
else if(average>=60)
{
  grade="B";
}
else if(average>=50)
{
  grade="C";
}
else{
  grade="F";
}
if(average>=40){
  result="pass";
}
else{
  result="fail";
}
document.getElementById("result").innerHTML="total marks:" +total +"<br>" +"average marks:" +average.toFixed(2)+"<br>"+"grade:"+ grade +"<br>"+ "result: "+ result;
}