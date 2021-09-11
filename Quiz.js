






var duration = document.getElementById("timer").innerHTML;
var seconds = 0;
var mins = 0;
var x = setInterval(function(){
    ++seconds;
    document.getElementById("timer").innerHTML = duration+" "+mins+":"+seconds;
    if(seconds>=60){
        seconds = 0;
        mins++;
    }
    if(mins==5){
        mins=0;
    }
}, 1000);

function reset(){
    clearInterval(x);
}

const questions=[
    {
        Question: "1. A ------------ is a set of text or button hyperlinks that can be used to access pages in your website?",
        Option: [
            "Map bar",
            "Navigation bar",
            "Direction bar",
            "Route bar"
        ],
        Ans:"Navigation bar",
    },

    {
        Question: "2. Program used to view Web Pages?",
        Option: [
            "Browser",
            "Source",
            "Text Editor",
            "Notepad"
        ],
        Ans:"Browser", 
    },

    {
        Question: "3. What is the name of the location address of the hypertext documents?",
        Option: [
            "Uniform Resource Locator",
            "Web server",
            "File",
            "Web address"
        ],
        Ans:"Uniform Resource Locator", 
    },

    {
        Question: "4. ------------ is a collection of controls in HTML",
        Option: [
            "Form",
            "Field",
            "Table",
            "Frame"
        ],
        Ans:"Form", 
    },
                
    {
        Question: "5. HTML allows us to use ------ levels of headings.",
        Option: [
            "Two",
            "Three",
            "Five",
            "Six"
        ],
        Ans:"Six",
    },
            
    {
        Question: "6. Which is the formal description of message formats and rules to be followed by computers?",
        Option:[
            "Standards",
            "Protocol",
            "Syntax",
            "Language"
        ],
        Ans:"Protocol",
    },
            
    {
        Question: "7. Which of the following attributes specifies the name of the image file?",
        Option:[
            "Font",
            "SRC",
            "Color",
            "Size"
        ],
        Ans:"SRC"
    },  

    {
        Question:"8. The communication protocol used by the Internet to transfer hypertext documents is ------------?",
        Option:[
            "Hyper Text Internet Protocol",
            "Hyper Text Transfer Protocol",
            "Internet Protocol",
            "File Transfer Protocol"
        ],
        Ans:"Hyper Text Transfer Protocol"
    },
            
    {
        Question:"9. The primary colors are -------- ?",
        Option:[
            "Red, green, yellow",
            "Red, white, yellow",
            "Red, green, blue",
            "Red, yellow, blue"
        ],
        Ans:"Red, green, blue"
    },
            
    {
        Question:"10. Transferring your HTML code from one machine to server is known as ------------?",
        Option:[
            "Indexing",
            "Hosting",
            "Serving",
            "Sorting"
        ],
        Ans:"Hosting"
    },
];       

var y = questions.length;

var wrong=[];

var i=0;

document.getElementById("caption").innerHTML = i+1+' of '+ y;
document.getElementById("Quest").innerHTML = questions[i].Question;
document.getElementById("btn1").innerHTML=questions[i].Option[0];
document.getElementById("btn2").innerHTML=questions[i].Option[1];
document.getElementById("btn3").innerHTML=questions[i].Option[2];
document.getElementById("btn4").innerHTML=questions[i].Option[3];

var select1=document.getElementById("btn1");
var select2=document.getElementById("btn2");
var select3=document.getElementById("btn3");
var select4=document.getElementById("btn4");

var selection = [select1, select2, select3, select4];
var j=0;

selection[0].addEventListener('click', selectOption);
selection[1].addEventListener('click', selectOption1);
selection[2].addEventListener('click', selectOption2);
selection[3].addEventListener('click', selectOption3);

function clearOption(){
    for(j=0; j<=selection.length-1;){
        if(selection[j].style.backgroundColor=='rgb(6, 88, 129)'){
            selection[j].style.backgroundColor='rgb(58, 79, 102)';
        }
    j++;
    }
}

function selectOption(){
    clearOption();
    selection[0].style.backgroundColor='rgb(6, 88, 129)';
    ChoosePopUp.style.visibility="hidden";
}
function selectOption1(){
    clearOption();
    selection[1].style.backgroundColor='rgb(6, 88, 129)';
    ChoosePopUp.style.visibility="hidden";
}
function selectOption2(){
    clearOption();
    selection[2].style.backgroundColor='rgb(6, 88, 129)';
    ChoosePopUp.style.visibility="hidden";
}
function selectOption3(){
    clearOption();
    selection[3].style.backgroundColor='rgb(6, 88, 129)';
    ChoosePopUp.style.visibility="hidden";
}

