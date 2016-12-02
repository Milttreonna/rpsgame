// function rounds() {
//   
// }

document.getElementById("compButton").disabled = true;
var rock1 = document.getElementById('rock1');
rock1.onclick = function() {
    var elementsR = document.getElementById("rock1");
    var nameR = elementsR.getAttribute("name");
    document.getElementById("picked1").innerHTML = '<h2>You picked ' + nameR + " </h2>";
    document.getElementById("compButton").disabled = false;

    // alert("You chose rock!");
}

var paper1 = document.getElementById('paper1');
paper1.onclick = function() {
    var elementsP = document.getElementById("paper1");
    var nameP = elementsP.getAttribute("name");
    document.getElementById("picked1").innerHTML = '<h2>You picked ' + nameP + " </h2>";
    document.getElementById("compButton").disabled = false;
    // alert("You chose paper!");
}

var scissor1 = document.getElementById('scissor1');
scissor1.onclick = function() {
    var elementsS = document.getElementById("scissor1");
    var nameS = elementsS.getAttribute("name");
    document.getElementById("picked1").innerHTML = '<h2>You picked ' + nameS + " </h2>";
    document.getElementById("compButton").disabled = false;
    // alert("You chose scissor!");
}

var img_array = ["rock.png", "paper.png", "scissor.png"];

function pickImg(imgAr) {

    document.getElementById("compButton").disabled = false;
    var num = Math.floor(Math.random() * imgAr.length);
    var img = imgAr[num];
    document.getElementById("pickedit").src = img;
    document.getElementById("compButton").disabled = true;
}

// function compPicked() {
//
//
// if (document.getElementById("pickedit").src = "rock.png") {
//     var elementsR2 = document.getElementById("rock1");
//     var nameR2 = elementsR2.getAttribute("name");
//     document.getElementById("picked2").innerHTML = '<h2>Computer picked ' + nameR2 + " !</h2>";
//
// } else if (document.getElementById("pickedit").src = "paper.png") {
//     var elementsP2 = document.getElementById("paper1");
//     var nameP2 = elementsP2.getAttribute("name");
//     document.getElementById("picked2").innerHTML = '<h2>Computer picked ' + nameP2 + " !</h2>";
// } else if (document.getElementById("pickedit").src = "scissor.png") {
//     var elementsS2 = document.getElementById("scissor1");
//     var nameS2 = elementsS2.getAttribute("name");
//     document.getElementById("picked2").innerHTML = '<h2>Computer picked ' + nameS2 + " !</h2>";
// } else {
//     document.getElementById("picked2").innerHTML = "<h2>Computer can't pick right now :(</h2>";
// }
// }
