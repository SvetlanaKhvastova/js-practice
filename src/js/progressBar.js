import refs from './refs.js';

const { nextBtn, finishBtn, prevBtn, stepValues, content } = refs;

const MAX_VALUE = 4; // МАКС КОЛ-ВО ЭЛЕМЕНТОВ В МАССИВЕ (КОЛ-ВО КНОПОК)
let currentValue = 1;

nextBtn.addEventListener('click', () => {
  // console.log('next');
  let currentStep = stepValues[currentValue - 1];
  currentStep.classList.add('completed');

  currentValue += 1;
  content.textContent = `Текущий шаг ${currentValue}`;
  prevBtn.disabled = false;

  if (currentValue === MAX_VALUE) {
    nextBtn.disabled = true;
    finishBtn.disabled = false;
  }

  // console.log(currentStep);
});

prevBtn.addEventListener('click', () => {
  // console.log('previous');
  let currentStep = stepValues[currentValue - 2]; //ПОЛУЧАЕМ ПРЕДЫДУЩИЙ ИНДЕКС В МАССИВЕ ДЛЯ КНОПКИ 'НАЗАД'
  currentStep.classList.remove('completed');
  currentValue -= 1;
  content.innerText = `Текущий шаг ${currentValue}`;
  nextBtn.disabled = false;
  finishBtn.disabled = true;

  if (currentValue === 1) {
    prevBtn.disabled = true;
  }
});

finishBtn.addEventListener('click', () => {
  // console.log('finish');
  location.reload(); //СБРОСИТЬ К НАЧАЛЬНОМУ СОСТОЯНИЮ ДО ОБРАБОТКИ СОБЫТИЙ
});
