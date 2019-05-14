(function() {
  var setup = document.querySelector('.setup');
  var onDialog = setup.querySelector('.upload');

  onDialog.addEventListener('mousedown', function(evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function(moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        y: startCoords.y - moveEvt.clientY,
        x: startCoords.x - moveEvt.clientX
      };

      startCoords = {
        y: moveEvt.clientY,
        x: moveEvt.clientX
      };

      console.log(startCoords.x);
      console.log(setup.offsetleft);
      console.log(setup.offsetTop);

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetleft - shift.x) + 'px';
  console.log(setup.style.top + "y");
  console.log(setup.style.left + "x");
    };

    var onMouseUp = function(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function(evt) {
          evt.preventDefault();
          onDialog.removeEventListener('click', onClickPreventDefault)
        };
        onDialog.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });
})();
