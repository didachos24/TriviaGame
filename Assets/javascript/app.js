// Quetions and answer as element

var question1 = {q : "Which is the capital of Colombia?", a1 : "Medellin", a2 : "Bogota", a3 : "Cartagena", a4 : "Barranquilla", correct : "Bogota"};
var question2 = {q : "Indepency Day of Colombia is", a1 : "July 20", a2 : "November 11", a3 : "June 24", a4 : "January 20", correct : "July 20"};
var question3 = {q : "The longest river of Colombia is", a1 : "Sinu", a2 : "Cauca", a3 : "Bogota", a4 : "Magdalena", correct : "Magdalena"};
var question4 = {q : "What city is Shakira from?", a1 : "Medellin", a2 : "Bogota", a3 : "Cartagena", a4 : "Barranquilla", correct : "Barranquilla"};

// Array with questions
var questions = [question1, question2, question3, question4];

// Variable to set time
var seconds;

// Counters
var corrects = 0;
var incorrects = 0;
var count = 0;
var answer = ""
var t="";

function insertQuestion() {

    $("#start").hide();

    $("#question").html("<h3>" + questions[count].q + "</h3>");
    $("#option1").html("<p id='select'>" + questions[count].a1 + "</p>");
    $("#option2").html("<p id='select'>" + questions[count].a2 + "</p>");
    $("#option3").html("<p id='select'>" + questions[count].a3 + "</p>");
    $("#option4").html("<p id='select'>" + questions[count].a4 + "</p>");
    answer = questions[count].correct;
    console.log(count);
    
}

$("#start").click(insertQuestion);

$("#changing").on("click", "#select", function() {
    t = this.val;
    console.log(t);
    if($(this) === answer) {
        corrects++;
    } else{
        incorrects++
    }
    count++;
    console.log("Corrects= " + corrects);
    console.log("Incorrects= " + incorrects);
    if(count++ <= questions.length) {
        insertQuestion();
    } else{
        alert("finish");
    }
})

