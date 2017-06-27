/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//Custom array prototype method for generate array of arrays
//Used for universe and nextGeneration.

/* harmony default export */ __webpack_exports__["a"] = (function (width, height, fill) {
    let tmpArray = [];
    for (let y = 0; y < height; y++) {
        tmpArray[y] = new Array(width).fill(fill);
    }
    return tmpArray;
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__life__ = __webpack_require__(2);


const game = new __WEBPACK_IMPORTED_MODULE_0__life__["a" /* default */]();

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


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fillRandom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__draw__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nextGeneration__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__run__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stop__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__changeCell__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__changeSpeed__ = __webpack_require__(11);










class Life {
    // Describe of class.

    constructor() {
        this.width = 200;

        this.height = 200;

        this.cellWidth = 5;

        this.universe = [];

        this.speed = 100;

        this.isPlay = false;

        this.playingGame; // interval name

        // First initialization of array
        this.init();

        // Draw empty white canvas with needed dimesions
        this.draw();

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Life;


Life.prototype.init = __WEBPACK_IMPORTED_MODULE_0__init__["a" /* default */];
Life.prototype.fillRandom = __WEBPACK_IMPORTED_MODULE_1__fillRandom__["a" /* default */];
Life.prototype.draw = __WEBPACK_IMPORTED_MODULE_2__draw__["a" /* default */];
Life.prototype.loop = __WEBPACK_IMPORTED_MODULE_3__loop__["a" /* default */];
Life.prototype.nextGeneration = __WEBPACK_IMPORTED_MODULE_4__nextGeneration__["a" /* default */];
Life.prototype.run = __WEBPACK_IMPORTED_MODULE_5__run__["a" /* default */];
Life.prototype.stop = __WEBPACK_IMPORTED_MODULE_6__stop__["a" /* default */];
Life.prototype.changeCell = __WEBPACK_IMPORTED_MODULE_7__changeCell__["a" /* default */];
Life.prototype.changeSpeed = __WEBPACK_IMPORTED_MODULE_8__changeSpeed__["a" /* default */];




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_to2x__ = __webpack_require__(0);


Array.prototype.to2x = __WEBPACK_IMPORTED_MODULE_0__array_to2x__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (function () {
    this.universe = new Array().to2x(this.width, this.height, false);
});;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
    // Add random cells to our Universe.
    for (var y = 0; y < this.width; y++) {
        for (var x = 0; x < this.width; x++) {
            this.universe[y][x] = Math.random() > 0.5 ? true : false;
        }
    }
});;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
    var ctx = document.getElementById('game');
    var context = ctx.getContext('2d');

    // Drawing cell with needed dimensions.
    context.canvas.width = this.width * this.cellWidth;
    context.canvas.height = this.height * this.cellWidth;

    for (var y = 0; y < this.width; y++) {
        for (var x = 0; x < this.height; x++){
            if (this.universe[y][x]) {
                var coordY = y * this.cellWidth;
                var coordX = x * this.cellWidth;
                context.fillRect(coordX, coordY, this.cellWidth, this.cellWidth);
            }
        }
    }
});;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
    this.nextGeneration();
    this.draw();
});;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_to2x__ = __webpack_require__(0);


Array.prototype.to2x = __WEBPACK_IMPORTED_MODULE_0__array_to2x__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (function () {
    let nextGeneration = new Array().to2x(this.width, this.height, false);

    for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
            let aliveAroundCells = 0;

            // Left
            if (x > 0) {
                aliveAroundCells += +this.universe[y][x - 1];
            }

            // Left top diagonal
            if (x > 0 && y > 0) {
                aliveAroundCells += +this.universe[y - 1][x - 1];
            }

            // Top
            if (y > 0) {
                aliveAroundCells += +this.universe[y - 1][x];
            }

            // Right top diagonal
            if (y > 0 && x < this.width - 1) {
                aliveAroundCells += +this.universe[y - 1][x + 1];
            }

            // Right
            if (x < this.width - 1) {
                aliveAroundCells += +(this.universe[y][x + 1]);
            }

            // Bottom right diagonal
            if (x < this.width - 1 && y < this.height - 1) {
                aliveAroundCells += +this.universe[y + 1][x + 1];
            }

            // Bottom
            if (y < this.height - 1) {
                aliveAroundCells += +this.universe[y + 1][x];
            }

            // Bottom left diagonal
            if (y < this.height - 1 && x > 0) {
                aliveAroundCells += +this.universe[y + 1][x - 1];
            }

            if (this.universe[y][x]) {
                if (aliveAroundCells < 2 || aliveAroundCells >= 4) {
                    nextGeneration[y][x] = false;
                } else {
                    nextGeneration[y][x] = true;
                }
            } else {
                if (aliveAroundCells === 3) {
                    nextGeneration[y][x] = true;
                } else {
                    nextGeneration[y][x] = false;
                }
            }
        }
    }
    this.universe = nextGeneration;
});;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
    const self = this;
    if (this.isPlay) {
        return;
    }

    this.playingGame = setInterval(function () {
        self.loop();
    }, this.speed);

    this.isPlay = true;
});;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
    clearInterval(this.playingGame);
    this.isPlay = false;
});;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (e) {
    // e - is event from click event
    // needed for getting coords

    // Get right coords for our cell width
    let x = e.offsetX;
    let y = e.offsetY;

    let realX = Math.floor(x/(this.cellWidth));
    let realY = Math.floor(y/(this.cellWidth));

    this.universe[realY][realX] = !this.universe[realY][realX];
    this.draw();
});;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (changes) {

    if (changes == 'plus') {
        this.speed += 100;
    } else if (this.speed >= 200 && changes == 'minus') {
        this.speed -= 100;
    }

    if (this.isPlay) {
        this.stop();
        this.run();
    }

});;

/***/ })
/******/ ]);