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
    if (firstAns == true) {
        window.alert("You already answered this  question!");
    }
    else {
        var firstq = prompt("what is neta's favorite food??", "");
        if (firstq == "sushi") {
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




function thirdq() {
    if (firstAns == true) {
        window.alert("You already answered this  question!");
    }
    else {
        var firstq = prompt("whats neta favorite series??", "");
        if (firstq == "the vampier diaries") {
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





function fourthq() {
    if (firstAns == true) {
        window.alert("You already answered this  question!");
    }
    else {
        var firstq = prompt("whats neta favorite book??", "");
        if (firstq == "Love on the Brain") {
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




function fifthq() {
    if (firstAns == true) {
        window.alert("You already answered this  question!");
    }
    else {
        var firstq = prompt("whene is neta's birthday??", "");
        if (firstq == "20 in may") {
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


function sixthq() {
    if (firstAns == true) {
        window.alert("You already answered this  question!");
    }
    else {
        var firstq = prompt("what is neta's favorite flavored candy??", "");
        if (firstq == "sour") {
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