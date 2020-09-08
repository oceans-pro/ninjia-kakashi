import {ProMi} from '../src/Promi'

let p = function() {
  return new ProMi((resolveCallback, rejectCallback) => {
    setTimeout(() => {
      resolveCallback('ok')
    }, 1000)
  })
}
p().then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})
