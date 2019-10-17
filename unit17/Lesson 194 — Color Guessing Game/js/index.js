function getRandomColor() {
  const r = Math.floor(Math.random() * 255).toString(16);
  const g = Math.floor(Math.random() * 255).toString(16);
  const b = Math.floor(Math.random() * 255).toString(16);
  return `#${r}${g}${b}`;
}

function Initialise() {
  const currentColorH1 = document.querySelector('#currentColor');
  const allOptions = document.querySelectorAll('.color');
  const currentColor = getRandomColor();
  const status = document.querySelector('#status');
  let correctAnsNumber = Math.random();
  if (allOptions[0].style.display === 'none') {
    correctAnsNumber = Math.floor((correctAnsNumber + 2) * 2 - 1);
  } else {
    correctAnsNumber = Math.floor(correctAnsNumber * 5);
  }
  const header = document.querySelector('header');
  for (let i = 0; i < allOptions.length; i += 1) {
    if (allOptions[i].style.display !== 'none') {
      if (i === correctAnsNumber) {
        allOptions[i].style.backgroundColor = currentColor;
        allOptions[i].dataset.correct = 'true';
      } else {
        allOptions[i].style.backgroundColor = getRandomColor();
        allOptions[i].dataset.correct = 'false';
      }
      allOptions[i].style.cursor = 'pointer';
    }
  }
  currentColorH1.textContent = currentColor;
  header.style.backgroundColor = '#005792';
  status.textContent = '';
}

function showWin() {
  const header = document.querySelector('header');
  const currentColor = document.querySelector('div[data-correct="true"]').style.backgroundColor;
  const allOptions = document.querySelectorAll('.color');
  const status = document.querySelector('#status');
  header.style.backgroundColor = currentColor;
  status.textContent = 'You`ve Won!';
  allOptions.forEach(option => {
    option.style.backgroundColor = currentColor;
  });
}

function acceptAnswer() {
  const allOptions = document.querySelectorAll('.color');
  const status = document.querySelector('#status');
  allOptions.forEach(option => {
    option.addEventListener('click', () => {
      if (option.dataset.correct !== 'true') {
        option.style.backgroundColor = '#232323';
        status.textContent = 'Try again';
      } else {
        showWin();
      }
    });
  });
}

function newGameToggle() {
  const resetButton = document.querySelector('#reset');
  resetButton.addEventListener('click', Initialise);
}

function difficultyToggle() {
  const easy = document.querySelector('#easy');
  const hard = document.querySelector('#hard');
  const allOptions = document.querySelectorAll('.color');
  easy.parentNode.parentNode.addEventListener('click', () => {
    if (easy.classList.contains('activeLink') === false) {
      easy.classList.add('activeLink');
      easy.parentNode.parentNode.classList.add('activeDiff');
      hard.classList.remove('activeLink');
      hard.parentNode.parentNode.classList.remove('activeDiff');
      for (let i = 0; i < 3; i += 1) {
        allOptions[i].style.display = 'none';
      }
    }
    Initialise();
  });
  hard.parentNode.parentNode.addEventListener('click', () => {
    if (hard.classList.contains('activeLink') === false) {
      hard.classList.add('activeLink');
      hard.parentNode.parentNode.classList.add('activeDiff');
      easy.classList.remove('activeLink');
      easy.parentNode.parentNode.classList.remove('activeDiff');
      for (let i = 0; i < 3; i += 1) {
        allOptions[i].style.display = 'block';
      }
    }
    Initialise();
  });
}

newGameToggle();
difficultyToggle();
Initialise();
acceptAnswer();
