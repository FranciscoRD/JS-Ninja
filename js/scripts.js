var quiz = {
    'name':'Super Hero Name Quiz',
    'description':  'How many super heroes can you name?',
    'question': 'What is the real name of ',
    'questions':[
        {
            'question': 'Superman',
            'answer': 'Clarke Kent'
        },
        {
            'question': 'Batman',
            'answer': 'Bruce Wayne'
        },
        {
            'question': 'Wonder Woman',
            'answer': 'Dianna Prince'
        }
    ]
}

/// DOM References
var $question = document.getElementById('question');
var $score = document.getElementById('score');
var $feedback = document.getElementById('feedback');
var $start = document.getElementById("start");
var $form = document.getElementById('answer');

/// view functions
function update(element,content,klass){
    var p = element.firstChild || document.createElement('p');
    p.textContent = content;
    element.appendChild(p);
    if(klass){
        p.className = klass;
    }
}

function hide(element){
    element.style.display = 'none';
}
function show(element){
    element.style.display = 'block';
}

//  Button Start Event Listeners
$start.addEventListener("click",function(){play(quiz)},false);

hide($form);

function play(quiz){
    var score = 0; // initialize score
    update($score,score);

    hide($start);
    show($form);

    $form.addEventListener('submit',function(event){
        event.preventDefault();
        check($form[0].value);
    },false);
    // main game loop
    /*
    for(var i = 0, question, answer, max = quiz.questions.length; i<max; i++){
       question=quiz.questions[i].question;
       answer = ask(question);
       check(answer);
    }
    */
    var i = 0;
    chooseQuestion();
    // end of main game loop
    //gameOver();
    
    function ask(question){
        update($question,quiz.question + question);
        // return prompt(quiz.question + question);
        $form[0].value = "";
        $form[0].focus();
    }

    function check(answer){
        if(answer === quiz.questions[i].answer){
            update($feedback,'Correct!','right');
            //if(answer === quiz[i][1]){ // quiz[i][1] is the ith answer
            //increase score by 1
            score++;
            update($score,score);
        }else{
            update($feedback,'Wrong!','wrong');
        }
        i++;
        if (i === quiz.questions.length) {
            gameOver();
        }
        else{
            chooseQuestion();
        }
    }
    function gameOver(){
        // inform the player that the game 
        // has finished and tell them how many points they have
        update($question,'Game Over, you scored '+score+' points');
        hide($form);
        show($start);
    }
    function chooseQuestion() {
        var question = quiz.questions[i].question;
        ask(question);
    }
}