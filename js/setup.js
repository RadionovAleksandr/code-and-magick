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
var getRandomElement = function (array) {
  var index = Math.round(Math.random() * (array.length - 1));
  return array[index];
};

// var WIZARDS = [];
// var WIZARDS_COUNT = 4;

var createWizards = function () {
  var wizards = [];
  var WIZARDS_COUNT = 4;

  for (var i = 0; i < WIZARDS_COUNT; i++) {
    var newWizard = {
      name: getRandomElement(PERSON_NAME),
      surname: getRandomElement(PERSON_SURNAME),
      coat: getRandomElement(COAT_COLOR),
      eyes: getRandomElement(EYES_COLOR)
    };
    wizards.push(newWizard);

    return wizards;
  }
};

var WIZARDS = createWizards();

// Функция отрисовки волшебников в меню выбора
var copyWizards = function (WIZARDS) {
  for (var i = 0; i < WIZARDS.length; i++) {
    var setupSimilarItem = template.content.querySelector('.setup-similar-item').cloneNode(true);
    var space = ' ';

    setupSimilarItem.querySelector('.setup-similar-label').textContent = WIZARDS[i].name + space + WIZARDS[i].surname;
    setupSimilarItem.querySelector('.wizard-coat').style.fill = WIZARDS[i].coat;
    setupSimilarItem.querySelector('.wizard-eyes').style.fill = WIZARDS[i].eyes;

    setupSimilarList.appendChild(setupSimilarItem);
  }
};

copyWizards(WIZARDS);
