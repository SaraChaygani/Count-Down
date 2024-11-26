import { currentDatetime } from "../untility/untilities.js";

//testing fixed dates.
const dueDate = new Date(2024, 10, 28, 18, 2, 5);


// extracting time components of due date. the due date should be greater than the current date.
function ExtractTimeComponents(dueDateValue){

    //time span between the current date and the due date.
    const now = new Date(); //current date : today
    const timeSpan = dueDateValue - now; // time span (difference) in milliseconds. 
    console.log(`Now: ${now}\nDue date: ${dueDate}\nTime span: ${timeSpan}`);

    //save second, minute, hour, and day equivalent time value in milliseconds.
    const timeUnitsInMilliseconds ={
        second: 1000, //1000 ms
        minute: 1000 * 60, // 60,000 ms
        hour: 1000 * 60 * 60, //3,600,000 ms
        day: 1000 * 60 * 60 * 24 //86,400,000 ms
    }

    // Convert milliseconds to total days.
    let days = Math.floor(timeSpan / timeUnitsInMilliseconds.day);

    //calculate the remaining hours after extracting the days.
    let hours = Math.floor((timeSpan % timeUnitsInMilliseconds.day) / timeUnitsInMilliseconds.hour);

    //calculate the remaining minutes after extrating the hours.
    let minutes = Math.floor((timeSpan % timeUnitsInMilliseconds.hour) / timeUnitsInMilliseconds.minute);

    //calculate the remaining seconds after extracting the minutes.
    let seconds = Math.floor((timeSpan % timeUnitsInMilliseconds.minute) / timeUnitsInMilliseconds.second);

    console.log(`days: ${days} - hours: ${hours} - minutes: ${minutes} - seconds: ${seconds}`);

    let timeUnitesMap = new Map([[days, timeUnitsInMilliseconds.day] , [hours, timeUnitsInMilliseconds.hour], [minutes, timeUnitsInMilliseconds.minute], [seconds, timeUnitsInMilliseconds.second]]);
    return timeUnitesMap;
}

ExtractTimeComponents(dueDate);

function countDown(dueDateValue){
    const timeMap = ExtractTimeComponents(dueDate);
    let countDownInterval;
    timeMap.forEach((key, value) => {
        while(key > 0)
        {
            countDown = setInterval(() => {
                key--;
            }, value);
        }
        clearInterval(countDown);
        
    });

}
