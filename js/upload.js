(function(){ //модуль с отправкой запроса на сервер
  var URL = 'https://js.dump.academy/code-and-magick';

  window.upload = function (data, onSuccess) {
var xhr = XMLHttpRequest();
xhr.responeType = 'json';

xhr.addEventListener('load', function() {
  onSuccess(xhr.response);
});

xhr.open('POST', URL);
xhr.send(data);
};
})();
