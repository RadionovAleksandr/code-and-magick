'use strict';
var setup = document.querySelector('.setup');
var setupSimular = setup.querySelector('.setup-similar');
setup.classList.remove('hidden');
setupSimular.classList.remove('hidden');

// Функция отрисовки волшебников в меню выбора
var template = document.querySelector('#similar-wizard-template');
var setupSimilarList = document.querySelector('.setup-similar-list');

var PERSON_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var PERSON_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var copyWizards = function () {
//   var PERSON_NAME = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];

  for (var i = 0; i < 4; i++) {
    var setupSimilarItem = template.content.querySelector('.setup-similar-item').cloneNode(true);
    var space = ' ';

    setupSimilarItem.querySelector('.setup-similar-label').textContent = PERSON_NAME[i] + space + PERSON_SURNAME[i];
    setupSimilarItem.querySelector('.wizard-coat').fill = coatColor[i];

    setupSimilarList.appendChild(setupSimilarItem);
  }
};

copyWizards();

// var generateData = function (PERSON_NAME, PERSON_SURNAME) {
//   for (var i = 0; i <= PERSON_NAME.length - 5; i++) {
//     console.log(PERSON_NAME[i]);
//   }
// };

// generateData();

// var coatColor = {
//   coat: ["rgb(101, 137, 164)", 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']
// };

// var eyesColor = {
//   eyes: ['black', 'red', 'blue', 'yellow', 'green']
// };

// var getRandomValue = functi on (eyesColor.eyes) {
//   for (var i = 0; i <= eyesColor.eyes.length - 1; i++) {
//     Math.random(eyesColor.eyes.length-0);
//   }
// }

console.log(document.querySelector('.setup-similar-list'));
console.log(document.querySelector('#similar-wizard-template'));
