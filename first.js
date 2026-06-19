console.log("The Amritansh Pandey");
let age=18;
console.log(age);
name = "The Amritansh Pandey";
console.log(name);
let name2="Amritansh Pandey";
console.log(name2);

const student =
{
    fullName: "Rahul",
    age: 20,
    cgpa:9.2,
};
student["age"]=student["age"]+1;
console.log(student.age);

const product =
{
    name: "ball pen",
    rating: 4,
    price: 270,
};
let profile=
{
    name: "shradha didi",
    post: 195,
    followers: 569000,
    following: 4,
};
// operators
let a=5;
let b=9;
console.log("a+b=", a+b);
// if else
    let mode="dark";
let color;
if(mode==="dark")
{
    color="black";
}
else 
{
    color="white"
}

let num2=prompt("enter a number");
if(num2%5===0)
{
    console.log("divisible by 5");
}
else
{
    console.log("not divisible by 5");
}
let sum=0;
for(let i=0; i<=5; i++)
{
   sum=sum+i;
}
console.log(sum);
// for-off-loop
let str="javascript";
let size2=0;
for(let i of str)
{
    console.log("i=", i);  //print each element
    size2++;
}
console.log("string size=", size2);

//for in loop
const child =
{
    fullName: "Rahul",
    age: 20,
    cgpa:9.2,
}
for(let key in child)
    {
        console.log("key =", key, "value=", child[key]);
    }
    //template literals
let obj={
    item:"pen",
    price:"10",
};
let output=`the cost of${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log("Amritansh\nPandey"); // work as endl

let input=prompt("enter your name");
console.log("@",input,input.length);
 let fruits =["mango","apple","banana","lichi","watermelon"];
 console.log(a);
 
 //function
 function myfunction()
 {
    console.log("mujhe ghar jana hai");
 }
myfunction();

function newfunction(msg)
{
    console.log(msg);
}
newfunction("mai jee nahi nikal paya mai IIT nahi jaa payaa");
function sumofnumbers(x, y)
{
    console.log(x+y);
}

function sumofdigit(x, y)
{
    s=x+y;
    return s;
}
let value=sumofdigit(3,4);
console.log(value);
//for each loop
let arr =[1,2,3,4,5];
arr.forEach(function printval(val)
{
    console.log(val);
});
let numbers=[67, 52,89];
numbers.forEach((numbers)=>
{
    console.log(numbers*numbers);
});
//
let n=prompt("enter number");
let array=[];
for(let i=0; i<n; i++)
{
    array[i]=i+1;
}
console.log(array);


