// Assign all appropriate variables
var startQuizBtn;
var instructions;
var highScoreBtn = document.getElementById("#highScoreBtn");
var score;
var highScores;
var seconds;
var timer;
var initialsBox;
var finalScore = 0;

// On page load, instructions, start button, and recent high scores appear
window.addEventListener('load', (event) => {
    instructions = document.createElement("p");
    instructions.innerHTML = "Welcome to the coding quiz! You will have 90 seconds to complete the quiz. You will be tested on how quickly you can correctly answer the following questions. Each incorrect answer will take 10 seconds off of the timer. The quiz will end once you have either answered all the questions or the timer runs out. Good luck!"
    instructions.setAttribute("id", "instructions");
    document.getElementById("mainContent").appendChild(instructions);
    highScores = document.getElementById("highScores");
    highScores.style.display = "none";
})

window.addEventListener('load', (event) => {
    startQuizBtn = document.createElement("button");
    startQuizBtn.innerHTML = "Start Quiz";
    document.getElementById("mainContent").appendChild(startQuizBtn);
    startQuizBtn.onclick = startQuiz;
})

// When high score button clicked, if the user has taken the quiz previously within the same visit, recent scores are shown
function viewHighScores() {
    highScores = document.getElementById("highScores");
    if (highScores.style.display == "none") {
        highScores.style.display = "block";
    } else {
        highScores.style.display = "none";
    }
}

// When start button clicked, show timer, hide instructions, and call Q1
function startQuiz() {
    document.getElementById("timeBlock").style.display = "block";
    document.getElementById("timer").textContent = 90;
    finalScore = 0;
    highScores.style.display = "none";
    instructions = document.getElementById("instructions");
    seconds = document.getElementById("timer").textContent;
    timer = setInterval(function () {
        seconds--;
        document.getElementById("timer").textContent = seconds;
        if (seconds <= 0) {
            clearInterval(timer);
            quizComplete();
        }
    }, 1000);

    question1();
}

// Display Q1 and answer options
function question1() {
    startQuizBtn.style.display = "none";
    var question1 = "______ tag is an extension to HTML that can enclose any number of JavaScript statements.";
    var answer1 = ["script", "body", "head", "title"];
    instructions.innerHTML = question1;
    for (var i = 0; i < answer1.length; i++) {
        var a = document.createElement("button");
        a.style.display = "block";
        a.style.marginTop = "20px";
        a.style.minWidth = "250px";
        a.innerHTML = answer1[i];
        instructions.appendChild(a);
        var choice = i;
        a.onclick = (function (question, choice) {
            return function () {
                checkAnswer(question, choice);
            }
        })("question1", choice);
    }
}

// Display Q2 and answer options
function question2() {
    var question2 = "JavaScript entities end with _________.";
    var answer2 = ["Colon", "Ampersand", "Dollar sign", "Semicolon"];
    instructions.innerHTML = question2;
    for (var i = 0; i < answer2.length; i++) {
        var a = document.createElement("button");
        a.style.display = "block";
        a.style.marginTop = "20px";
        a.style.minWidth = "250px";
        a.innerHTML = answer2[i];
        instructions.appendChild(a);
        var choice = i;
        a.onclick = (function (question, choice) {
            return function () {
                checkAnswer(question, choice);
            }
        })("question2", choice);
    }
}

// Display Q3 and answer options
function question3() {
    var question3 = "Which of the following is not considered a JavaScript operator?";
    var answer3 = ["new", "this", "delete", "typeof"];
    instructions.innerHTML = question3;
    for (var i = 0; i < answer3.length; i++) {
        var a = document.createElement("button");
        a.style.display = "block";
        a.style.marginTop = "20px";
        a.style.minWidth = "250px";
        a.innerHTML = answer3[i];
        instructions.appendChild(a);
        var choice = i;
        a.onclick = (function (question, choice) {
            return function () {
                checkAnswer(question, choice);
            }
        })("question3", choice);
    }
}

// Display Q4 and answer options
function question4() {
    var question4 = "It is possible to nest functions in JavaScript.";
    var answer4 = ["true", "false"];
    instructions.innerHTML = question4;
    for (var i = 0; i < answer4.length; i++) {
        var a = document.createElement("button");
        a.style.display = "block";
        a.style.marginTop = "20px";
        a.style.minWidth = "250px";
        a.innerHTML = answer4[i];
        instructions.appendChild(a);
        var choice = i;
        a.onclick = (function (question, choice) {
            return function () {
                checkAnswer(question, choice);
            }
        })("question4", choice);
    }
}

