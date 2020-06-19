var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomImgName1 = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomImgName2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImgName1);
document.querySelectorAll("img")[1].setAttribute("src", randomImgName2);

if(randomNumber1 > randomNumber2){
	document.querySelector("h1").innerHTML = "Player1 wins! ⛳";
}else if(randomNumber1 < randomNumber2){
	document.querySelector("h1").innerHTML = "Player2 wins! ⛳";
}else{
	/* do nothing */
}
