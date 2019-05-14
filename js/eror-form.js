//Модуль вывода сообщений ошибки input
(function() {
  var userNameInput = document.querySelector('.setup-user-name');
  //Переписываю выводы ошибок инпута
  userNameInput.addEventListener('invalid', function(evt) {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  //Алтернативное переписывание вывода ошибок инпута
  userNameInput.addEventListener('input', function(evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });
})();
