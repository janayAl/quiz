$('#start').on('click', function () {
    $('#subwrapper').remove();

})

var questions = [{
    question: "Arrays in javascript can be used to store _.",
    answerChoices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"
}, {
    question: "Commonly used data types DO NOT include _.",
    answerChoices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts"
}, {

}, {
    question: "Which of the following is a programming language?",
    answerChoices: ["javascript", "Chinese", "CSS", "None of the above"],
    correctAnswer: "javascript"

}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 30
    
 
    //Add timer/Counter
    countDown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time up");
            game.done();


        }


    },
    start: function () {
        timer = setInterval(game.countDown, 10000);
        $('#subwrapper').prepend('<h2> Time Remaining: <span id= "counter">30</spand>seconds</h2>')
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>')
            for (var i = 0; j < questions[i].answerChoices.length; j++) {
                $('#subwrapper').append("<hr>input type = 'radio'name='question- " + i + "'value'</h2>" + quetions[i].answerChoices[j] + ">" + questions[i].answerChoices[j])
                //Make sure to call the function 
            }
        }
    },
    done: function () {
        $.each($('input[name="questions- 0"]:cheked')),
            function () {
                if ($(this).val() == questions[0].correctAnswer) {

                } else {
                    game.incorrect++;
                }

            };
        $.each($('input[name="questions- 0"]:cheked')),
            function () {
                if ($(this).val() == questions[1].correctAnswer) {

                } else {
                    game.incorrect++;
                }
                $.each($('input[name="questions- 0"]:cheked')),
                    function () {
                        if ($(this).val() == questions[2].correctAnswer) {

                        } else {
                            game.incorrect++;
                        }
                    });
                    this.result();
            },
            result: function() {
                clearInterval(timer);
                $('#subwrapper h2').remove();
                $('#subwrapper').append("<h3>Game Over! </h3>");
                $('#subwrapper').append("<h3>Correct Answers:" + this.correct + "</h3>");
                $('#subwrapper').append("<h3>Incorrect Answers:" + this.incorrect + "</h3>");
                $('#subwrapper').append("<h3>Unanswered Questions:" + (questions.length - (this.incorrect + this.correct)) + "</h3>");
            }


    }
