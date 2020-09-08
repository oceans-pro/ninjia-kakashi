# ninja-kakashi
模仿一些 JS 原生方法/数据结构，作为学习基础用

- 分别使用 Typescript/Javascript 实现，感受静态和动态语言的特色


## 使用
```js
// 模块
const {ProMi} = require('@oceans-pro/copy-ninja')
let p = function() {
  return new ProMi((resolve, reject) => {
    setTimeout((_) => {
      resolve('hello')
    }, 1000)
  })
}

p().then(data => {
  console.log(data)
}, null)

```

```js
// 原型
require('@oceans-pro/copy-ninja')
let x = [1, 2, 3]
x._map((item) => console.log(item))
```

# ninjia-kakashi
