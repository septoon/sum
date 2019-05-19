/* eslint-disable no-alert */
const inputFirst = document.getElementById('first');
const inputSecond = document.getElementById('second');
const button = document.getElementById('button');

inputFirst.value = 0.1;
inputSecond.value = 0.2;

button.addEventListener('click', () => {
  const one = parseFloat(inputFirst.value);
  const two = parseFloat(inputSecond.value);
  const sum = one + two;

  if (Number.isInteger(sum)) {
    alert(sum);
  } else {
    alert(sum.toFixed(1));
  }
});
