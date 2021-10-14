//RANDOM DICE1 GENERATOR
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;

if(randomNumber1===1)
{document.querySelector(".img1").setAttribute("src","Images/dice1.png");}

else if(randomNumber1===2)
{document.querySelector(".img1").setAttribute("src","Images/dice2.png");}

else if(randomNumber1===3)
{document.querySelector(".img1").setAttribute("src","Images/dice3.png");}

else if(randomNumber1===4)
{document.querySelector(".img1").setAttribute("src","Images/dice4.png");}

else if(randomNumber1===5)
{document.querySelector(".img1").setAttribute("src","Images/dice5.png");}

else if(randomNumber1===6)
{document.querySelector(".img1").setAttribute("src","Images/dice6.png");}


// RANDOM DICE2 GENERATOR FOR
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;

if(randomNumber2===1)
{document.querySelector(".img2").setAttribute("src","Images/dice1.png");}

else if(randomNumber2===2)
{document.querySelector(".img2").setAttribute("src","Images/dice2.png");}

else if(randomNumber2===3)
{document.querySelector(".img2").setAttribute("src","Images/dice3.png");}

else if(randomNumber2===4)
{document.querySelector(".img2").setAttribute("src","Images/dice4.png");}

else if(randomNumber2===5)
{document.querySelector(".img2").setAttribute("src","Images/dice5.png");}

else if(randomNumber2===6)
{document.querySelector(".img2").setAttribute("src","Images/dice6.png");}

//APPLYING CONDITION
if(randomNumber1>randomNumber2)
{
  document.querySelector(".container h1").innerHTML = "<img class='flag' src='red-flag.png'></img> &nbsp&nbsp Player 1 Won!";
}

else if(randomNumber1<randomNumber2)
{
  document.querySelector(".container h1").innerHTML = "Player 2 Won! &nbsp&nbsp <img class='flag' src='red-flag.png'></img>";
}

else if(randomNumber1===randomNumber2)
{
  document.querySelector(".container h1").innerHTML = "Draw!!";
}
