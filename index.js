let bttnGo = document.querySelector('.bttn-go');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let calcContainer = document.querySelector('.container-calc');
let result = document.createElement('p');

bttnGo.addEventListener('click', () => calculate(hours, minutes));

window.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        calculate(hours, minutes);
    } else {
        return;
    }
})


function calculate (hrs, min) {
    if (hrs.value == '' || min.value == '') {
        result.textContent = 'Both fields must be filled out.';
        calcContainer.appendChild(result);
        return;
    } else {
        let toMinutes = Math.round((Number(minutes.value) / 100) * 60);
        let hrs = Number(hours.value);
        postResult(hrs, toMinutes);
    }
}

function postResult (hrs, min) {
    if (hrs < 2) {        
        result.textContent = `${hrs} hour and ${min} minutes.`;
        calcContainer.appendChild(result);
        return;
    }
    result.textContent = `${hrs} hours and ${min} minutes.`;
    calcContainer.appendChild(result);
}