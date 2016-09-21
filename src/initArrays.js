/**
 * initArrays.js
 * -------------
 * This file contains a set of initial situations.
 * TODO: create pattern around a center of canvas (not hard coded as it is now)
 * TODO: move to JSON ?
 */

var initArray = function (someCells, type) {

    switch (type) {
        case 'blinker':
            someCells[20][35] = 1;
            someCells[20][36] = 1;
            someCells[20][37] = 1;
            break;
        case 'bloc':
            someCells[20][35] = 1;
            someCells[21][35] = 1;
            someCells[20][36] = 1;
            someCells[21][36] = 1;
            break;
        case 'toad':
            someCells[20][35] = 1;
            someCells[20][36] = 1;
            someCells[20][37] = 1;
            someCells[21][34] = 1;
            someCells[21][35] = 1;
            someCells[21][36] = 1;
            break;
        case 'eight-in-line':
            someCells[20][35] = 1;
            someCells[20][36] = 1;
            someCells[20][37] = 1;
            someCells[20][38] = 1;
            someCells[20][39] = 1;
            someCells[20][40] = 1;
            someCells[20][41] = 1;
            someCells[20][42] = 1;
            break;
        case 'acorn':
            someCells[19][34] = 1;
            someCells[20][36] = 1;
            someCells[21][33] = 1;
            someCells[21][34] = 1;
            someCells[21][37] = 1;
            someCells[21][38] = 1;
            someCells[21][39] = 1;
            break;
        case 'random':
            for (var j = 1; j < someCells.length - 1; j++) {
                for (var i = 1; i < someCells[j].length - 1; i++) {
                    someCells[j][i] = Math.round(Math.random());
                }
            }
            break;
        case 'glider':
            someCells[19][34] = 1;
            someCells[20][35] = 1;
            someCells[20][36] = 1;
            someCells[21][34] = 1;
            someCells[21][35] = 1;
            break;
        case 'gosper-glider-gun':
            someCells[17][35] = 1;
            someCells[18][33] = 1;
            someCells[18][35] = 1;
            someCells[19][23] = 1;
            someCells[19][24] = 1;
            someCells[19][31] = 1;
            someCells[19][32] = 1;
            someCells[19][45] = 1;
            someCells[19][46] = 1;
            someCells[20][22] = 1;
            someCells[20][26] = 1;
            someCells[20][31] = 1;
            someCells[20][32] = 1;
            someCells[20][45] = 1;
            someCells[20][46] = 1;
            someCells[21][11] = 1;
            someCells[21][12] = 1;
            someCells[21][21] = 1;
            someCells[21][27] = 1;
            someCells[21][31] = 1;
            someCells[21][32] = 1;
            someCells[22][11] = 1;
            someCells[22][12] = 1;
            someCells[22][21] = 1;
            someCells[22][25] = 1;
            someCells[22][27] = 1;
            someCells[22][28] = 1;
            someCells[22][33] = 1;
            someCells[22][35] = 1;
            someCells[23][21] = 1;
            someCells[23][27] = 1;
            someCells[23][35] = 1;
            someCells[24][22] = 1;
            someCells[24][26] = 1;
            someCells[25][23] = 1;
            someCells[25][24] = 1;
    }
};