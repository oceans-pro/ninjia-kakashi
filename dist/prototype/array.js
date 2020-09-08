"use strict";
Array.prototype._map = function (callbackfn) {
    var i = 0;
    var len = this.length;
    var resultArr = [];
    while (i < len) {
        resultArr.push(callbackfn(this[i], i, this));
        i++;
    }
    return resultArr;
};
console.log(123);
