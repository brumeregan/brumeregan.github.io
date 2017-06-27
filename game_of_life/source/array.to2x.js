//Custom array prototype method for generate array of arrays
//Used for universe and nextGeneration.

export default function (width, height, fill) {
    let tmpArray = [];
    for (let y = 0; y < height; y++) {
        tmpArray[y] = new Array(width).fill(fill);
    }
    return tmpArray;
}