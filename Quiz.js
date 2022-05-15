{let userName = document.querySelector("#userName");
let topText = document.querySelector("#topText");
}
function hello() {
    topText.innerHTML = ""
    topText.innerHTML = "Hello" + userName.value + " ,  Welcome to QuizBoard.";
}