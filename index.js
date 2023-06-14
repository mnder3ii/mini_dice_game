var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var diceimg_nm = "dice" + randomNumber1 + ".png";

var img_r_source = "./" + diceimg_nm;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", img_r_source)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomnus = "./dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomnus);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " 🚩player 1 is a wins"
}
else if(randomNumber2 > randomNumber1 ){
    document.querySelector("h1").innerHTML = " 🚩player 2 is a wins"
} 
else{
    document.querySelector("h1").innerHTML = " Draw!!!"
}


