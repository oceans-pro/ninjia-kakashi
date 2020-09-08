class ProMi {
    private readonly executor: Function;
    public status: string = 'pending';
    private failCallBack: Function = () => {
    };
    private successCallback: Function = () => {
    };

    constructor(executor: (resolveCallback: Function, rejectCallback: Function) => void) {
        this.executor = executor
        // resole() 即 window.resolve() ，故需要绑定this
        this.executor(this.resolve.bind(this), this.reject.bind(this))
    }

    resolve(params: string | number | object) {
        if (this.status === 'pending') {
            this.status = 'success'
            if (this.successCallback) {
                this.successCallback(params)
            } else {
                console.error('未传入成功回调')
            }
        }
    }

    reject(params: string | number | object) {
        if (this.status === 'pending') {
            this.status = 'fail'
            if (this.failCallBack) {
                this.failCallBack(params)
            } else {
                console.error('未传入失败回调')
            }
        }
    }

    then(resolveCallback: Function, rejectCallback: Function) {
        this.successCallback = resolveCallback
        this.failCallBack = rejectCallback
    }
}

export {
    ProMi
}
