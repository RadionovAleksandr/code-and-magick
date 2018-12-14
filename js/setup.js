'use strict';
var setup = document.querySelector('.setup');
var setupSimular = setup.querySelector('.setup-similar');
// setup.classList.remove('hidden');
setupSimular.classList.remove('hidden');

var template = document.querySelector('#similar-wizard-template');
var setupSimilarList = document.querySelector('.setup-similar-list');

var PERSON_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var PERSON_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// Функция рандомных чисел для меняющихся предметов
var getRandomElement = function (array) {
  var index = Math.round(Math.random() * (array.length - 1));
  return array[index];
};

var WIZARDS_COUNT = 4;

var createWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARDS_COUNT; i++) {
    var newWizard = {
      name: getRandomElement(PERSON_NAME),
      surname: getRandomElement(PERSON_SURNAME),
      coat: getRandomElement(COAT_COLOR),
      eyes: getRandomElement(EYES_COLOR)
    };
    wizards.push(newWizard);
  }
  return wizards;
};

var WIZARDS = createWizards();

// Функция отрисовки волшебников в меню выбора
var copyWizards = function (arrayWizards) {
  for (var i = 0; i < arrayWizards.length; i++) {
    var setupSimilarItem = template.content.querySelector('.setup-similar-item').cloneNode(true);
    var space = ' ';

    setupSimilarItem.querySelector('.setup-similar-label').textContent = arrayWizards[i].name + space + arrayWizards[i].surname;
    setupSimilarItem.querySelector('.wizard-coat').style.fill = arrayWizards[i].coat;
    setupSimilarItem.querySelector('.wizard-eyes').style.fill = arrayWizards[i].eyes;

    setupSimilarList.appendChild(setupSimilarItem);
  }
};

copyWizards(WIZARDS);

// Начинаем 4 задание!

var CODE_BUTTON_ESC = 27;
var CODE_BUTTON_ENTER = 13;

var buttonOpen = document.querySelector('.setup-open');
var buttonOpenKeydown = document.querySelector('.setup-open-icon');
buttonOpenKeydown.tabIndex = 0;
var buttonClose = setup.querySelector('.setup-close');
buttonClose.tabIndex = 0;
var textInput = setup.querySelector('.setup-user-name');

var form = setup.querySelector('.setup-wizard-form');
form.setAttribute('action', 'https://js.dump.academy/code-and-magick');
form.setAttribute('name', 'wizard');
form.setAttribute('name', 'wizard');

// функция добавление открытия и скрытия окна
var openWindow = function () {
  var ESCbuttonClickHandler = function (evt) {
    if (evt.keyCode === CODE_BUTTON_ESC) {
      evt.preventDefault();
      closeSetup();
    }
  };

  var openSetup = function () {
    setup.classList.remove('hidden');
    textInput.focus();
    document.addEventListener('keydown', ESCbuttonClickHandler);
  };

  var closeSetup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', ESCbuttonClickHandler);
  };

  // открытие с помощью мыши
  buttonOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    openSetup();
  });

  // открытие с помощью клавиатуры ENTER
  buttonOpenKeydown.addEventListener('keydown', function (evt) {
    if (evt.keyCode === CODE_BUTTON_ENTER) {
      evt.preventDefault();
      openSetup();
    }
  });

  // закрытие с помощью мыши
  buttonClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeSetup();
  });

  // закрытие с помощью клавиатуры ENTER
  buttonClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === CODE_BUTTON_ENTER) {
      evt.preventDefault();
      closeSetup();
    }
  });
};

openWindow();

// функция валидации инпута
var validateInput = function () {
  textInput.minLength = 2;
  textInput.required = 'required';

  textInput.addEventListener('invalid', function () {
    if (textInput.validity.tooShort) {
      textInput.setCustomValidity('Ваше имя слишком короткое');
    } else {
      textInput.setCustomValidity('');
    }
  });
};

validateInput();

// функция изменения параметров по клику мыши
var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

// функция изменения цвета плаща, файрболла и глаз упорядоченно по циклу
// var changeColor = function (array) {
//   for (var i = 0; i < array.length; i++) {
//     var test = array[0];
//     console.log(test);
//   }
//   return test;
// };

var setRandomColor = function () {

  wizardCoat.addEventListener('click', function () {
    // evt.preventDefault();
    for (var i = 0; i < COAT_COLOR.length; i++) {
      if (wizardCoat.style.fill === COAT_COLOR[i]) {
        var test = COAT_COLOR[i];
        wizardCoat.style.fill = test;
        console.log(test);
      }
    }
  });

  wizardEyes.addEventListener('click', function (evt) {
    evt.preventDefault();
    wizardEyes.style.fill = getRandomElement(EYES_COLOR);
  });

  wizardFireball.addEventListener('click', function (evt) {
    evt.preventDefault();
    wizardFireball.style.backgroundColor = getRandomElement(FIREBALL_COLOR);
  });
};

setRandomColor();

// функция добавления эффекта cursor:pointer к интерактивным элементам
var setPointer = function () {
  wizardCoat.style.cursor = 'pointer';
  wizardEyes.style.cursor = 'pointer';
  wizardFireball.style.cursor = 'pointer';
  textInput.style.cursor = 'pointer';
};

setPointer();


