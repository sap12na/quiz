window.onload = function(){
    show(0);
}
// questions 

let questions =[
    {
        id: 1,
        question: "what is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Run Acurate Memory",
            "Run Acept Memory",
            "none to these",
        ]
    },
    {
        id: 2,
        question: "what is the full form of CPU ?",
        answer: "Central Processing Unit",
        options: [
            "both c and b",
            "Central Preload Unit",
            "Central Program Unit",
            "Central Processing Unit",
        ]
    },
    {
        id: 3,
        question: "What is software??",
        answer: "Instructions that tell the hardware what to do",
        options: [
            "Any part of the computer that has a physical structure",
            "Instructions that tell the hardware what to do",
            "Clothig designed to be worm by computer users",
            "Flexible parts of a computer case",
        ]
    },
    {
        id: 4,
        question: "The computer’s main circuit board is called a ________.",
        answer: "motherboard",
        options: [
            "monitor",
            "bluetooth card",
            "motherboard",
            "hard drive",
        ]
    },
    {
        id: 5,
        question: "what is the full form of DBMS ?",
        answer: "Database Management System",
        options: [
            "Data manipulation system",
            "Database Memory System ",
            "Database Management System",
            "none to these",
        ]
    },
]    
function submitform(e){
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;

    // store player name
    sessionStorage.setItem("name",name);

    location.href ="quiz.html";
}

let question_count = 0;
let point = 0;

function next(){
    let user_answer = document.querySelector("li.option.active").innerHTML;
   
    //check answer by user
    if(user_answer == questions[question_count].answer) {
        point += 10;
        sessionStorage.setItem("points",point);
    } 
    if(question_count == questions.length-1) {
        sessionStorage.setItem("time",`$(minutes) minutes and $(seconds) seconds`);
        clearInterval(mytime);
        location.href = "end.html";
        return;
    }
    
      
    question_count++;
    show(question_count);
}

function  show(count){
    let question = document.getElementById("questions");

    //question.interHTML = "<h2>" + questions[count].question + "</h2>";
    question.innerHTML = `
    <h2>Q${question_count+1}. ${questions[count].question}</h2>
    <ul class="option_group">
      <li class="option">a. ${questions[count].options[0]}</li>
      <li class="option">b. ${questions[count].options[1]}</li>
      <li class="option">c. ${questions[count].options[2]}</li>
      <li class="option">d. ${questions[count].options[3]}</li>
    </ul>
    `;

    toggleActive(); 
}

function toggleActive() {
    let option  = document.querySelectorAll("li.option");

    for(let i=0; i< option.length; i++) {
        option[i].onclick = function() {
            for(let j=0; j< option.length; j++) {
                if(option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
} 