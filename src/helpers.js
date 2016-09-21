/**
 * helpers.js
 * -------------
 * This file contains helper functions
 */


/**
 * This function compares arrays
 * From stackoverflow (thanks to Tomáš Zato)
 * http://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
 */

if (Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
Array.prototype.equals = function (array) {
    if (!array)
        return false;

    if (this.length != array.length)
        return false;

    for (var i = 0, l = this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            return false;
        }
    }
    return true;
};

Object.defineProperty(Array.prototype, "equals", {enumerable: false});


/**
 * This function clones an array
 * From Stackoverflow (Daniel Lew)
 * http://stackoverflow.com/questions/597588/how-do-you-clone-an-array-of-objects-in-javascript
 */

function arrayClone(arr) {

    var i, copy;

    if (Array.isArray(arr)) {
        copy = arr.slice(0);
        for (i = 0; i < copy.length; i++) {
            copy[i] = arrayClone(copy[i]);
        }
        return copy;
    } else if (typeof arr === 'object') {
        throw 'Cannot clone array containing an object!';
    } else {
        return arr;
    }

}