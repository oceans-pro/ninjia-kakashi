declare class ProMi {
    private readonly executor;
    status: string;
    private failCallBack;
    private successCallback;
    constructor(executor: (resolveCallback: Function, rejectCallback: Function) => void);
    resolve(params: string | number | object): void;
    reject(params: string | number | object): void;
    then(resolveCallback: Function, rejectCallback: Function): void;
}
export { ProMi };
