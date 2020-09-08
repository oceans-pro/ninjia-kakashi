"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProMi = void 0;
var ProMi = /** @class */ (function () {
    function ProMi(executor) {
        this.status = 'pending';
        this.failCallBack = function () {
        };
        this.successCallback = function () {
        };
        this.executor = executor;
        // resole() 即 window.resolve() ，故需要绑定this
        this.executor(this.resolve.bind(this), this.reject.bind(this));
    }
    ProMi.prototype.resolve = function (params) {
        if (this.status === 'pending') {
            this.status = 'success';
            if (this.successCallback) {
                this.successCallback(params);
            }
            else {
                console.error('未传入成功回调');
            }
        }
    };
    ProMi.prototype.reject = function (params) {
        if (this.status === 'pending') {
            this.status = 'fail';
            if (this.failCallBack) {
                this.failCallBack(params);
            }
            else {
                console.error('未传入失败回调');
            }
        }
    };
    ProMi.prototype.then = function (resolveCallback, rejectCallback) {
        this.successCallback = resolveCallback;
        this.failCallBack = rejectCallback;
    };
    return ProMi;
}());
exports.ProMi = ProMi;