// Display Q5 and answer options
function question5() {
    var question5 = "JavaScript is a back-end development language.";
    var answer5 = ["true", "false"];
    instructions.innerHTML = question5;
    for (var i = 0; i < answer5.length; i++) {
        var a = document.createElement("button");
        a.style.display = "block";
        a.style.marginTop = "20px";
        a.style.minWidth = "250px";
        a.innerHTML = answer5[i];
        instructions.appendChild(a);
        var choice = i;
        a.onclick = (function (question, choice) {
            return function () {
                checkAnswer(question, choice);
            }
        })("question5", choice);
    }
}

// Display Q6 and answer options
function question6() {
    var question6 = "How do you print to the console?";
    var answer6 = ["console.log()", "print.console()", "console()", "print console{}"];
    instructions.innerHTML = question6;
    for (var i = 0; i < answer6.length; i++) {
        var a = document.createElement("button");
        a.style.display = "block";
        a.style.marginTop = "20px";
        a.style.minWidth = "250px";
        a.innerHTML = answer6[i];
        instructions.appendChild(a);
        var choice = i;
        a.onclick = (function (question, choice) {
            return function () {
                checkAnswer(question, choice);
            }
        })("question6", choice);
    }
}

// Display Q7 and answer options
function question7() {
    var question7 = "Using the _______ statement is how you test for a specific condition.";
    var answer7 = ["Select", "If", "Switch", "For"];
    instructions.innerHTML = question7;
    for (var i = 0; i < answer7.length; i++) {
        var a = document.createElement("button");
        a.style.display = "block";
        a.style.marginTop = "20px";
        a.style.minWidth = "250px";
        a.innerHTML = answer7[i];
        instructions.appendChild(a);
        var choice = i;
        a.onclick = (function (question, choice) {
            return function () {
                checkAnswer(question, choice);
            }
        })("question7", choice);
    }
}

// Display Q8 and answer options
function question8() {
    var question8 = "The _______ method of an Array object adds and/or removes elements from an array.";
    var answer8 = ["Reverse", "Shift", "Slice", "Splice"];
    instructions.innerHTML = question8;
    for (var i = 0; i < answer8.length; i++) {
        var a = document.createElement("button");
        a.style.display = "block";
        a.style.marginTop = "20px";
        a.style.minWidth = "250px";
        a.innerHTML = answer8[i];
        instructions.appendChild(a);
        var choice = i;
        a.onclick = (function (question, choice) {
            return function () {
                checkAnswer(question, choice);
            }
        })("question8", choice);
    }
}

// Display Q9 and answer options
function question9() {
    var question9 = "What does the 'this' keyword refer to in JavaScript?";
    var answer9 = ["The current object", "The previous object", "The value within a variable", "None of the above"];
    instructions.innerHTML = question9;
    for (var i = 0; i < answer9.length; i++) {
        var a = document.createElement("button");
        a.style.display = "block";
        a.style.marginTop = "20px";
        a.style.minWidth = "250px";
        a.innerHTML = answer9[i];
        instructions.appendChild(a);
        var choice = i;
        a.onclick = (function (question, choice) {
            return function () {
                checkAnswer(question, choice);
            }
        })("question9", choice);
    }
}

// Display Q10 and answer options
function question10() {
    var question10 = "In JavaScript, Window.prompt() method returns true or false values.";
    var answer10 = ["true", "false"];
    instructions.innerHTML = question10;
    for (var i = 0; i < answer10.length; i++) {
        var a = document.createElement("button");
        a.style.display = "block";
        a.style.marginTop = "20px";
        a.style.minWidth = "250px";
        a.innerHTML = answer10[i];
        instructions.appendChild(a);
        var choice = i;
        a.onclick = (function (question, choice) {
            return function () {
                checkAnswer(question, choice);
            }
        })("question10", choice);
    }
}

