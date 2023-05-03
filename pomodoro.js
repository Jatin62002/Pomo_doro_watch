//BOOTSTRAP MODEAL
const applymodal=new bootstrap.Modal('#exampleModal')

//NAVIGATION VARIABLES;
const pomodoro = document.querySelector('.pomodoro')
const shortbreak = document.querySelector('.shortbreak')
const longbreak = document.querySelector('.longbreak')

//TIMEANDCIRCLE;
let pomodorocircletime = document.querySelector('.timecircle1');
let shortcircletime = document.querySelector('.timecircle2');
let longcircletime = document.querySelector('.timecircle3');

//TIME VARIABLES;
let pomodorotime = document.querySelector('.time1');
let shorttime=document.querySelector('.time2');
let longtime=document.querySelector('.time3');

//START-BTN VARIABLES
let pomostart = document.querySelector('.START1')
let shortstart = document.querySelector('.START2')
let longstart = document.querySelector('.START3')

//CIRCLE VARIABLES;
let circleborder1 = document.querySelector('.circle1');
let circleborder2 = document.querySelector('.circle2');
let circleborder3 = document.querySelector('.circle3');


//TIME INPUT VARAIBLES;
//=================================

let pomoinput=document.querySelector('.pomodoro-input');
let shortinput=document.querySelector('.short-input');
let longinput=document.querySelector('.long-input')


//TIME SETUP DECLARES;
//==============================
let pomotime = 1800;
let pomofixedtime = pomotime;
let short_time = 300;
let shortfixedtime = short_time;
let long_time = 900;
let longfixedtime = long_time;


//WHEN NAVBAAR-BTN CLICK
//===================================

pomodoro.onclick = function () {
    pomodoro.classList.add('nav-active');
    shortbreak.classList.remove("nav-active");
    longbreak.classList.remove('nav-active');
    pomodorocircletime.classList.add('show-circle');
    shortcircletime.classList.remove('show-circle');
    longcircletime.classList.remove('show-circle');
}

shortbreak.onclick = function () {
    pomodoro.classList.remove('nav-active');
    shortbreak.classList.add("nav-active");
    longbreak.classList.remove('nav-active');
    pomodorocircletime.classList.remove('show-circle');
    shortcircletime.classList.add('show-circle');
    longcircletime.classList.remove('show-circle');
}

longbreak.onclick = function () {
    pomodoro.classList.remove('nav-active');
    shortbreak.classList.remove("nav-active");
    longbreak.classList.add('nav-active');
    pomodorocircletime.classList.remove('show-circle');
    shortcircletime.classList.remove('show-circle');
    longcircletime.classList.add('show-circle');
}


//CONVERT SECONDS TO MINUTES FUNCTION
//=========================================

function time(second) {
    let minutes = Math.floor(second / 60);
    let sec = second % 60;
    if (sec < 10 && minutes < 10) {
        return `0${minutes}:0${sec}`;
    }
    if (sec < 10) {
        return `${minutes}:0${sec}`;
    }
    if (minutes < 10) {
        return `0${minutes}:${sec}`;
    }
    return `${minutes}:${sec}`
}


//CIRCLE BORDER RDUCE BY TIME FUNCTION
//===========================================

function circletime(variacetime,fixedtime,border){
    //FIRST WE CALCULATE TIME-PERCENTAGE:    
    const timepercent = variacetime/fixedtime * 100; //(100)

    //THEN WE CALCULATE CIRCUMFERENCE OF CIRCLE:
    const circlecircum = 2 * Math.PI * 150  //(942.857)

    //THEN WE EQUAL 1% TO CIRCUMFERNCE (100/100 = 942.857)
    const reducecircle = (timepercent / 100) * circlecircum

    //THEN WE FIND 'strokeDashoffset' value by recduce% minus from circumfernce.
    const timereduce = circlecircum - reducecircle;

    //THEN WE APPLY CSS PROPERTY("strokedashoffset") IN SVG CIRCLE STROK AND PASS VALUE("timereduce")
    border.style.strokeDashoffset = `${timereduce}`
}


//START-BTN FUNCTION
//===========================================

pomostart.onclick = function () {
    Interval = setInterval(pomostarttime, 1000);
    function pomostarttime() {
        pomotime--;
        if (pomotime == 0) {
            clearInterval(Interval)
        }
        pomodorotime.innerHTML = time(pomotime);
        circletime(pomotime,pomofixedtime,circleborder1)
    }
}


shortstart.onclick=function(){
    shortInterval=setInterval(shortstarttime,1000);
    function shortstarttime(){
        short_time--;
        if(short_time==0){
            clearInterval(shortInterval);
        }
        shorttime.innerHTML=time(short_time);
        circletime(short_time,shortfixedtime,circleborder2)
    }
}


longstart.onclick=function(){
    longInterval=setInterval(longstarttime,1000);
    function longstarttime(){
        long_time--;
        if(long_time==0){
            clearInterval(longInterval);
        }
        longtime.innerHTML=time(long_time);
        circletime(long_time,longfixedtime,circleborder3);
    }
}


//RESET-BTN FUNCTIONS
//=====================

function resetbtn1(){
    pomotime=pomoinput.value*60;
    pomodorotime.innerHTML=time(pomotime);
    circleborder1.style.strokeDashoffset='0';
}

function resetbtn2(){
    short_time=shortinput.value*60;
    shorttime.innerHTML=time(short_time);
    circleborder2.style.strokeDashoffset='0';
}

function resetbtn3(){
    long_time=longinput.value*60;
    longtime.innerHTML=time(long_time);
    circleborder3.style.strokeDashoffset='0';
}


//APPLY-BTN SETTING
//======================================

function applysetting(){
    let pomoinputvalue=pomoinput.value;
    pomotime=pomoinputvalue*60;
    pomofixedtime=pomotime;
    pomodorotime.innerHTML=time(pomotime);
    circletime(pomotime,pomofixedtime,circleborder1);

    let shortinputvalue=shortinput.value;
    short_time=shortinputvalue*60;
    shortfixedtime=short_time;
    shorttime.innerHTML=time(short_time);
    circletime(short_time,shortfixedtime,circleborder2);

    let longinputvalue=longinput.value;
    long_time=longinputvalue*60;
    longfixedtime=long_time;
    longtime.innerHTML=time(long_time);
    circletime(long_time,longfixedtime,circleborder3);


    let body=document.querySelector('body');
    let theme=document.querySelector(':root');
   
    let Aerial=document.getElementById('Aerial')
    let tnrfont=document.getElementById('TNR')
    let italicfont=document.getElementById('Italic')
    if(Aerial.checked){
        body.style.fontFamily="Arial, Helvetica, sans-serif"
        body.style.fontStyle="normal"
    }else if(tnrfont.checked){
        body.style.fontFamily="'Times New Roman', Times, serif"
        body.style.fontStyle="normal"
    }else if(italicfont.checked){
        body.style.fontStyle="italic"
    }

    let peach=document.getElementById('Peach')
    let greenyellow=document.getElementById('greenyellow');
    let yellow=document.getElementById('yellow');
    if(peach.checked){
        theme.style.setProperty('--themecolor--',"rgb(255, 80, 103)");
    }else if(greenyellow.checked){
        theme.style.setProperty('--themecolor--',"greenyellow");
    }else if(yellow.checked){
        theme.style.setProperty('--themecolor--',"yellow");
    }
    applymodal.hide();
}