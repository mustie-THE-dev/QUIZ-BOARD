{let userName = document.querySelector("#userName");
let topText = document.querySelector("#topText");
let helloInput = document.querySelector("#helloInput");

}
function hello() {
    topText.innerHTML = ""
    topText.innerHTML = "Hello" + userName.value + " ,  Welcome to QuizBoard.";
    helloInput.style.display = "none"
}