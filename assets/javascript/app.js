$(document).ready(function() {
    var correctcount = 0;
    var wrongcount = 0;
    var skippedcount = 0;

    //make question objects
    var q1 = {
        Question:"Which US President was shot while giving a speech and still finished the hour and half speech?",
        Answer: "Theodore Roosevelt",
        RedHerrings: ["Abraham Lincoln", "Ulysses S. Grant", "Andrew Jackson"],
    };

    var q2 = {
        Question:"About how many acres of pizza do Americans eat every day?",
        Answer: "100 Acres",
        RedHerrings: ["50 Acres", "500 Acres", "300 Acres"],
    };

    var q3 = {
        Question:"What percentage of Americans own dogs?",
        Answer: "44%",
        RedHerrings: ["17%", "38%", "24%"],
    };

    var q4 = {
        Question:"What year was American Declaration of Independence signed?",
        Answer: "1776",
        RedHerrings: ["1832", "1492", "1812"],
    };

    var q5 = {
        Question:"What percentage of Americans live in Wyoming?",
        Answer: "0.18%",
        RedHerrings: ["0.57%", "1.21%", "0.92%"],
    };

    var q6 = {
        Question:"What American company invented Easy Cheese?",
        Answer: "Mondelēz International",
        RedHerrings: ["General Mills", "JBS USA", "Kraft Foods"],
    };

    var q7 = {
        Question:"In what US City did Comic-Con start?",
        Answer: "San Diego, California",
        RedHerrings: ["0.57%", "1.21%", "0.92%"],
    };

    // display start button on initial page
    // var startbutton = 
    $("#ansloc2").html("START");

    // hit start button to go to first question
    
    // make a function to display question/answer choices and 30 second timer

    //page 1 run questiondisplay function

    // if correct answer add 1 to correctcount and run questiondisplay function

    // if wrong  run questiondisplay function and add 1 to wrongcount

    //if time runs then run questiondisplay function and add 1 to skippedcount

    //after all questions display summary page

});