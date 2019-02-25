console.log('Script for Interaction Page')
console.log('Declare all the functions related to the Interaction Page here!! ')

function tot(s1,s2,s3,s4,s5)
{
    return (s1+s2+s3+s4+s5)
}

let price1=0,price2=0,price3=0,price4=0,price5=0;
document.getElementById('cost').addEventListener('click',function()
{


const p1=document.getElementById('pr1').value
const p2=document.getElementById('pr2').value
const p3=document.getElementById('pr3').value
const p4=document.getElementById('pr4').value
const p5=document.getElementById('pr5').value


if(p1<0||p1>10000)
{
   alert("enter a valid price")
}
else
{
      price1=parseInt(p1)
}

if(p2<0||p2>10000)
{
    alert("enter a valid price")
}
else
{
      price2=parseInt(p2)
}

if(p3<0||p3>10000)
{
   alert("Enter a valid price")
}
else
{
      price3=parseInt(p3)
}

if(p4<0||p4>10000)
{
   alert("enter a valid price")
}
else
{
      price4=parseInt(p4)
}

if(p5<0||p5>10000)
{
   alert("enter a valid price")
}
else
{
      price5=parseInt(p5)
}

const ans= 'The total cost for this purchase is: '+ tot(price1,price2,price3,price4,price5)
document.getElementById('total').innerHTML=ans
      localStorage.setItem('final cost', ans)  // define a string key to store + its value
      localStorage.setItem('price for product 1', price1)
      localStorage.setItem('price for product 2', price2)
      localStorage.setItem('price for product 3', price3)
      localStorage.setItem('price for product 4', price4)
      localStorage.setItem('price for product 5', price5)


})

function aj() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("aja").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "Ajax.txt", true);
  xhttp.send();
}


