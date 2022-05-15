{let userName =  document.querySelector("#userName");
let topText = document.querySelector("#topText");
let helloInput = document.querySelector("#helloInput");
let quiz = document.querySelector("#quiz");
let ansA = document.querySelector("#ansA");
let ansB = document.querySelector("#ansB");
let ansC= document.querySelector("#ansC");
let ansD = document.querySelector("#ansD");
let qnChoice = "";
let score="0";
let qn = document.querySelector("#qn");

}



function hello() {
    topText.innerHTML = ""
    topText.innerHTML = "Hello" + userName.value + " ,  Welcome to QuizBoard.";
    helloInput.style.display = "none"
     quiz.style.display = "block";
     qn.innerHTML = "What is the capital city of Rwanda?"
    
}

function aFunction(){
    ansA.style.color = "red";
    ansB.style.color = "floralwhite";
    ansC.style.color = "floralwhite";
    ansD.style.color = "floralwhite";
    qnChoice = "a";
}
function bFunction(){
    
    ansA.style.color = "floralwhite";
    ansB.style.color = "red";
    ansC.style.color = "floralwhite";
    ansD.style.color = "floralwhite";
    qnChoice = "b";
}
function cFunction(){
    ansA.style.color = "floralwhite";
    ansB.style.color = "floralwhite";
    ansC.style.color = "red";
    ansD.style.color = "floralwhite";
    qnChoice = "c";
}
function dFunction(){
    ansA.style.color = "floralwhite";
    ansB.style.color = "floralwhite";
    ansC.style.color = "floralwhite";
    ansD.style.color = "red"
    qnChoice = "d";
}

function submitQ1() {
    if (qnChoice == "a") {
        score =+ 1;
    }
    
    


}