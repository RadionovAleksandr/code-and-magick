// задаю переменные
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 20;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 60;
var barHeight = CLOUD_HEIGHT - GAP *4;
var FONT_BASELINE = 'hanging';
var FONT = '16px PT Mono';


// записываю максимальное значение массива
var getMaxElement = function(arr) {
  var maxElement = arr[0];

  // сортирую массив
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

//определяю функцию отрисовки облака
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// метод вызывающий функцию отрисовки облака
window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');


// надпись в облаке
 ctx.fillStyle = '#000';
 ctx.font = FONT;
 // ctx.textBaseline = FONT_BASELINE;
  ctx.fillText('Ура вы победили!', 115, 25);
  ctx.fillText('Список результатов:', 115, 45);

// определяю переменную
  var maxTime = getMaxElement(times);

// Цикл отрисовка стоблбцов и имен победителей
  for (var i = 0; i <= players.length-1; i++) {
    ctx.fillStyle = 'red';
  ctx.fillText(players[i], CLOUD_X + (GAP + BAR_WIDTH) * i + GAP, CLOUD_HEIGHT - GAP/3 );

  ctx.fillStyle = 'green';
  ctx.fillRect(CLOUD_X + (GAP + BAR_WIDTH) * i + GAP, CLOUD_HEIGHT-GAP,  BAR_WIDTH, -(barHeight * times[i]) / maxTime);
  console.log((barHeight * times[i]) / maxTime)
}

// Цикл на отрисовку столбиков статистики


};
