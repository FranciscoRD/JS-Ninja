var quiz = [
    ["What is Superman's real name?","Clarke Kent"],
    ["What is Wonderwoma's real name?","Dianna Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

var score = 0 // initialize score

play(quiz);

function play(quiz){
    // main game loop
    for(var i= 0, question, answer, max=quiz.length; i<max; i++){
        question = quiz[i][0];
        answer = ask(question);
        check(answer);
    }
    // end of main game loop
    gameOver();
    
    function ask(question){
        return prompt(question);
    }

    function check(answer){
        if(answer === quiz[i][1]){ // quiz[i][1] is the ith answer
            alert("Correct!");
            //increase score by 1
            score++;
        }else{
            alert("Wrong!");
        }
    }
    function gameOver(){
        // inform the player that the game 
        // has finished and tell them how many points they have
        alert("Game Over, you scored "+score+" points");
    }
}

/*
// Final del Capitulo 3

var quiz= [
    ["What is Superman's real name?","Clarke Kent"],
    ["What is Wonderwoma's real name?","Dianna Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];
var score=0;
for (var i=0; i<quiz.length; i++){
    var answer = prompt(quiz[i][0]);
    if(answer === quiz[i][1]){
        alert("Correct!");
        score++;
    }else{
        alert("Wrong!");
    }
}
alert("Game over, you scored "+ score + " points");
*/
/*
// Final del Capitulo 2

var question = 'What is Superman\'s real name?';
var answer = prompt(question);
alert("You answered "+ answer);
*/