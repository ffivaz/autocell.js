/**
 * Creates an array of arrays for the data
 **/
var createArray = function (nrows, ncols) {

    var i;

    var someLines = [];
    for (i = 0; i < ncols; i++) {
        someLines.push(0);
    }

    var someCells = [];
    for (i = 0; i < nrows; i++) {
        someCells.push(someLines.slice());
    }

    return someCells;
};

/**
 * Draws (or redraws) the canvas from a array of arrays (cells)
 **/
var canvasDraw = function (cells, context, width, height) {

    var col = 0;
    cells.forEach(function (line) {
        var i = 0;
        line.forEach(function (pixel) {
            if (pixel == 0) {
                context.fillStyle = 'white';
                context.fillRect(Math.floor(i * 10) + 0.5, Math.floor(col * 10) + 0.5, Math.floor(17 * 0.5), Math.floor(17 * 0.5));
                context.strokeStyle = 'black';
                context.strokeRect(Math.floor(i * 10) + 0.5, Math.floor(col * 10) + 0.5, Math.floor(17 * 0.5), Math.floor(17 * 0.5));
            } else {
                context.fillStyle = 'black';
                context.fillRect(Math.floor(i * 10) + 0.5, Math.floor(col * 10) + 0.5, Math.floor(17 * 0.5), Math.floor(17 * 0.5));
                context.strokeStyle = 'black';
                context.strokeRect(Math.floor(i * 10) + 0.5, Math.floor(col * 10) + 0.5, Math.floor(17 * 0.5), Math.floor(17 * 0.5));
            }
            i++;
        });
        col++;
    });
};

/**
 * From Wikipedia, Game of Life rules are:
 * 1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.
 * 2. Any live cell with two or three live neighbours lives on to the next generation.
 * 3. Any live cell with more than three live neighbours dies, as if by over-population.
 * 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
 */
var nextGen = function (cells) {
    var cellsCopy = arrayClone(cells); //
    var a = 0;
    for (var j = 1; j < cellsCopy.length - 1; j++) {
        for (var i = 1; i < cellsCopy[j].length - 1; i++) {
            a = cellsCopy[j - 1][i - 1] + cellsCopy[j - 1][i] + cellsCopy[j - 1][i + 1];
            a = a + cellsCopy[j][i - 1] + cellsCopy[j][i + 1];
            a = a + cellsCopy[j + 1][i - 1] + cellsCopy[j + 1][i] + cellsCopy[j + 1][i + 1];
            if (cellsCopy[j][i] == 1 && a < 2) {
                cells[j][i] = 0;
            }
            if (cellsCopy[j][i] == 1 && (a == 2 || a == 3)) {
                cells[j][i] = 1;
            }
            if (cellsCopy[j][i] == 1 && a > 3) {
                cells[j][i] = 0;
            }
            if (cellsCopy[j][i] == 0 && a == 3) {
                cells[j][i] = 1;
            }
        }
    }
};

/**
 * Loops through the generations
 */
var run = function () {
    nextGen(myCells);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Flush canvas
    canvasDraw(myCells, ctx);
};
