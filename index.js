
var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdiceimg= "dice"+ randomnumber1 +".png";
var randomimgsource = "/Dicee Challenge - Starting Files/images/"+ randomdiceimg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimgsource);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceim2= "dice"+ randomnumber2 +".png";
var randomimgsourc2 = "/Dicee Challenge - Starting Files/images/"+ randomdiceim2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimgsourc2)

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="🚩player 1 wins";
}
else
{
   document.querySelector("h1").innerHTML="player 2 wins🚩"
}