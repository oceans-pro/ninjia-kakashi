"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map_ = void 0;
function map_(arr, callbackfn) {
    var i = 0;
    var len = arr.length;
    var resultArr = [];
    while (i < len) {
        resultArr.push(callbackfn(arr[i], i, arr));
        i++;
    }
    return resultArr;
}
exports.map_ = map_;
