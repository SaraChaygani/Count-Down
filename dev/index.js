import { currentDatetime, ConverDateFormat } from "../utility/untilities.js";

document.querySelector('.current-date-time').value = currentDatetime();

const dueDateElement = document.querySelector('.date-time-to');
dueDateElement.value = ConverDateFormat(localStorage.getItem('dueDateValue'));
dueDateElement.setAttribute('min', currentDatetime());


const countDown = ()=>{
    // let dueDateValue = new Date(localStorage.getItem('dueDateValue'));
    let timerInterval;
    timer();
    //Getting the elements from html
    const daysElement = document.querySelector('.js-counter-days');
    const hoursElement = document.querySelector('.js-counter-hours');
    const minutesElement = document.querySelector('.js-counter-minutes');
    const secondsElement = document.querySelector('.js-counter-seconds');

    function displayTime(timeSpan){
        daysElement.textContent = Math.floor(timeSpan / 86400);
        hoursElement.textContent = Math.floor((timeSpan % 86400) / 3600);
        minutesElement.textContent = Math.floor((timeSpan % 86400) % 3600 / 60);
        secondsElement.textContent = Math.floor(timeSpan % 60 < 10 ? `0${timeSpan % 60}` : timeSpan % 60);   
     }
    //Setting an interval that rcalculate the difference every second and displays it on the page.
    function timer(){
        let dueDateValue = new Date(localStorage.getItem('dueDateValue'));
         timerInterval = setInterval(() => {
            const now = new Date(); //current date : today
            const timeDifferenceInSeconds = (dueDateValue - now) / 1000; // time span (difference) in milliseconds devided by 1000 to give us the difference in seconds. 
            if(timeDifferenceInSeconds <= 0){
                clearInterval(timerInterval);
                return;
            }
            displayTime(timeDifferenceInSeconds);
        }, 1000);
       }

       //on every datetime change the timer will be rest and count down the new date.
       
       dueDateElement.addEventListener('change' ,()=> {
        clearInterval(timerInterval);
        localStorage.clear();
            localStorage.setItem('dueDateValue', new Date(dueDateElement.value));
            timer();  
    });   

    dueDateElement.addEventListener('input', () => {
        if(!dueDateElement.value){
            dueDateElement.value = currentDatetime();
            localStorage.setItem('dueDateValue', new Date());
            displayTime(0);
        }
    })
}
countDown();