// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('startButton').addEventListener('click', startRefresh);
//   document.getElementById('stopButton').addEventListener('click', stopRefresh);
// });


// let intervalId;
// let countdown;

// function startRefresh() {
//   const intervalInput = document.getElementById('intervalInput');
//   const startButton = document.getElementById('startButton');
//   const stopButton = document.getElementById('stopButton');
//   const countdownDisplay = document.getElementById('countdownDisplay');

//   const interval = parseInt(intervalInput.value);
//   if (isNaN(interval) || interval <= 0) {
//     alert('Please enter a valid interval');
//     return;
//   }

//   intervalId = setInterval(() => {
//     countdown--;
//     countdownDisplay.textContent = `Refreshing in ${countdown} seconds`;
//     if (countdown <= 0) {
//       clearInterval(intervalId);
//       countdownDisplay.textContent = 'Refreshing...';
//       refreshPage();
//       startButton.disabled = false;
//       stopButton.disabled = true;
//     }
//   }, 1000);

//   countdown = interval;
//   countdownDisplay.textContent = `Refreshing in ${countdown} seconds`;

//   startButton.disabled = true;
//   stopButton.disabled = false;
// }

// function stopRefresh() {
//   clearInterval(intervalId);
//   const countdownDisplay = document.getElementById('countdownDisplay');
//   countdownDisplay.textContent = '';
//   const startButton = document.getElementById('startButton');
//   const stopButton = document.getElementById('stopButton');
//   startButton.disabled = false;
//   stopButton.disabled = true;
// }

// function refreshPage() {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.reload(tabs[0].id);
//   });
// }

// document.getElementById('startButton').addEventListener('click', startRefresh);
// document.getElementById('stopButton').addEventListener('click', stopRefresh);


//v 2
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('startButton').addEventListener('click', startRefresh);
  document.getElementById('stopButton').addEventListener('click', stopRefresh);
});


let intervalId;
let countdown;
let intervalInputValue;

function startRefresh() {
  const intervalInput = document.getElementById('intervalInput');
  const startButton = document.getElementById('startButton');
  const stopButton = document.getElementById('stopButton');
  const countdownDisplay = document.getElementById('countdownDisplay');

  const newIntervalInputValue = parseInt(intervalInput.value);
  if (isNaN(newIntervalInputValue) || newIntervalInputValue <= 0) {
    alert('Please enter a valid interval');
    return;
  }

  if (intervalInputValue !== newIntervalInputValue) {
    intervalInputValue = newIntervalInputValue;
    clearInterval(intervalId);
    countdownDisplay.textContent = '';
  }

  startButton.disabled = true;
  stopButton.disabled = false;

  countdown = intervalInputValue;
  countdownDisplay.textContent = `Refreshing in ${countdown} seconds`;

  intervalId = setInterval(() => {
    countdown--;
    countdownDisplay.textContent = `Refreshing in ${countdown} seconds`;
    if (countdown <= 0) {
      refreshPage();
      countdown = intervalInputValue;
      countdownDisplay.textContent = `Refreshing in ${countdown} seconds`;
    }
  }, 1000);
}

function stopRefresh() {
  clearInterval(intervalId);
  const countdownDisplay = document.getElementById('countdownDisplay');
  countdownDisplay.textContent = '';
  const startButton = document.getElementById('startButton');
  const stopButton = document.getElementById('stopButton');
  startButton.disabled = false;
  stopButton.disabled = true;
}

function refreshPage() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.reload(tabs[0].id);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const intervalInput = document.getElementById('intervalInput');
  intervalInputValue = parseInt(intervalInput.value);
  document.getElementById('startButton').addEventListener('click', startRefresh);
  document.getElementById('stopButton').addEventListener('click', stopRefresh);
});