var marks = 0;

var nextButton = document.getElementById("next");

nextButton.addEventListener('click',nextQuestion);

var submitButton = document.getElementById("submit");

submitButton.style.visibility = "hidden";

submitButton.addEventListener('click', viewScore);

var checkButton = document.getElementById("Check");

checkButton.style.visibility="hidden";

checkButton.addEventListener('click', checkWithAnswer);

var ChoosePopUp = document.getElementById('ChooseMe');

ChoosePopUp.style.visibility = "hidden";

var myOption;

var a;

function checkingOption() {
    a = 0;
    for(j=0;j<=selection.length-1;){
        if(selection[j].style.backgroundColor=='rgb(6, 88, 129)'&&
            selection[j].innerHTML==questions[i].Ans){
            marks++;
            }
        if(selection[j].style.backgroundColor=='rgb(6, 88, 129)'&&
            selection[j].innerHTML!=questions[i].Ans){
            myOption=selection[j].innerHTML;
            wrong.push(myOption);
          }
        if(selection[j].style.backgroundColor!=='rgb(6, 88, 129)'){
            a++;
        }
        j++;
    }
}

function nextQuestion(){

    checkingOption();

    if(a==3){

        clearOption();

        if (i<questions.length-1){
            i++;
            document.getElementById("caption").innerHTML = i+1+' of '+ y;
            document.getElementById("Quest").innerHTML = questions[i].Question;
            document.getElementById("btn1").innerHTML=questions[i].Option[0];
            document.getElementById("btn2").innerHTML=questions[i].Option[1];
            document.getElementById("btn3").innerHTML=questions[i].Option[2];
            document.getElementById("btn4").innerHTML=questions[i].Option[3];

            if (i==questions.length-1){
                submitButton.style.visibility = "visible";
                nextButton.style.visibility = "hidden";
            }
        }

    }else
    if(a==4){

        ChoosePopUp.style.visibility="visible";
    }
}

function viewScore(){

    checkingOption();

    if(a==3){

        reset();

        document.getElementById("marks").innerHTML="Score: "+marks;
        nextButton.style.visibility ="hidden";
        submitButton.style.visibility="hidden";
        checkButton.style.visibility="visible";

        i=0;

        if (i<questions.length-1){
            document.getElementById("caption").innerHTML = i+1+' of '+ y;
            document.getElementById("Quest").innerHTML = questions[i].Question;
            document.getElementById("btn1").innerHTML=questions[i].Option[0];
            document.getElementById("btn2").innerHTML=questions[i].Option[1];
            document.getElementById("btn3").innerHTML=questions[i].Option[2];
            document.getElementById("btn4").innerHTML=questions[i].Option[3];
        
            for(j=0;j<=selection.length-1;){
                for(var k=0;k<=wrong.length-1;){
                    if(selection[j].innerHTML==wrong[k]){
                        selection[j].innerHTML=selection[j].innerHTML+" - - - "+"X";
                    }
                    k++;
                }
                if(selection[j].innerHTML!=questions[i].Ans){
                    selection[j].style.backgroundColor='rgb(119, 20, 4)';
                    }
                if(selection[j].innerHTML==questions[i].Ans){
                    selection[j].style.backgroundColor='rgb(4, 102, 20)';
                    }
                j++;
            }
            i++;
        }

    }else
    if(a==4){

        ChoosePopUp.style.visibility="visible";

    } 
}

function checkWithAnswer(){

    submitButton.style.visibility = "hidden";

    if (i<=questions.length-1){
        document.getElementById("caption").innerHTML = i+1+' of '+ y;
        document.getElementById("Quest").innerHTML = questions[i].Question;
        document.getElementById("btn1").innerHTML=questions[i].Option[0];
        document.getElementById("btn2").innerHTML=questions[i].Option[1];
        document.getElementById("btn3").innerHTML=questions[i].Option[2];
        document.getElementById("btn4").innerHTML=questions[i].Option[3];
        
    for(j=0;j<=selection.length-1;){

        for(var k=0;k<=wrong.length-1;){

            if(selection[j].innerHTML==wrong[k]){
                selection[j].innerHTML=selection[j].innerHTML+" - - - "+"X";
            }
            k++;

        }

        if(selection[j].innerHTML!=questions[i].Ans){
            selection[j].style.backgroundColor='rgb(119, 20, 4)';
            }

        if(selection[j].innerHTML==questions[i].Ans){
            selection[j].style.backgroundColor='rgb(4, 102, 20)';
            }

        j++;

    }

    if (i==questions.length-1){

        checkButton.innerHTML="Finished..!!";

    }

    i++;

    }
}
