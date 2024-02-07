let questions= [
    {
        id: 1,
        question: "Which is not the storage class specifier in C ? ",
        answer: "volatile",
        option: [
            "auto",
            "register",
            "volatile",
            "static"
        ]
    },
    {
        id: 2,
        question: "Which is valid C expression?",
        answer: "int my_num = 100000;",
        option: [
            "int my_num = 100,000;",
            "int my_num = 100000;",
            "int my num = 1000;",
            " int $my_num = 10000;"
        ]
    },
    {
        id: 3,
        question: "Which of the following cannot be a variable name in C?",
        answer: "volatile",
        option: [
            "volatile",
            "true",
            "friend",
            "export"
        ]
    },
    {
        id: 4,
        question: "What is short int in C programming?",
        answer: "Short is the qualifier and int is the basic data type",
        option: [
            "The basic data type of C",
            "Qualifier",
            "Short is the qualifier and int is the basic data type",
            " All of the mentioned"
        ]
    },
    {
        id: 5,
        question: "Which of the following declaration is not supported by C language?",
        answer: "String str;",
        option: [
            "String str;",
            "char *str;",
            "float str = 3e2;",
            "Both String str; & float str = 3e2;"
        ]
    },
    {
        id: 6,
        question: "What is the result of logical or relational expression in C?",
        answer: "0 or 1",
        option: [
            "True or False",
            "0 if an expression is false and any positive number if an expression is true",
            "0 or 1",
            "None of the mentioned"
        ]
    },
    {
        id: 7,
        question: "Where in C the order of precedence of operators do not exist?",
        answer: "None of the mentioned",
        option: [
            "Within conditional statements, if, else",
            "Within while, do-while",
            "Within a macro definition",
            "None of the mentioned"
        ]
    },
    {
        id: 8,
        question: " Functions in C Language are always _________",
        answer: "External",
        option: [
            "Internal",
            "External",
            "Both Internal and External",
            "External and Internal are not valid terms for functions"
        ]
    },
    {
        id: 9,
        question: "Which of following is not accepted in C?",
        answer: "static static int a; //a static variable prefixed with static",
        option: [
            "static a = 10; //static as",
            "static int func (int); //parameter as static",
            "static static int a; //a static variable prefixed with static",
            "all of the mentioned"
        ]
    },
    {
        id: 10,
        question: "What is #include <stdio.h>?",
        answer: "Preprocessor directive",
        option: [
            "Preprocessor directive",
            "Inclusion directive",
            "File inclusion directive",
            "None of the mentioned"
        ]
    },
];

let question_count = 0;
let point= 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions")
    let[first, second, third, fourth] = questions[count].option;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <div class="option1">
    <button class="option" onclick="" id="op1">${first}</button>
    <button class="option" id="op2">${second}</button>
    <button class="option" id="op3">${third}</button>
    <button class="option" id="op4">${fourth}</button>
    </div>`;
    togglActive();

}


function togglActive(){
    let option = document.querySelectorAll("button.option");
    for(let i=0; i <option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i< option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);

    let user_answer = document.querySelector("button.option.active").innerHTML;

    if(user_answer == questions[question_count].answer){
        point+=10;
        sessionStorage.setItem("points",point);
    }
    
    console.log(point);

    question_count++;
    show(question_count);
}




