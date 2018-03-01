

var quiz = [
    {
        question: ["Who loves Kanye the most?"],
        options: ["Donda", "Kim","Kanye", "North"],
        correctAnswer: "c"
    },
    {
        question: ["Which Kardashian sister has the ugliest cry face?"],
        options: ["sdf", "dfsd","sdfsd", "sdfsdf"],
        correctAnswer: "d"
    },
    {
        question: ["Which of the following is Kim known for the most?"],
        options: ["sdf", "dfsd","sdfsd", "sdfsdf"],
        correctAnswer: "a"
    },
    {
        question: ["Who does Kanye compare himself to?"],
        options: ["sdf", "dfsd","sdfsd", "sdfsdf"],
        correctAnswer: "c"
    },
    {
        question: ["Which song did Kanye write about Kim?"],
        options: ["sdf", "dfsd","sdfsd", "sdfsdf"],
        correctAnswer: "c"
    }
];



for (var i = 0; i <quiz.length; i++){
    $(".question#questionOne").text(quiz[0].question[0]);
    $(".question#questionTwo").text(quiz[1].question[0]);
    $(".question#questionThree").text(quiz[2].question[0]);
    $(".question#questionFour").text(quiz[3].question[0]);
    $(".question#questionFive").text(quiz[4].question[0]);
//allquestions = (quiz[i].question);

//$("<input type='radio' name='1q1' value='a' id='q1a'/>" ).appendTo("#radioBtn");

$('label[for=test1]').html(quiz[0].options[0]);
$('label[for=test2]').html(quiz[0].options[1]);
$('label[for=test3]').html(quiz[0].options[2]);
$('label[for=test4]').html(quiz[0].options[3]);

};









// var chbx= "<input type='radio' name='1q1' value='a' id='q1a'>",
// <input type='radio' name='1q2' value='b' id='q1b'>
// <input type='radio' name='1q3' value='c' id='q1c'>
// <input type='radio' name='1q4' value='d' id='q1d'>
// <input type='radio' name='1q5' value='e' id='q1e'>

// $("#triviaQuiz").html("<form id='quizForm'>" +chbx + "'</form>");

// for (var i = 0; i < quiz.length; i++){

//     function getQuestion(question) {
//         return question 
//     }

//     function myFunction {
//         document.getElementById("questionOne").innerHTML=quiz.find(getQuestion);
//     }
//     // document.createElement
//     //$(".question").text(quiz.question[i]);
// };



