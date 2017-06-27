import Life from './life';

const game = new Life();

const start = document.getElementById('start'),
      pause = document.getElementById('pause'),
      stop = document.getElementById('stop'),
      speed = document.getElementById('speed'),
      currentSpeedText = document.getElementById('current-speed'),
      random = document.getElementById('random'),
      canvas = document.getElementById('game');

canvas.addEventListener('click', function (e) {
    game.changeCell(e);
});

start.addEventListener('click', function() {
    game.run();
});

pause.addEventListener('click', function () {
    game.stop();
});

stop.addEventListener('click', function () {
    game.stop();
    game.init();
    game.draw();
});

random.addEventListener('click', function (e) {
    if (!game.isPlay) {
        game.fillRandom();
        game.draw();
    }
});

speed.addEventListener('click', function (e) {
    var val = e.target.dataset.speed;
    if (val != undefined) {
        game.changeSpeed(val);
        currentSpeedText.innerHTML = game.speed;
    }
});
