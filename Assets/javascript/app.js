// Quetions and answer as element

var question1 = {q : "Which is the capital of Colombia?", a1 : "Medellin", a2 : "Bogota", a3 : "Cartagena", a4 : "Barranquilla", correct : "2"};
var question2 = {q : "Indepency Day of Colombia is", a1 : "July 20", a2 : "November 11", a3 : "June 24", a4 : "January 20", correct : "1"};
var question3 = {q : "The longest river of Colombia is", a1 : "Sinu", a2 : "Cauca", a3 : "Bogota", a4 : "Magdalena", correct : "4"};
var question4 = {q : "What city is Shakira from?", a1 : "Medellin", a2 : "Bogota", a3 : "Cartagena", a4 : "Barranquilla", correct : "4"};
var question5 = {q : "Which is the city where Simon Bolivar 'El Libertador' died?", a1 : "Cartagena", a2 : "Mompox", a3 : "Santa Marta", a4 : "Caracas", correct : "3"};

// Array with questions
var questions = [question1, question2, question3, question4, question5];

// Variable to set time
var seconds;

// Counters
var corrects = 0;
var incorrects = 0;
var count = -1;
var answer = "";
var t="";
var d=10;
var clock;

function insertQuestion() {

    if(count <5) {
        clock = setInterval(insertQuestion, 3000)

        $("#start").hide();
        count ++;
    
        $("#question").html("<h3>" + questions[count].q + "</h3>");
        $("#option1").html("<p id='1'>" + questions[count].a1 + "</p>");
        $("#option2").html("<p id='2'>" + questions[count].a2 + "</p>");
        $("#option3").html("<p id='3'>" + questions[count].a3 + "</p>");
        $("#option4").html("<p id='4'>" + questions[count].a4 + "</p>");
        answer = questions[count].correct;
        console.log(count); 
    } else {
        clearInterval(clock);
        $("#question").html("<h1>Corrects = " + corrects + "</h1><br><h1>Incorrects = "+incorrects+"</h1>");
        $("#option1").hide();
        $("#option2").hide();
        $("#option3").hide();
        $("#option4").html("<button type='button' sytle='text-align: center' class='btn btn-secondary btn-lg' id='restart'>Start Over</button>");
    }
}

$(document).on("click", "p", function() {

    t = this.id;
    console.log(t);
    console.log(answer);
    
    if(t == answer) {
        corrects++;
    }else {
        incorrects++;
    }
    console.log("Corrects= " + corrects);
    console.log("Incorrects= " + incorrects);

    clearInterval(clock);
    insertQuestion();
})

function refresh() {
    this.location.reload(true);
}

$("#start").on("click", insertQuestion);
$("#restart").on("click", refresh);