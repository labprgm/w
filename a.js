var x="Hello world";
console.log(x);
alert("Good Evening!");
document.write("Uday is Coding!<br>")

var x=prompt("Input 1st Number: ");
var y=prompt("Input 2nd number: ");
var z=parseInt(x)+parseInt(y);
alert("the sum: " +z );
console.log(z);

var num=prompt("NUmber Odd OR Even");
if(num%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}


sum=0;
var n1=prompt("enter a digits of number");
var t=parseInt(n1);
while(t!=0){
    var remainder=t%10;
    sum=sum+remainder;
    var t=Math.floor(t/10);
}
document.write("sum of the digits: "+ sum + "<br>");


function createTable()
{
rn = window.prompt("Input number of rows", 1);
cn = window.prompt("Input number of columns",1);
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}



var ch,a=0,b=0;
ch=prompt("enter the operation: ");
a=parseInt(prompt("enter the a value: "));
b=parseInt(prompt("enter the b value: "));
switch(ch){
    case '+':document.write("addition: " + a + b +"<br>");+break;
    case '-':document.write("subtraction: " + a - b +"<br>");break;
    case '*':document.write("Multiplication: " + a * b +"<br>");break;
    case '/':document.write("division: " + a / b + "<br>");break;
    default:break;
}


var squ=parseInt("enter number to display squares: ")
do{
    var m=squ;
    var n=squy*squ;
    alert(m+":"+n);
    squ=squ-1;
}while(squ!=0);