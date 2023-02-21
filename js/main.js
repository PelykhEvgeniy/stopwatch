const hours = document.querySelector(".header__hours");
const minutes = document.querySelector(".header__minutes");
const seconds = document.querySelector(".header__seconds");
const startBtn = document.querySelector(".start-btn");
const pauseBtn = document.querySelector(".pause-btn");
const stopBtn = document.querySelector(".stop-btn");
let interval;
let hour = 0;
let minut = 0;
let second = 0;

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
stopBtn.addEventListener('click', stopTimer);


function startTimer(){
    interval = setInterval(() => {
        second++;
        if(second === 60){
            minut++;
            second = 0; 
        if(minut === 60){
            minut = 0;
            hour++;
        }    
    }
        hours.innerHTML = `${hour< 10 ? "0" + hour : hour}`;
        minutes.innerHTML =`${minut < 10 ? "0" + minut : minut}`;
        seconds.innerHTML = `${second < 10 ? "0" + second : second}`;
    }, 1000);
};

function pauseTimer(){
    clearInterval(interval);
};

function stopTimer(){
        hour = 0;
        minut = 0;
        second = 0;
        clearInterval(interval);
        hours.innerHTML =  `${hour}0`;
        minutes.innerHTML = `${minut}0`;
        seconds.innerHTML = `${second}0`;
        
};