//Модуль настройки персонажа
(function() {
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function() {
  wizardCoat.style.fill = WIZARD_COAT[getRandomInt(0, WIZARD_COAT.length)];
});

wizardEyes.addEventListener('click', function() {
  wizardEyes.style.fill = WIZARD_EYES[getRandomInt(0, WIZARD_EYES.length)];
});

setupFireballWrap.addEventListener('click', function() {
  setupFireballWrap.style.backgroundColor = WIZARD_EYES[getRandomInt(0, WIZARD_FIREBALL.length)];
});
})();
