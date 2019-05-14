//Модуль открывающий/закрывающий окно настройки персонажа
(function() {
  var setupOpen = document.querySelector('.setup-open');
  var setup = window.document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');

  var onPopupEscPress = function(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress)
  };

  var closePopup = function() {
    setup.classList.add('hidden');
    document.addEventListener('keydown', onPopupEscPress)
  };

  setupOpen.addEventListener('click', function() {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function() {
    closePopup();
  });

  setupClose.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });
})();
