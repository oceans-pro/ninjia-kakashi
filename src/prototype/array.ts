Array.prototype._map = function(callbackfn:Function) {
  let i = 0
  const len = this.length
  let resultArr = []
  while (i < len) {
    resultArr.push(callbackfn(this[i], i, this))
    i++
  }
  return resultArr
}
console.log(123)
