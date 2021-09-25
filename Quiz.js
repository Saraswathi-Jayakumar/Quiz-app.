






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
        Question: "1. Who won a silver in weightlifting at the Tokyo Olympics?",
        Option: [
            "Khumukcham Sanjita Chanu",
            "Saikhom Mirabai Chanu",
            "Punam Yadav",
            "Renu Bala Chanu"
        ],
        Ans:"Saikhom Mirabai Chanu",
    },

    {
        Question: "2. She is currently ranked as the world's No.1 archer. Who is she?",
        Option: [
            "Ankita Bhakat",
            "Deepika Kumari",
            "Muskan Kirar",
            "Trisha Deb"
        ],
        Ans:"Deepika Kumari", 
    },

    {
        Question: "3. Who is the javelin thrower from Panipat?",
        Option: [
            "Neeraj Chopra",
            "Ravinder Singh Khaira",
            "Gurtej Singh",
            "Shivpal Singh"
        ],
        Ans:"Neeraj Chopra", 
    },

    {
        Question: "4. Who is current national champion of the women's 100 metres sprint?",
        Option: [
            "Bhawna Jat",
            "Priyanka Goswami",
            "Dutee Chand",
            "Annu Rani"
        ],
        Ans:"Dutee Chand", 
    },
                
    {
        Question: "5. Who is the first Indian woman to win a silver medal at the Olympics?",
        Option: [
            "Ankita Raina",
            "P V Sindhu",
            "Jwala Gutta",
            "Ashwini Ponnappa"
        ],
        Ans:"P V Sindhu",
    },
            
    {
        Question: "6. Who is the first Indian fencer to qualify for the Olympics?",
        Option:[
            "Kabita Devi",
            "Aditi Ashok",
            "Yashaswini Singh Deswal",
            "Bhavani Devi"
        ],
        Ans:"Bhavani Devi",
    },
            
    {
        Question: "7. Who is the captain of the Indian men's field hockey team?",
        Option:[
            "Manpreet Singh",
            "Harmanpreet Singh",
            "Hardik Singh",
            "Gujrant Singh"
        ],
        Ans:"Manpreet Singh"
    },  

    {
        Question:"8. Who is the captain of the Indian women's hockey team?",
        Option:[
            "Vandana Katariya",
            "Rani Rampal",
            "Gurjit Kaur",
            "Neha Goyal"
        ],
        Ans:"Rani Rampal"
    },
            
    {
        Question:"9. The boxer who won a bronze at the Tokyo Olympics. Can you name her?",
        Option:[
            "Lovlina Borgohain",
            "Pooja Rani",
            "Mary Kom",
            "Simranjit Kaur"
        ],
        Ans:"Lovlina Borgohain"
    },
            
    {
        Question:"10. Who is two-time Asian champion wrestler?",
        Option:[
            "Bajrang Punia",
            "Yogeshwar Dutt",
            "Ravi Kumar Dahiya",
            "Deepak Punia"
        ],
        Ans:"Ravi Kumar Dahiya"
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
