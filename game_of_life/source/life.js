import init from './init';
import fillRandom from './fillRandom';
import draw from './draw';
import loop from './loop';
import nextGeneration from './nextGeneration';
import run from './run';
import stop from './stop';
import changeCell from './changeCell';
import changeSpeed from './changeSpeed';

export default class Life {
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

Life.prototype.init = init;
Life.prototype.fillRandom = fillRandom;
Life.prototype.draw = draw;
Life.prototype.loop = loop;
Life.prototype.nextGeneration = nextGeneration;
Life.prototype.run = run;
Life.prototype.stop = stop;
Life.prototype.changeCell = changeCell;
Life.prototype.changeSpeed = changeSpeed;


