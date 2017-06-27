import to2x from './array.to2x';

Array.prototype.to2x = to2x;

export default function () {
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
};