// var originalName = "If You Don't Know the Answer, Yoooou're Stupid!"

$(document).keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if($("#answerbox1").is(":focus") && keycode == '13'){
        $("#btn1").click();
    }
    else if($("#answerbox2").is(":focus") && keycode == '13'){
        $("#btn2").click();
    }
    else if($("#answerbox3").is(":focus") && keycode == '13'){
        $("#btn3").click();
    }
    
});

function gameStart () {
        $("#intro").hide();
        $("#hiddenquestion1").fadeIn(1000);
}

function gamePlay1 () {
        var x = document.forms.useranswer1.usernameinput.value;
        if (x === "") {
            alert("Hey! You have to type at least SOMETHING");
        }
        else {
            $("#hiddenquestion1").hide();
            $("#hiddenquestion2").fadeIn(1000);
        }
}

            
function gamePlay2 () {
    var y = document.forms.useranswer2.userquestinput.value;
          if (y === "") {
              alert("Hey! You have to type at least SOMETHING");
          }
          else {
              $("#hiddenquestion2").hide();
              $("#hiddenquestion3").fadeIn(1000);
          }
}

function gamePlay3 () {
    var text = document.forms.useranswer3.usercapitalinput.value;
    text = text.toLowerCase();
        if (text == "nineveh" || text == "dur sarukin" || text == "other capital"){
             $("#hiddenquestion3").hide();
             $("#correctanswerpage").fadeIn(500);
         }
         else{
             $("#hiddenquestion3").hide();
             $("#wronganswerpage").fadeIn(500);
         }
         $("#introduction").hide();
         $("#finale").fadeIn(2000);
         $("#restartbutton").fadeIn(4000);
}
               

function main() {
    $("#finale").hide();
    $("#hiddenquestion1").hide();
    $("#hiddenquestion2").hide();
    $("#hiddenquestion3").hide();
    $("#correctanswerpage").hide();
    $("#wronganswerpage").hide();
    $("#restartbutton").hide();
    $("#introduction").show();
    $("#intro").show();
    $("form[name=useranswer1]").get(0).reset();
    $("form[name=useranswer2]").get(0).reset();
    $("form[name=useranswer3]").get(0).reset();
}

$(document).ready(main);