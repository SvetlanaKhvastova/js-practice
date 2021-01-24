export default {
  prevBtn: document.querySelector('.prevBtn'),
  nextBtn: document.querySelector('.nextBtn'),
  finishBtn: document.querySelector('.finishBtn'),
  stepValues: [...document.querySelectorAll('.stepValue')],
  content: document.querySelector('.content'),

  div: document.querySelector('.price-range'),
  ranges: document.querySelectorAll('input[type="range"]'),
  numbers: document.querySelectorAll('input[type="number"]'),

  div2: document.querySelector('.price-range2'),
  ranges2: document.querySelectorAll('.price-range2 input[type="range"]'),
  numbers2: document.querySelectorAll('.price-range2 input[type="number"]'),
};