// Check answers. If answer is correct, show "Correct", add 5 points to score, and move on to next Q. If incorrect, deduct time.
function checkAnswer(question, answer) {
    switch (question) {
        case "question1":
            if (answer == 0) {
                instructions.innerHTML = "Correct!";
                finalScore = finalScore + 5;
                setTimeout(question2, 1000);
            } else {
                instructions.innerHTML = "Incorrect!";
                seconds = seconds - 10;
                setTimeout(question2, 1000);
            }
            break;
        case "question2":
            if (answer == 3) {
                instructions.innerHTML = "Correct!";
                finalScore = finalScore + 5;
                setTimeout(question3, 1000);
            } else {
                instructions.innerHTML = "Incorrect!";
                seconds = seconds - 10;
                setTimeout(question3, 1000);
            }
            break;
        case "question3":
            if (answer == 1) {
                instructions.innerHTML = "Correct!";
                finalScore = finalScore + 5;
                setTimeout(question4, 1000);
            } else {
                instructions.innerHTML = "Incorrect!";
                seconds = seconds - 10;
                setTimeout(question4, 1000);
            }
            break;
        case "question4":
            if (answer == 0) {
                instructions.innerHTML = "Correct!";
                finalScore = finalScore + 5;
                setTimeout(question5, 1000);
            } else {
                instructions.innerHTML = "Incorrect!";
                seconds = seconds - 10;
                setTimeout(question5, 1000);
            }
            break;
        case "question5":
            if (answer == 1) {
                instructions.innerHTML = "Correct!";
                finalScore = finalScore + 5;
                setTimeout(question6, 1000);
            } else {
                instructions.innerHTML = "Incorrect!";
                seconds = seconds - 10;
                setTimeout(question6, 1000);
            }
            break;
        case "question6":
            if (answer == 0) {
                instructions.innerHTML = "Correct!";
                finalScore = finalScore + 5;
                setTimeout(question7, 1000);
            } else {
                instructions.innerHTML = "Incorrect!";
                seconds = seconds - 10;
                setTimeout(question7, 1000);
            }
            break;
        case "question7":
            if (answer == 1) {
                instructions.innerHTML = "Correct!";
                finalScore = finalScore + 5;
                setTimeout(question8, 1000);
            } else {
                instructions.innerHTML = "Incorrect!";
                seconds = seconds - 10;
                setTimeout(question8, 1000);
            }
            break;
        case "question8":
            if (answer == 3) {
                instructions.innerHTML = "Correct!";
                finalScore = finalScore + 5;
                setTimeout(question9, 1000);
            } else {
                instructions.innerHTML = "Incorrect!";
                seconds = seconds - 10;
                setTimeout(question9, 1000);
            }
            break;
        case "question9":
            if (answer == 0) {
                instructions.innerHTML = "Correct!";
                finalScore = finalScore + 5;
                setTimeout(question10, 1000);
            } else {
                instructions.innerHTML = "Incorrect!";
                seconds = seconds - 10;
                setTimeout(question10, 1000);
            }
            break;
        case "question10":
            if (answer == 1) {
                instructions.innerHTML = "Correct!";
                finalScore = finalScore + 5;
                setTimeout(quizComplete, 1000);
            } else {
                instructions.innerHTML = "Incorrect!";
                seconds = seconds - 10;
                setTimeout(quizComplete, 1000);
            }
            break;
    }
}

// When quiz is complete (or time runs out), clear and hide the timer, show final score, and show text area with submit button
function quizComplete() {
    clearInterval(timer);
    document.getElementById("timeBlock").style.display = "none";
    instructions.innerHTML = "Your score:" + finalScore;
    var x = document.createElement("h3");
    x.innerHTML = "Enter your initials:"
    instructions.appendChild(x);
    initialsBox = document.createElement("textarea");
    instructions.appendChild(initialsBox);
    var submit = document.createElement("button");
    submit.innerHTML = "submit";
    submit.style.display = "block";
    submit.style.margin = "5px";
    submit.style.minWidth = "100px";
    instructions.appendChild(submit);
    submit.onclick = addToHighScores;
}

// Once initials and score submitted, append to recent score button div
function addToHighScores() {
    instructions.innerHTML = "";
    score = document.createElement("div");
    score.innerHTML = initialsBox.value + " - " + finalScore;
    highScores = document.getElementById("highScores");
    highScores.appendChild(score);
    var restartBtn = document.createElement("button");
    restartBtn.innerHTML = "Restart";
    instructions.appendChild(restartBtn);
    restartBtn.onclick = startQuiz;
    highScores.style.display = "block";
}



