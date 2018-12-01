
'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 150;
var BAR_HEIGHT = 40;
var GAP_BAR = 50;
var FONT = '16px PT Mono';
var FONT_BASELINE = 'hanging';

// Функция на отрисовку облака и его тени
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Цикл на формировани статистики
var getMaxElement = function (arr) {
  for (var i = 0; i <= arr.length - 2; i++) {
    var maxElement = arr[i];

    for (var j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] > maxElement) {
        maxElement = arr[j];
        var swap = arr[i];
        arr[i] = maxElement;
        arr[j] = swap;
      }
    }
  }
  return arr[0];
};

// Метод вызывающий облако, его тень на основе функции, указанной в начале, а также отрисовка декора в качестве кривых Безье
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'pink');

  // Сводка что вы победили
  ctx.fillStyle = 'white';
  ctx.font = FONT;
  ctx.textBaseline = FONT_BASELINE;
  ctx.fillText('Ура вы победили!', 115, 25);
  ctx.fillText('Список результатов:', 115, 45);

  var maxTime = getMaxElement(times);

  // Цикл на отрисовку имен победителей
  for (var i = 0; i <= names.length - 1; i++) {
    ctx.fillStyle = 'white';
    ctx.fillText(names[i], CLOUD_X + GAP_BAR + (GAP_BAR + BAR_HEIGHT) * i, CLOUD_HEIGHT - 2 * GAP);
  }

  // Функция для окрашивания столбиков других участников
  var getMaxNumber = function (min, max) {
    var saturation = Math.floor(Math.random() * (max - min) + min);
    ctx.fillStyle = 'rgba(0, 0, ' + saturation + ', 1)';
  };

  // Цикл на отрисовку столбиков статистики
  for (i = 0; i <= names.length - 1; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else if (names[i] !== 'Вы') {
      getMaxNumber(50, 250);
    }

    ctx.fillRect(CLOUD_X + GAP_BAR + (GAP_BAR + BAR_HEIGHT) * i, CLOUD_HEIGHT - 3 * GAP, BAR_HEIGHT, -BAR_WIDTH * times[i] / maxTime);

    ctx.fillStyle = 'green';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_BAR + (GAP_BAR + BAR_HEIGHT) * i, BAR_WIDTH + GAP_BAR + 2 * GAP - (BAR_WIDTH * times[i] / maxTime));
  }
};
