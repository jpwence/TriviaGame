$(function() {

    var timer = 5;
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var questions = {
        firstQuestion: {
            description: "What color is red?",
            answers: ["red", "blue", "green", "yellow"],
            rightAnswer: ["red"]
        },
        secondQuestion: {
            description: "What color is blue?",
            answers: ["red", "blue", "green", "yellow"],
            rightAnswer: ["blue"]
        },
        thirdQuestion: {
            description: "What color is green?",
            answers: ["red", "blue", "green", "yellow"],
            rightAnswer: ["green"]
        },
        fourthQuestion: {
            description: "What color is yellow?",
            answers: ["red", "blue", "green", "yellow"],
            rightAnswer: ["yellow"]
        },
        fifthQuestion: {
            description: "What color is green?",
            answers: ["red", "blue", "green", "yellow"],
            rightAnswer: ["green"]
        },
    }


    $("#start").click(startGame);

// starts the game

    function startGame() {

        $("#start").hide();
        var userClick;
        $(document).on('click', '.result', function() {
            userClick = $(this).text();
            if (userClick === $("#answerOne").text()) {
                correctAnswers++;
                $("#mainContent").hide();
                $("#correctAns").html("<h2> Correct:</h2>" + questions.firstQuestion.rightAnswer);
                setTimeout(secondQuest, 2000);
            }
        })

        counter = setInterval(decrement, 1000);

        function decrement() {
            timer--;
            $("#time").html(timer);
            if (timer === 0) {
                wrongAnswers++;
                clearInterval(counter);
                $("#mainContent").hide();
                $("#correctAns").html("<h2> Times up! The correct answer was:</h2>" + questions.firstQuestion.rightAnswer);
                setTimeout(secondQuest, 2000);
            }
        }
        $("#question").html(questions.firstQuestion.description);
        $("#answerOne").html(questions.firstQuestion.answers[0]);
        $("#answerTwo").html(questions.firstQuestion.answers[1]);
        $("#answerThree").html(questions.firstQuestion.answers[2]);
        $("#answerFour").html(questions.firstQuestion.answers[3]);
    }

// question two

    function secondQuest() {
        $("#correctAns").hide();
        $("#mainContent").show();

        timer = 5;

        var userClick;
        $(document).on('click', '.result', function() {
            userClick = $(this).text();
            if (userClick === $("#answerTwo").text()) {
                correctAnswers++;
                $('#mainContent').hide();
                $('#correctAns').show();
                $("#correctAns").html("<h2> Correct:</h2>" + questions.secondQuestion.rightAnswer);
                setTimeout(thirdQuest, 2000);
            }
        })

        counter = setInterval(decrement, 1000);

        function decrement() {
            timer--;
            $("#time").html(timer);
            if (timer === 0) {
                wrongAnswers++;
                clearInterval(counter);
                $('#mainContent').hide();
                $('#correctAns').show();
                $("#correctAns").html("<h2> Times up! The correct answer was:</h2>" + questions.secondQuestion.rightAnswer);
                setTimeout(thirdQuest, 2000);
            }
        }

        $("#question").html(questions.secondQuestion.description);
        $("#answerOne").html(questions.secondQuestion.answers[0]);
        $("#answerTwo").html(questions.secondQuestion.answers[1]);
        $("#answerThree").html(questions.secondQuestion.answers[2]);
        $("#answerFour").html(questions.secondQuestion.answers[3]);
    }

// question 3

    function thirdQuest() {
        timer = 5;
        $("#correctAns").hide();
        $("#mainContent").show();

        var userClick;
        $(document).on('click', '.result', function() {
            userClick = $(this).text();
            if (userClick === $("#answerThree").text()) {
                correctAnswers++;
                $("#mainContent").hide();
                $("#correctAns").show();
                $("#correctAns").html("<h2> Correct:</h2>" + questions.thirdQuestion.rightAnswer);
                setTimeout(fourthQuest, 2000);
            }
        })

        counter = setInterval(decrement, 2000);

        function decrement() {
            timer--;
            $("#time").html(timer);
            if (timer === 0) {
                wrongAnswers++;
                clearInterval(counter);
                $("#mainContent").hide();
                $("#correctAns").html("<h2> Times up! The correct answer was:</h2>" + questions.thirdQuestion.rightAnswer);
                $("#correctAns").show();
                setTimeout(fourthQuest, 2000);
            }
        }
        $("#question").html(questions.thirdQuestion.description);
        $("#answerOne").html(questions.thirdQuestion.answers[0]);
        $("#answerTwo").html(questions.thirdQuestion.answers[1]);
        $("#answerThree").html(questions.thirdQuestion.answers[2]);
        $("#answerFour").html(questions.thirdQuestion.answers[3]);
    }

// question 4
    function fourthQuest() {
        timer = 5;
        $("#correctAns").hide();
        $("#mainContent").show();
        
        var userClick;
        $(document).on('click', '.result', function() {
            userClick = $(this).text();
            if (userClick === $("#answerFour").text()) {
                correctAnswers++;
                $("#mainContent").hide();
                $("#correctAns").show();
                $("#correctAns").html("<h2> Correct:</h2>" + questions.fourthQuestion.rightAnswer);
                setTimeout(fifthQuest, 2000);
            }
        })
        
        counter = setInterval(decrement, 2000);

        function decrement() {
            timer--;
            $("#time").html(timer);
            if (timer === 0) {
                wrongAnswers++;
                clearInterval(counter);
                $("#mainContent").hide();
                $("#correctAns").html("<h2> Times up! The correct answer was:</h2>" + questions.fourthQuestion.rightAnswer);
                $("#correctAns").show();
                setTimeout(fifthQuest, 2000);
            }
        }
        $("#question").html(questions.fourthQuestion.description);
        $("#answerOne").html(questions.fourthQuestion.answers[0]);
        $("#answerTwo").html(questions.fourthQuestion.answers[1]);
        $("#answerThree").html(questions.fourthQuestion.answers[2]);
        $("#answerFour").html(questions.fourthQuestion.answers[3]);
    }

// question 5

    function fifthQuest() {
        timer = 5;
        $("#correctAns").hide();
        $("#mainContent").show();
        
        var userClick;
        $(document).on('click', '.result', function() {
            userClick = $(this).text();
            if (userClick === $("#answerThree").text()) {
                correctAnswers++;
                $("#mainContent").hide();
                $("#correctAns").show();
                $("#correctAns").html("<h2> Correct:</h2>" + questions.fifthQuestion.rightAnswer);
                setTimeout(reset, 2000);
            }
        })

        counter = setInterval(decrement, 2000);

        function decrement() {
            timer--;
            $("#time").html(timer);
            if (timer === 0) {
                wrongAnswers++;
                clearInterval(counter);
                $("#mainContent").hide();
                $("#correctAns").html("<h2> Times up! The correct answer was:</h2>" + questions.fifthQuestion.rightAnswer);
                $('#correctAns').show();
                setTimeout(reset, 2000);
            }
        }
        $("#question").html(questions.fifthQuestion.description);
        $("#answerOne").html(questions.fifthQuestion.answers[0]);
        $("#answerTwo").html(questions.fifthQuestion.answers[1]);
        $("#answerThree").html(questions.fifthQuestion.answers[2]);
        $("#answerFour").html(questions.fifthQuestion.answers[3]);
    }


// game end

    function reset() {
        correctAnswers = 0;
        wrongAnswers = 0;
        clearInterval(timer);
        $("#time").html("Time Left in seconds: " + timer);
        $("#start").show();
    };
});