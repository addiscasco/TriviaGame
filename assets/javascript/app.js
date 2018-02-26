var quiz = [
    [1, "Who loves Kanye the most?", "Kanye"],
    [2, "Which Kardashian sister has the ugliest cry face?", "Kim"],
    [3, "Which of the following is Kim known for the most?", "Selfies"],
    [4, "Which song did Kanye write about Kim?", "Awesome"],
    [5, "Who does Kanye compare himself to?", "All of the above"],
];

var answer;
var response;
var correct = 0;
var wrong = 0;

for (var i = 0; i < quiz.length; i++){

    answer = prompt(quiz[i][1]);
    //storing answer to response
    response = answer.toLowerCase();
    //
    if (response===quiz[i][2]) {
        document.write(`<h2>You got question ${quiz[i][0]} correct </h2>`);
        correct++;
    }
    
    else{
        document.write(`<h2>You got question ${quiz[i][0]} wrong </h2>`);
        wrong++;
        console.log(wrong);
    }

}

