'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

//создаю vfccbds c данными шаблона
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люлита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_VALUE = 4;
var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

//Создаю рандомные числа
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


//Модуль создания и отрисовки шаблона
(function() {
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  userDialog.classList.remove('hidden');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  //создаем шаблон для отрисовки
  var renderWizard = function(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }
  var onsSucces = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

var form = userDialog.querySelector('.setup-wizard-form');
form.addEventListener('submit', function(evt) {
   window.upload(new FormData(form), function(response) {
     userDialog.classList.add('hidden');
  });
  evt.preventDefault();
 });

  var onError = function (errorMessage) {
  var node = document.createElement('div');
  node.style = 'z-index: 100; margin: 0 auto: text-align: center; background-color: red;';
  node.style.position = 'absolute';
  node.stale.left = 0;
  node.stale.right = 0;
  node.stale.fontSize = '30px';

  node.textContent = errorMesage;
  document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(onsSucces, onError);
  /*
  //вставляю сгенерированные данные в шаблон
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < window.WIZARD_VALUE; i++) {
    var wizards = {
      name: window.WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length - 1)],
      surname: window.WIZARD_SURNAMES[getRandomInt(0, WIZARD_SURNAMES.length - 1)],
      eyesColor: window.WIZARD_EYES[getRandomInt(0, WIZARD_EYES.length - 1)],
      coatColor: window.WIZARD_COAT[getRandomInt(0, WIZARD_COAT.length - 1)]
    };

    fragment.appendChild(renderWizard(wizards));
    //отрисовываю шаблон
    similarListElement.appendChild(fragment);
  };
*/
})();
