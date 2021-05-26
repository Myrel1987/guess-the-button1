
var randomNr = Math.floor(Math.random() * 3) + 1;
function start() {
    var randomNr = Math.floor(Math.random() * 3) + 1;
        
}

function button(x) {
    if (randomNr === x) {
        document.getElementById("display").innerHTML = "You Won!!!";
        document.getElementById("display").style.color = "green";
        randomNr = Math.floor(Math.random() * 3) + 1;

    } else {
        document.getElementById("display").innerHTML = "You Lose 😁😁😁";
        document.getElementById("display").style.color = "red";
        document.getElementById("firstButton").disabled = true;
        document.getElementById("secondButton").disabled = true;
        document.getElementById("thirdButton").disabled = true;
    }
}
   
 function restart() {
        document.getElementById("firstButton").disabled = false;
        document.getElementById("secondButton").disabled = false;
        document.getElementById("thirdButton").disabled = false;
        document.getElementById("display").innerHTML = "";
        randomNr = Math.floor(Math.random() * 3) + 1;
        location.reload();
    }
 