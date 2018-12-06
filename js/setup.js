'use strict';
var setup = document.querySelector('.setup');
var setupSimular = setup.querySelector('.setup-similar');
setup.classList.remove('hidden');
setupSimular.classList.remove('hidden');

var template = document.querySelector('#similar-wizard-template');
var setupSimilarList = document.querySelector('.setup-similar-list');

var PERSON_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var PERSON_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// Функция рандомных чисел для меняющихся предметов
var changeElement = function (array) {
  for (var i = 0; i < 1; i++) {
    var randomBeginValue = 1;
    var randomValue = Math.round(Math.random() * ((array.length - 1) - randomBeginValue));
    return randomValue;
  }
};

changeElement(PERSON_NAME, PERSON_SURNAME, COAT_COLOR, EYES_COLOR);

// Функция отрисовки волшебников в меню выбора
var copyWizards = function () {
  for (var i = 0; i < 4; i++) {
    var setupSimilarItem = template.content.querySelector('.setup-similar-item').cloneNode(true);
    var space = ' ';

    setupSimilarItem.querySelector('.setup-similar-label').textContent = PERSON_NAME[changeElement(PERSON_NAME)] + space + PERSON_SURNAME[changeElement(PERSON_SURNAME)];
    setupSimilarItem.querySelector('.wizard-coat').style.fill = COAT_COLOR[changeElement(COAT_COLOR)];
    setupSimilarItem.querySelector('.wizard-eyes').style.fill = EYES_COLOR[changeElement(EYES_COLOR)];

    setupSimilarList.appendChild(setupSimilarItem);
  }
};

copyWizards();

console.log(document.querySelector('.setup-similar-list'));
console.log(document.querySelector('#similar-wizard-template'));
