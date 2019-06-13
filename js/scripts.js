// welcome the user
/*
var question = 'What is Superman\'s real name?';
var answer = prompt(question);
alert("You answered "+ answer);
*/
var quiz= [
    ["What is Superman's real name?","Clarke Kent"],
    ["What is Wonderwoma's real name?","Dianna Prince"],
    ["What is Batmsn's real name?","Bruce Wayne"]
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