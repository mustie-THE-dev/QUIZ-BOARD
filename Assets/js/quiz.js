
  
function confirm(){
    var score=0;
    var percentage = 0;
    var divided = 0;
    if (document.getElementById("correct1").checked) {
        score++;
    }
    if (document.getElementById("correct2").checked) {
        score++;
    }
    if (document.getElementById("correct3").checked) {
        score++;
    }
    if (document.getElementById("correct4").checked) {
        score++;
    }
    if (document.getElementById("correct5").checked) {
        score++;
    }
    
    alert("Tap Ok to view"); 
    divided = score/5;
    percentage = divided * 100;
    //grading the student
    if(percentage >= 80){        
        document.write("Your score is:"  + score + "  EXcellent Results");
    }
    else if(percentage >= 50 && percentage <=79){
        document.write("Your score is:" + score + "  Perfomed Fairly");
    }
    else{
        document.write("Your score is:" + score + "  You have failed.Retake test");
    }
}