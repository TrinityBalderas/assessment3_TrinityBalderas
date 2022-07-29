const buttonColor = document.querySelector('.color');
const buttonPlace = document.querySelector('.place');
const buttonRitual = document.querySelector('.ritual');

function favColorAlert(evt){
    alert("Red but not a bright red, more like a blood red")
}

function favPlaceAlert(evt){
    alert("Definitely Kelvin Corp haha....yep")
}

function favRitualAlert(evt){
    alert("Um I guess cleaning my piercings or my daily reading")
}

buttonColor.addEventListener("click", favColorAlert);
buttonPlace.addEventListener("click", favPlaceAlert);
buttonRitual.addEventListener("click", favRitualAlert);