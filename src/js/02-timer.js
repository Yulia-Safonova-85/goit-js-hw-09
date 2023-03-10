import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector('button[data-start]');
const timeDay = document.querySelector('[data-days]');
const timeHour = document.querySelector('[data-hours]');
const timeMinutes = document.querySelector('[data-minutes]');
const timeSeconds = document.querySelector('[data-seconds]');

let timerId = null;
let targetDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    targetDate = selectedDates[0];
    chooseCurrentDate(selectedDates[0]);
  },
}; 

flatpickr(input, options);
 
startBtn.addEventListener('click', onBtnStart);

function onBtnStart () {
  timerId = setInterval(timerStart, 1000);
}

function timerStart() {
  startBtn.setAttribute('disabled', true);
  const date = targetDate - Date.now();
    if (date < 1000 ) {
      clearInterval(timerId);
    } else {
    const { days, hours, minutes, seconds } = convertMs(date);
  timeDay.textContent = addLeadingZero(days);
  timeHour.textContent = addLeadingZero(hours);
  timeMinutes.textContent = addLeadingZero(minutes);
  timeSeconds.textContent = addLeadingZero(seconds);
}
}
 
function chooseCurrentDate(selectedDates) {
  const currentDay = new Date();
        if (selectedDates < currentDay) {
            window.alert(`Please choose a date in the future`);
            startBtn.setAttribute('disabled', true);
        } else {
          startBtn.removeAttribute('disabled');
      } }

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(validDate) {
 
  return validDate.toString().padStart(2, '0');
 
}
