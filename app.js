// window.onload = 'questionsArray[0]'

//Question Array
var questionsArray = [{
    question: "What is extension of javascript?",
    answer: "js",
    option: ["docx", "js", "html", "css"]
}, {
    question: "Which tag use for heading?",
    answer: "h1",
    option: ['button', 'img', 'h1', 'a']
}, {
    question: "Can we use attribute in any tag?",
    answer: "yes",
    option: ['yes', 'no', 'may be', 'never']
}];

//Create Timer
let Time = document.getElementById('time');
let sec = 0,
    mints = 0,
    interval,
    secHeading = document.getElementById('sec'),
    mintsHeading = document.getElementById('mint');

function timer() {
    sec++;
    secHeading.innerHTML = sec + " sec";
    if (sec >= 60) {
        mints++;
        mintsHeading.innerHTML = mints + " mints";
        sec = 0;
    }
    if (mints == 5) {
        secHeading.innerHTML = "0 sec";
        sec = 0;
        stop();
    }
}

function start() {
    setInterval(timer, 1000);
}
// start()

function stop() {
    clearInterval(start)
}
let questionCount = 0;
let questionCountHeading = 1;
let heading = document.getElementById('heading');

// Next Button Function for next question
function show() {
    questionCount++
    nextQuesiton(questionCount);
    questionCountHeading++
    heading.innerHTML = "QUIZ APP <br>Question " + questionCountHeading + "/3";
    if (questionCount == 2) {
        submit()
    }
    // check()


}
let id = document.getElementById('q1');
let op1 = document.getElementById('opt1');
let op2 = document.getElementById('opt2');
let op3 = document.getElementById('opt3');
let op4 = document.getElementById('opt4');

//First Question Show
function showQuestion() {
    heading.innerHTML = "QUIZ APP <br>Question 1/3";
    id.innerHTML = questionsArray[0].question;
    op1.innerHTML = questionsArray[0].option[0];
    op2.innerHTML = questionsArray[0].option[1];
    op3.innerHTML = questionsArray[0].option[2];
    op4.innerHTML = questionsArray[0].option[3];

}

showQuestion()

// Next Question Render in Screen
function nextQuesiton(y) {
    id.innerHTML = questionsArray[y].question;
    let optionsElement = document.getElementsByClassName('btn');
    for (var i = 0; i < 4; i++) {
        optionsElement[i].innerHTML = questionsArray[y].option[i];

    }


}

let score = document.getElementById('score');
let scoreCount = 0;

function check(e) {
    for (var i = 0; i < questionsArray.length; i++) {
        if (e.innerHTML == questionsArray[i].answer) {
            console.log(scoreCount += 10);
            e.disabled = true;
        }
    }
}



function submit() {
    let Nbtn = document.getElementById("Nbtn")
    Nbtn.disabled = true
    Nbtn.remove()
    let submitBtn = document.createElement('button')
    let submitBtnText = document.createTextNode('Submit')
    submitBtn.setAttribute('class', 'btnNext')
    submitBtn.appendChild(submitBtnText);
    let SubmitPage = document.createElement('a')
    SubmitPage.setAttribute('href', 'newindex.htm')
    SubmitPage.appendChild(submitBtn)
    let div = document.getElementById('btn')
    div.appendChild(SubmitPage)
}