$(document).ready(preparepage());

    var correctcount = 0;
    var wrongcount = 0;
    var skippedcount = 0;
    var iteration = 1;

    //make question objects
    var q1 = {
        Question:"Which US President was shot while giving a speech but still finished the 90 min speech?",
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
        Question:"What year was the American Declaration of Independence signed?",
        Answer: "1776",
        RedHerrings: ["1832", "1492", "1812"],
    };

    var q5 = {
        Question:"What percentage of Americans live in Wyoming?",
        Answer: "0.18%",
        RedHerrings: ["0.57%", "1.21%", "0.92%"],
    };

    var q6 = {
        Question:"What is the highest grossing American movie?",
        Answer: "Star Wars: The Force Awakens",
        RedHerrings: ["Titanic", "Avatar", "Black Panther"],
    };

    var q7 = {
        Question:"In what US City did Comic-Con start?",
        Answer: "San Diego, California",
        RedHerrings: ["0.57%", "1.21%", "0.92%"],
    };

    var q8 = {
        Question:"What is the most popular name for a cat in the US?",
        Answer: "Bella",
        RedHerrings: ["Simba", "Oliver", "Mittens"],
    };

// hit start button to go to first question
    function preparepage() {
        $(".start").on("click", function() {
            timerload();
            qpgsetup(iteration);
            // console.log("start button clicked");
        });
    };

    var ansarray = [q1.Answer, q2.Answer, q3.Answer, q4.Answer, q5.Answer, q6.Answer, q7.Answer, q8.Answer];


    function timerload() {
        // if ($(".ansloc4").html("<button type='button' class='btn btn-danger start'>" + "Start Over?" + "</button>")) {
        // }
        // else {
            var seconds = 30;
            //timer countdown
            var interval = setInterval(countdown, 1000);
            function countdown() {
                seconds--;
                $(".timerlocation").html("<strong>" + seconds + "</strong>" + " seconds left");
                $(".answerlocation").on("click", function() {
                    clearInterval(interval);
                    stop();
                });
                //once time is up
                if (seconds === 0) {
                    clearInterval(interval);
                    stop();
                    console.log("time up");
                    // skippedcount ++;
                    // console.log("skippedcount" + skippedcount);
                    skippgsetup();
                    // $(".ansloc1").html("<h3>The correct answer was " + ansarray[iteration-1] + "</h3>");
                }

                //FIX COUNTDOWN
                // else if ($(".startbtn").html("<strong> Now let's see how patriotic you are! </strong>")) {
                //     clearInterval(interval);
                //     stop();
                // }
            }
            console.log("ran timerload");
        // }
    }


    //display question/answer choices
    function qpgsetup(iteration) {
        clearpage();
        if (iteration < 9) {
                var qarray = [q1.Question, q2.Question, q3.Question, q4.Question, q5.Question, q6.Question, q7.Question, q8.Question];
                var rharray = { it0: [q1.RedHerrings[0], q2.RedHerrings[0], q3.RedHerrings[0], q4.RedHerrings[0], q5.RedHerrings[0], q6.RedHerrings[0], q7.RedHerrings[0], q8.RedHerrings[0]],
                                it1: [q1.RedHerrings[1], q2.RedHerrings[1], q3.RedHerrings[1], q4.RedHerrings[1], q5.RedHerrings[1], q6.RedHerrings[1], q7.RedHerrings[1], q8.RedHerrings[1]],
                                it2: [q1.RedHerrings[2], q2.RedHerrings[2], q3.RedHerrings[2], q4.RedHerrings[2], q5.RedHerrings[2], q6.RedHerrings[2], q7.RedHerrings[2], q8.RedHerrings[2]],
                };
                
                $(".questionlocation").html("<h3>" + qarray[iteration-1] + "</h3>");
                //randomize locations of answer choices
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
        
                $(".ansloc"+anslocarray[0]).html("<button type='button' class='btn btn-danger'>" + ansarray[iteration-1] + "</button>");
                $(".ansloc"+anslocarray[1]).html("<button type='button' class='btn btn-danger'>" + rharray.it0[iteration-1] + "</button>");
                $(".ansloc"+anslocarray[2]).html("<button type='button' class='btn btn-danger'>" + rharray.it1[iteration-1] + "</button>");
                $(".ansloc"+anslocarray[3]).html("<button type='button' class='btn btn-danger'>" + rharray.it2[iteration-1] + "</button>");

                $(".ansloc"+anslocarray[0]).unbind("click");
                $(".ansloc"+anslocarray[0]).on("click", function() {
                    winpgsetup();
                });

                $(".ansloc"+anslocarray[1]).unbind("click");
                $(".ansloc"+anslocarray[1]).on("click", function() {
                    losspgsetup();
                });

                $(".ansloc"+anslocarray[2]).unbind("click");
                $(".ansloc"+anslocarray[2]).on("click", function() {
                    losspgsetup();
                });

                $(".ansloc"+anslocarray[3]).unbind("click");
                $(".ansloc"+anslocarray[3]).on("click", function() {
                    losspgsetup();
                });

            
        }

        else {
            summarypgsetup();
        }
    };
    
    function clearpage() {
        $(".startbtn").text("");
        $(".questionlocation").text("");
        $(".ansloc1").text("");
        $(".ansloc2").text("");
        $(".ansloc3").text("");
        $(".ansloc4").text("");
        $(".timerlocation").text("");
        $(".restartbtn").text("");
        console.log("clear page function ran");
    }

    function anspgtimer() {
        //timer countdown
        var interval = setInterval(anspgcountdown, 1000);
        var time = 5;
        function anspgcountdown() {
            time--;
            console.log("ran anspgcountdown");
            console.log("anspgtimer sec" + time);

            //once time is up
            if (time === 0) {
                clearInterval(interval);
                stop();
                console.log("auto next page time up");
                //go to next question
                iteration ++;
                console.log("iteration: " + iteration);
                timerload();
                qpgsetup(iteration);
            }
          }
        console.log("ran anspgtimer");
    }

    function winpgsetup() {
        clearpage();
        $(".questionlocation").html("<h3>YAY!!!</h3>");
        console.log("correct answer chosen");
        correctcount ++;
        console.log("correctcount: " + correctcount);
        anspgtimer();
    }

    function losspgsetup() {
        clearpage();
        $(".questionlocation").html("<h3>Better luck next time</h3> <br>" +
        "<h4>The correct answer was " + "<strong>" + ansarray[iteration-1] + "</strong> </h4>");
        console.log("wrong answer chosen");
        console.log("wrongcount: " +wrongcount);
        wrongcount ++;
        anspgtimer();
    }

    function skippgsetup() {
        clearpage();
        $(".questionlocation").html("<h3>Oh no the time ran out! <br></h3>" +
        "<h4>The correct answer was " + "<strong>" + ansarray[iteration-1] + "</strong> </h4>");
        skippedcount ++;
        console.log("skippedcount" + skippedcount);
        anspgtimer();
    }

    function summarypgsetup() {
        clearpage();
        $(".questionlocation").html("<h3><strong> Now let's see how patriotic you are! </strong></h3> <br>" +
        "<h4>Correct Answers: " + correctcount
        + "<br>" +
        "Incorrect Answers: " + wrongcount
        + "<br>" +
        "Skipped Answers: " + skippedcount + "</h4><br>");
        $(".restartbtn").html("<button type='button' class='btn btn-danger restart'>" + "Start Over?" + "</button>");
    }

    $(".restartbtn").on("click", function() {
        correctcount = 0;
        wrongcount = 0;
        skippedcount = 0;
        iteration = 1;
        timerload();
        qpgsetup(iteration);
    });