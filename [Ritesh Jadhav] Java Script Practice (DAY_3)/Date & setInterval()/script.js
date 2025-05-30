function logDate() 
{
    const now = new Date();
    document.getElementById('dateOutput').textContent = now.toString();
    console.log(now);
}

let clockInterval = null;
function startClock() {
    stopClock();
    clockInterval = setInterval(() => {
    document.getElementById('clockOutput').textContent = new Date().toLocaleTimeString();
    }, 1000);
}
function stopClock() {
    if (clockInterval) clearInterval(clockInterval);
    clockInterval = null;
}

function compareDates() {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2024-01-01');
    let result = '';
    if (date1 < date2) {
        result = '2023-01-01 is earlier than 2024-01-01';
    } 
    else if (date1 > date2) {
        result = '2024-01-01 is earlier than 2023-01-01';
    } 
    else {
        result = 'Both dates are the same';
    }
    document.getElementById('compareOutput').textContent = result;
    console.log(result);
}

let timerInterval = null;
function startTimer() {
    let count = 0;
    document.getElementById('timerOutput').textContent = count;
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        count++;
        document.getElementById('timerOutput').textContent = count;
        if (count === 10) clearInterval(timerInterval);
    }, 1000);
}