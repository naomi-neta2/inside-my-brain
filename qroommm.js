function getToRoom1() {
    var enter = prompt("whats the password??", "");
    if (enter == "i love neta") {  
        h = prompt("good job");
        window.location.href = "main.html";
    }
    if (enter != "i love neta") {
        window.alert("Incorrect password, please try again!");
    }
    if (Answer != 6) {
        window.alert("anser all the questions to get the password!");
    }
}




var Answer = 0;
var firstAns = false;
var secendAns = false;
var thirdAns = false;
var fourthAns = false;
var fifthAns = false;
var sixthAns = false;
function firstq() {
    if (firstAns == true) {
        window.alert("You already answered this  question!");
    }
    else {
        var firstq = prompt("whats neta favorite color??", "");
        if (firstq == "pink") {
            firstAns = true
            Answer = Answer + 1
            window.alert("Correct!");
        }
        else {
            window.alert("Incorrect, please try again!");
        }
        if (Answer == 6) {
            window.alert("The password is 'i love neta'.");
        }
    }
}





function secendq() {
    if (secendAns == true) {
        window.alert("You already answered this  question!");
    }
    else {
        var firstq = prompt("what is neta's favorite food??", "");
        if (firstq == "sushi") {
            secendAns = true
            Answer = Answer + 1
            window.alert("Correct!");
        }
        else {
            window.alert("Incorrect, please try again!");
        }
        if (Answer == 6) {
            window.alert("The password is 'i love neta'.");
        }
    }
}




function thirdq() {
    if (thirdAns == true) {
        window.alert("You already answered this  question!");
    }
    else {
        var firstq = prompt("whats neta favorite series??", "");
        if (firstq == "vampire diaries") {
            thirdAns = true
            Answer = Answer + 1
            window.alert("Correct!");
        }
        else {
            window.alert("Incorrect, please try again!");
        }
        if (Answer == 6) {
            window.alert("The password is 'i love neta'.");
        }
    }
}





function fourthq() {
    if (fourthAns == true) {
        window.alert("You already answered this  question!");
    }
    else {
        var firstq = prompt("whats neta favorite book??", "");
        if (firstq == "Love on the Brain") {
            fourthAns = true
            Answer = Answer + 1
            window.alert("Correct!");
        }
        else {
            window.alert("Incorrect, please try again!");
        }
        if (Answer == 6) {
            window.alert("The password is 'i love neta'.");
        }
    }
}




function fifthq() {
    if (fifthAns == true) {
        window.alert("You already answered this  question!");
    }
    else {
        var firstq = prompt("whene is neta's birthday??", "");
        if (firstq == "20 in may") {
            fifthAns = true
            Answer = Answer + 1
            window.alert("Correct!");
        }
        else {
            window.alert("Incorrect, please try again!");
        }
        if (Answer == 6) {
            window.alert("The password is 'i love neta'.");
        }
    }
}


function sixthq() {
    if (sixthAns == true) {
        window.alert("You already answered this  question!");
    }
    else {
        var firstq = prompt("what is neta's favorite flavored candy??", "");
        if (firstq == "sour") {
            sixthAns = true
            Answer = Answer + 1
            window.alert("Correct!");
        }
        else {
            window.alert("Incorrect, please try again!");
        }
        if (Answer == 6) {
            window.alert("The password is 'i love neta'.");
        }
    }
}