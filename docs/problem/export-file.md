# js 导出文件

```js
const exportData = (dada) => {
  // 要保存的字符串
  const stringData = JSON.stringify(dada, null, 2);
  // dada 表示要转换的字符串数据，type 表示要转换的数据格式
  const blob = new Blob([stringData], {
    type: 'application/json;charset=utf-8',
  });
  // 根据 blob生成 url链接
  const objectURL = URL.createObjectURL(blob);

  // 创建一个 a 标签Tag
  const aTag = document.createElement('a');
  // 设置文件的下载地址
  aTag.href = objectURL;
  // 设置保存后的文件名称
  aTag.download = 'xxx.json';
  // 给 a 标签添加点击事件
  aTag.click();
  // 释放一个之前已经存在的、通过调用 URL.createObjectURL() 创建的 URL 对象。
  // 当你结束使用某个 URL 对象之后，应该通过调用这个方法来让浏览器知道不用在内存中继续保留对这个文件的引用了。
  URL.revokeObjectURL(objectURL);
};
```

## 每行代码的含义

**1.转换数据为 JSON：**

```js
const stringData = JSON.stringify(data, null, 2);
```

- `JSON.stringify() `方法用来将 JavaScript 对象转换成 JSON 字符串。
- 第二个参数 `null` 表示不需要替换函数。
- 第三个参数 `2` 表示缩进两个空格，使输出的 JSON 字符串具有可读性。

**2.创建 Blob 对象：**

```js
const blob = new Blob([stringData], {
  type: 'application/json;charset=utf-8',
});
```

- `Blob` 对象表示一个不可变的、用户级的大量数据块。
- `new Blob()` 构造函数的第一个参数是一个数组，包含要包含在 Blob 中的数据。
- `type` 属性定义了 Blob 的 MIME 类型，这里设置为 `application/json;charset=utf-8`，表示这是一个 UTF-8 编码的 JSON 文件。

**3.创建指向 Blob 的 URL：**

```js
const objectURL = URL.createObjectURL(blob);
```

- `URL.createObjectURL()` 方法用于创建一个指向 Blob 的 URL。

**4.创建一个 `<a>` 标签：**

```js
const aTag = document.createElement('a');
```

**5.给 `<a>` 标签添加 `href` 属性：**

```js
aTag.href = objectURL;
```

- 将 Blob 的 URL 设置为 `<a>` 标签的 `href` 属性

**6.设置 `<a>` 标签的 `download` 属性：**

```js
aTag.download = 'xxx.json';
```

- `download` 属性用于指定下载的文件名。

**7.触发点击事件来下载文件：**

```js
aTag.click();
```

- 触发点击事件来下载文件

**8.释放 Blob 的 URL 占用的内存资源：**

```js
URL.revokeObjectURL(objectURL);
```

- `URL.revokeObjectURL()` 方法释放先前通过 `createObjectURL()` 创建的 URL，以便浏览器可以回收 Blob 占用的内存。

## 总结

这段代码的主要功能是将 JavaScript 对象转换为 JSON 字符串，然后创建一个 Blob 对象，并通过创建一个隐藏的 `<a>` 标签并模拟点击事件来触发文件下载。这种方法适用于现代浏览器，是一种常见的文件导出技术。
