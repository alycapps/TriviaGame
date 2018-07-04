$(document).ready(preparepage());

    var correctcount = 0;
    var wrongcount = 0;
    var skippedcount = 0;
    var seconds = 30;

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

// hit start button to go to first question
    function preparepage() {
        $(".start").on("click", function() {
            timerload();
            qpgsetup();
            console.log("start button clicked");
        });
    };

    function timerload() {
        //timer countdown
        var interval = setInterval(countdown, 1000);
        function countdown() {
            seconds--;
            // console.log("countdown function ran");
            // console.log("seconds" + seconds);
            // $("timerlocation").html(seconds + "seconds");
            $(".timerlocation").html("<strong>" + seconds + "</strong>" + " seconds left");

            //once time is up
            if (seconds === 0) {
                clearInterval(interval);
                stop();
                console.log("time up");
            }
          }
        console.log("ran timerload");
    }

    //display question/answer choices
    function qpgsetup() {
        $(".questionlocation").text(q1.Question);
        ///randomize locations of answer choices
        var anslocarray = [0,0,0,0];
        for (i = 0; i < 4; i++) {
            var x = Math.floor(Math.random() * 4) + 1;
            var v = anslocarray.indexOf(x);
            while (v >= 0) {
                console.log("loop started - value is " + x + " and array looks like: " + anslocarray)
                x = Math.floor(Math.random() * 4) + 1;
                v = anslocarray.indexOf(x);
                console.log(v);
            }
            anslocarray[i] = x;
        }
        console.log(anslocarray);

        $(".ansloc"+anslocarray[0]).text(q1.Answer);
        $(".ansloc"+anslocarray[1]).text(q1.RedHerrings[0]);
        $(".ansloc"+anslocarray[2]).text(q1.RedHerrings[1]);
        $(".ansloc"+anslocarray[3]).text(q1.RedHerrings[2]);

        $(".ansloc"+anslocarray[0]).id = "answer";
    };

    //page 1 run questiondisplay function

    // if correct answer add 1 to correctcount and run questiondisplay function

    // if wrong  run questiondisplay function and add 1 to wrongcount

    //if time runs then run questiondisplay function and add 1 to skippedcount

    //after all questions display summary page
