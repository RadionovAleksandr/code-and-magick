'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_HEIGHT = 40;
var GAP_BAR = 50;
var FONT = '16px PT Mono';
var FONT_BASELINE = 'hanging';
var FONT_GAP = 15;
var barWidth = CLOUD_WIDTH - 2 * GAP - 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  
  for (var i = 1; i <= arr.length; i++) {
   if (arr[i] > maxElement) {
     maxElement = arr[i]
     var swap = arr[0];
     arr[i] = swap;
   }
 }
  
 return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'pink');

 
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.moveTo(100, 0);
  ctx.bezierCurveTo(100, 0, 120, 10, 100, 20);
  ctx.bezierCurveTo(100, 20, 120, 30, 100, 40);
  ctx.bezierCurveTo(100, 40, 120, 50, 100, 60);
  ctx.bezierCurveTo(100, 60, 120, 70, 100, 80);
  ctx.bezierCurveTo(100, 80, 120, 90, 100, 100);
  ctx.bezierCurveTo(100, 100, 120, 110, 100, 120);
  ctx.bezierCurveTo(100, 120, 120, 130, 100, 140);
  ctx.bezierCurveTo(100, 140, 120, 150, 100, 160);
  ctx.bezierCurveTo(100, 160, 120, 170, 100, 180);
  ctx.bezierCurveTo(100, 180, 120, 190, 100, 200);
  ctx.bezierCurveTo(100, 200, 120, 210, 100, 220);
  ctx.bezierCurveTo(100, 220, 120, 230, 100, 240);
  ctx.bezierCurveTo(100, 240, 120, 250, 100, 260);
  ctx.bezierCurveTo(100, 260, 120, 270, 100, 270);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.moveTo(420, 0);
  ctx.bezierCurveTo(420, 0, 400, 10, 420, 20);
  ctx.bezierCurveTo(420, 20, 400, 30, 420, 40);
  ctx.bezierCurveTo(420, 40, 400, 50, 420, 60);
  ctx.bezierCurveTo(420, 60, 400, 70, 420, 80);
  ctx.bezierCurveTo(420, 80, 400, 90, 420, 100);
  ctx.bezierCurveTo(420, 100, 400, 110, 420, 120);
  ctx.bezierCurveTo(420, 120, 400, 130, 420, 140);
  ctx.bezierCurveTo(420, 140, 400, 150, 420, 160);
  ctx.bezierCurveTo(420, 160, 400, 170, 420, 180);
  ctx.bezierCurveTo(420, 180, 400, 190, 420, 200);
  ctx.bezierCurveTo(420, 200, 400, 210, 420, 220);
  ctx.bezierCurveTo(420, 220, 400, 230, 420, 240);
  ctx.bezierCurveTo(420, 240, 400, 250, 420, 260);
  ctx.bezierCurveTo(420, 260, 400, 270, 420, 270);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.moveTo(0, 270);
  ctx.bezierCurveTo(0, 270, 10, 250, 20, 270);
  ctx.bezierCurveTo(20, 270, 30, 250, 40, 270);
  ctx.bezierCurveTo(40, 270, 50, 250, 60, 270);
  ctx.bezierCurveTo(60, 270, 70, 250, 80, 270);
  ctx.bezierCurveTo(80, 270, 90, 250, 100, 270);
  ctx.bezierCurveTo(100, 270, 110, 250, 120, 270);
  ctx.bezierCurveTo(120, 270, 130, 250, 140, 270);
  ctx.bezierCurveTo(140, 270, 150, 250, 160, 270);
  ctx.bezierCurveTo(160, 270, 170, 250, 180, 270);
  ctx.bezierCurveTo(180, 270, 190, 250, 200, 270);
  ctx.bezierCurveTo(200, 270, 210, 250, 220, 270);
  ctx.bezierCurveTo(220, 270, 230, 250, 240, 270);
  ctx.bezierCurveTo(240, 270, 250, 250, 260, 270);
  ctx.bezierCurveTo(260, 270, 270, 250, 280, 270);
  ctx.bezierCurveTo(280, 270, 290, 250, 300, 270);
  ctx.bezierCurveTo(300, 270, 310, 250, 320, 270);
  ctx.bezierCurveTo(320, 270, 330, 250, 340, 270);
  ctx.bezierCurveTo(340, 270, 350, 250, 360, 270);
  ctx.bezierCurveTo(360, 270, 370, 250, 380, 270);
  ctx.bezierCurveTo(380, 270, 390, 250, 400, 270);
  ctx.bezierCurveTo(400, 270, 410, 250, 420, 270);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, 0, 10, 20, 20, 0);
  ctx.bezierCurveTo(20, 0, 30, 20, 40, 0);
  ctx.bezierCurveTo(40, 0, 50, 20, 60, 0);
  ctx.bezierCurveTo(60, 0, 70, 20, 80, 0);
  ctx.bezierCurveTo(80, 0, 90, 20, 100, 0);
  ctx.bezierCurveTo(100, 0, 110, 20, 120, 0);
  ctx.bezierCurveTo(120, 0, 130, 20, 140, 0);
  ctx.bezierCurveTo(140, 0, 150, 20, 160, 0);
  ctx.bezierCurveTo(160, 0, 170, 20, 180, 0);
  ctx.bezierCurveTo(180, 0, 190, 20, 200, 0);
  ctx.bezierCurveTo(200, 0, 210, 20, 220, 0);
  ctx.bezierCurveTo(220, 0, 230, 20, 240, 0);
  ctx.bezierCurveTo(240, 0, 250, 20, 260, 0);
  ctx.bezierCurveTo(260, 0, 270, 20, 280, 0);
  ctx.bezierCurveTo(280, 0, 290, 20, 300, 0);
  ctx.bezierCurveTo(300, 0, 310, 20, 320, 0);
  ctx.bezierCurveTo(320, 0, 330, 20, 340, 0);
  ctx.bezierCurveTo(340, 0, 350, 20, 360, 0);
  ctx.bezierCurveTo(360, 0, 370, 20, 380, 0);
  ctx.bezierCurveTo(380, 0, 390, 20, 400, 0);
  ctx.bezierCurveTo(400, 0, 410, 20, 420, 0);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = 'white';
  ctx.font = FONT;
  ctx.textBaseline = FONT_BASELINE;
  ctx.fillText('Ура вы победили!', 115, 25);
  ctx.fillText('Список результатов:', 115, 45);

  var maxTime = getMaxElement (times);

  for (var i = 0; i <= names.length - 1; i++) {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(CLOUD_X + GAP + 50, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
    ctx.fillStyle = 'white';
    ctx.fillText(names[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
  }
};
