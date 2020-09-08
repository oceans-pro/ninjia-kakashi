function map_<T, U>(arr: T[], callbackfn: (value: T, index: number, arr: ReadonlyArray<T>) => U): U[] {
    let i = 0
    const len = arr.length
    let resultArr = []
    while (i < len) {
        resultArr.push(callbackfn(arr[i], i, arr))
        i++
    }
    return resultArr
}

export {
    map_
}
