export default function() {
    // Add random cells to our Universe.
    for (var y = 0; y < this.width; y++) {
        for (var x = 0; x < this.width; x++) {
            this.universe[y][x] = Math.random() > 0.5 ? true : false;
        }
    }
};