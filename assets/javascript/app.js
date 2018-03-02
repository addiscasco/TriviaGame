var correct = 0;
var wrong = 0;
var response= [];
var quiz = [
    {//0
        question: ["Who loves Kanye the most?"],
        options: ["Donda", "Kim","Kanye", "North"],
        correctAnswer: ["c"]
    },
    {//1
        question: ["Finish this: 'You ain`t got the answers...'"],
        options: ["I got the answers", "Jay Z","Kim", "Sway"],
        correctAnswer: ["d"]
    },
    {//2
        question: ["Which of the following is Kim known for the most?"],
        options: ["Selfies", "Wearing fur","Kimoji", "Perfume line"],
        correctAnswer: ["a"]
    },
    {//3
        question: ["Who does Kanye compare himself to?"],
        options: ["Walt Disney", "Warhol","Shakespeare", "All of the above"],
        correctAnswer: ["d"]
    },
    {//4
        question: ["Which song did Kanye write about Kim?"],
        options: ["Gold Digger", "Bound 2","Awesome", "Famous"],
        correctAnswer: ["c"]
    }
];




for (var i = 0; i <quiz.length; i++){

   // questions are displaye to html
   
    $(".question#questionTwo").text(quiz[1].question[0]);
    $(".question#questionThree").text(quiz[2].question[0]);
    $(".question#questionFour").text(quiz[3].question[0]);
    $(".question#questionFive").text(quiz[4].question[0]);

    //answer options are appended to radio buttons
    $('label[for=test1]').html(quiz[0].options[0]);
    $('label[for=test2]').html(quiz[0].options[1]);
    $('label[for=test3]').html(quiz[0].options[2]);
    $('label[for=test4]').html(quiz[0].options[3]);

    $('label[for=test5]').html(quiz[1].options[0]);
    $('label[for=test6]').html(quiz[1].options[1]);
    $('label[for=test7]').html(quiz[1].options[2]);
    $('label[for=test8]').html(quiz[1].options[3]);

    $('label[for=test9]').html(quiz[2].options[0]);
    $('label[for=test10]').html(quiz[2].options[1]);
    $('label[for=test11]').html(quiz[2].options[2]);
    $('label[for=test12]').html(quiz[2].options[3]);

    $('label[for=test13]').html(quiz[3].options[0]);
    $('label[for=test14]').html(quiz[3].options[1]);
    $('label[for=test15]').html(quiz[3].options[2]);
    $('label[for=test16]').html(quiz[3].options[3]);

    $('label[for=test17]').html(quiz[4].options[0]);
    $('label[for=test18]').html(quiz[4].options[1]);
    $('label[for=test19]').html(quiz[4].options[2]);
    $('label[for=test20]').html(quiz[4].options[3]);
};

//grabs value from radio button selected
$("input:radio[name=options]").click(function(){
    var answer = $("input:radio[name=options]:checked").val();
    response.push(answer);
    console.log(response);
    

});

//submit button -click function is working
$("#submitBtn").on("click", function () {
    alert("submitted");
});


