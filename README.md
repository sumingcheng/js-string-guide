## charAt(index)

返回指定索引位置的字符

```js
const s = "Why";

console.log('charAt:', s.charAt(0)); // W
```

## charCodeAt(index)

返回指定位置字符串的 Unicode 编码

```js
const s = "Why";

console.log('charCodeAt:', s.charCodeAt(0)); // 87
```

## concat(str1, str2, ...)
连接两个或多个字符串，返回新的字符串。
```js
console.log('concat:', '???'.concat('😂')); // ???😂
```

## endsWith(searchString, length)
判断字符串是否以指定的字符串结尾，`length` 为可选参数。
```js
console.log('endsWith:', 'Why'.endsWith('y')); // true
```

## includes(searchString, position)
判断字符串是否包含指定的字符串，`position` 为可选参数。
```js
console.log('includes:', 'Why'.includes('h')); // true
```

## indexOf(searchValue, fromIndex)
返回指定字符串首次出现的索引，如果不存在则返回 -1。
```js
console.log('indexOf:', 'Why'.indexOf('h')); // 1
console.log('indexOf:', 'Why'.indexOf('😀')); // -1
```

## lastIndexOf(searchValue, fromIndex)
返回指定字符串最后一次出现的索引，如果不存在则返回 -1。
````js
console.log('lastIndexOf:', '啊这？别吧！'.lastIndexOf('别')); // 3
console.log('lastIndexOf:', '啊这？别吧！'.lastIndexOf('😀')); // -1
````

## localeCompare(compareString, locales, options)
用于比较两个字符串并返回一个数字，表示它们的相对顺序。它特别有用在按字母顺序排序时，并且可以处理不同语言的排序规则
```js
console.log('apple'.localeCompare('banana')); // 输出 -1，说明 'apple' 排在 'banana' 前
console.log('banana'.localeCompare('apple')); // 输出 1，说明 'banana' 排在 'apple' 后
console.log('apple'.localeCompare('apple')); // 输出 0，说明两个字符串相等
```

`localeCompare` 通常用于数组排序，尤其是在需要根据不同语言规则进行排序时。

```js
// 输出: ['apple', 'banana', 'cherry']
console.log(['banana', 'cherry', 'apple'].sort((a, b) => a.localeCompare(b))); 
```

## match(regexp)
匹配正则表达式，返回匹配结果的数组

**不带全局标志 (`g`)**：`match()` 返回的数组包含完整匹配项、捕获组的内容，以及 `index` 和 `input` 属性。

**带全局标志 (`g`)**：返回所有匹配项组成的数组，不包括捕获组，也没有 `index` 和 `input` 属性。

### 示例
```js
console.log('match:', 'Why'.match(/h/)); 
// [ 'h', index: 1, input: 'Why', groups: undefined ]

const sentence = 'Hello, my number is 123-456-7890.';
const result = sentence.match(/(\d{3})/);
console.log('result:', result);
// 输出:
// [
//   '123-456-7890', // 完整匹配项
//   '123',          // 第一个捕获组
//   '456',          // 第二个捕获组
//   '7890'          // 第三个捕获组
// ]
console.log('result.index:', result.index); // 输出: 18
console.log('result.input:', result.input); // 输出: 'Hello, my number is 123-456-7890.'

const text = '上班真累啊，我想睡觉。';
const allMatches = text.match(/\累/g);
console.log('allMatches:', allMatches);
// 输出: allMatches: [ '累' ]
```

## matchAll(regexp)
匹配所有正则表达式实例，返回一个迭代器，方便你使用`for...of` 循环进行遍历。
### 示例
```javascript
// 使用正则表达式匹配所有两个汉字的名字
const regex = /[\u4e00-\u9fa5]{2}/g;
const matches = '刘涛和高老师，一起去了餐馆。'.matchAll(regex);

// 使用 for...of 循环遍历结果
for (const match of matches) {
  console.log(`匹配到的名字: ${match[0]}`);
}
// 匹配到的名字: 刘涛
// 匹配到的名字: 和高
// 匹配到的名字: 老师
// 匹配到的名字: 一起
// 匹配到的名字: 去了
// 匹配到的名字: 餐馆
```

## normalize(form)
主要用于将字符串的不同表示形式进行标准化。在处理多语言文本或与其他系统交换数据时，可能会遇到字符的不同 Unicode 组合（例如有带重音符号的字符、不同的合成字符等），这时候 `normalize()` 非常有用。标准化为 Unicode 形式，有以下参数

**`'NFC'`**（默认）：标准化为标准组合字符形式。

**`'NFD'`**：标准化为标准分解字符形式。

**`'NFKC'`**：标准化为兼容组合字符形式。

**`'NFKD'`**：标准化为兼容分解字符形式。

```js
/* normalize 返回字符串的 Unicode 规范化形式 */
// 用户输入的名字，有的来自键盘，有的来自粘贴，可能编码不同
const name1 = "José"; // 'e' + 重音符号（U+0065 和 U+0301）
const name2 = "José"; // 单一字符 'é'（U+00E9）

// 比较两个字符串（标准化前）
console.log(name1 === name2); // 预期输出: false

// 使用 normalize 方法进行标准化
const normalized1 = name1.normalize('NFC');
const normalized2 = name2.normalize('NFC');

// 再次比较标准化后的字符串
console.log(normalized1 === normalized2); // 预期输出: true
```

使用 `normalize('NFC')` 可以确保字符串的一致性，虽然用的少，但有时候特别有用

## padEnd(targetLength, padString)

用于在字符串的末尾填充指定的字符，直到字符串达到指定的长度。
```js
const str = 'Hello';
const padded = str.padEnd(10, '*');
console.log(padded); // 输出: "Hello*****"
```

## padStart(targetLength, padString)
上面的例子，反过来了
```js
const str2 = 'Hello';
const padded2 = str2.padStart(10, '*');
console.log(padded2); // 输出: "*****Hello"
```

## repeat(count)
返回一个新字符串，表示将原字符串重复指定次数。

```js
console.log('repeat:', '😂'.repeat(3)); // 😂😂😂
```

## replace(regexp | substr, newSubstr | function)
替换与正则表达式匹配的子串，接收两个参数

**模式**（可以是字符串或正则表达式）

**替换字符串**（或一个替换函数）

```js
console.log('replace:', '😂'.replace('😂', '😅')); // 😅
const newStr = "Hello, world!".replace(/(\w+)/g, (match) => match.toUpperCase());
console.log(newStr); // 输出: "HELLO, WORLD!"
```

## search(regexp)
使用正则来搜索，匹配成功则返回正则表达式在字符串中的开始位置。如果没有匹配到，则返回-1。
```js
let searchStr = "123456W3Schools!";
let n = searchStr.search(/w3schools/i); // 忽略大小写
console.log(n);  // 6
```

## slice(beginIndex, endIndex)
提取字符串的一部分，并返回一个新字符串。它不会改变原始字符串。
````js
const slicedText = 'slicedText'.slice(1, 5);
console.log('🚀 ~ slicedText:', slicedText); // 🚀 ~ slicedText: lice
````

## split(separator, limit)

将字符串按指定的分隔符切分成一个数组

```js
let data = 'name, age, city, country';
let items = data.split(', ');
console.log('🚀 ~ items:', items); // 🚀 ~ items: [ 'name', 'age', 'city', 'country' ]
```

## startsWith(searchString, position)

**searchString**（必需）：要搜索的子字符串。该字符串用于判断目标字符串的开头部分。

**position**（可选）：一个整数，表示从目标字符串的哪个索引位置开始查找 `searchString`。默认值为 `0`，即从字符串的开始位置进行查找。

````js
let startsWith = 'Hello world';
// 检查字符串是否以 "Hello" 开始
console.log(startsWith.startsWith('Hello')); // 输出 true
// 检查字符串是否以 "hello" 开始，忽略大小写
console.log(startsWith.toLowerCase().startsWith('hello'.toLowerCase())); // 输出 true
// 从索引6开始检查是否以 "world" 开始
console.log(startsWith.startsWith('world', 6)); // 输出 true
````

## substring(indexStart, indexEnd)
返回字符串两个索引之间（或到字符串末尾）的子串。

```js
let substring = "sumingcheng";

// 提取 "ming"
let part1 = substring.substring(2, 6);
console.log(part1);  // 输出 "ming"

// 提取 "cheng"
let part2 = substring.substring(6);
console.log(part2);  // 输出 "cheng"

// 提取 "sum"
let part3 = substring.substring(0, 3);
console.log(part3);  // 输出 "sum"

```

## toLocaleLowerCase(locale)
根据主机的语言环境把字符串转换为小写。

```js
let toLocaleLowerCase = 'Hello World!';
console.log(toLocaleLowerCase.toLocaleLowerCase()); // 输出: hello world!
```

## toLocaleUpperCase(locale)
根据主机的语言环境把字符串转换为大写。
````js
let toLocaleUpperCase = 'Hello World!';
console.log(toLocaleUpperCase.toLocaleUpperCase()); // 输出: HELLO WORLD!
````

## toLowerCase()
把字符串转换为小写。


```js
console.log('🚀 ~ toLowerCase:', "AAAAAAAAAAA".toLowerCase());
```

## toString()
将一个值转换为字符串
````js
let strNumber = 123;
console.log(strNumber.toString()); // 输出: "123"
let obj = {
  name: 'sum',
  age: 18,
};
console.log(obj.toString()); // 输出: "[object Object]"
````

在 JavaScript 中，所有的对象都继承自 `Object.prototype`，并且 `Object.prototype` 中定义了一个 `toString()` 方法。这个方法的实现返回的格式是 `"[object Type]"`，其中 `Type` 是对象的类型标识符。对于普通对象来说，`Type` 就是 `"Object"`。

## toUpperCase()

把字符串转换为大写。

```js
console.log('🚀 ~ toUpperCase:', "aaaaaaaaaa".toUpperCase());
```

## trim()
去除字符串两端的空白字符。
````js
const s = "   Why😂   ";
console.log(s.trim());
````

## trimStart() \| trimLeft()
去除字符串左端的空白字符。

```js
const trimStart = '    1 Why😂 1    ';
console.log(trimStart.trimStart()); // 1 Why😂 1 
console.log(trimStart.trimLeft()); // 1 Why😂 1 
```

## trimEnd() \| trimRight()
去除字符串右端的空白字符。

```js
const trimEnd = '    1 Why😂 1    '
console.log(trimEnd.trimEnd()); // 输出: "    1 Why😂 1"
console.log(trimEnd.trimRight()); // 输出: "    1 Why😂 1"
```

## valueOf()
返回对象的原始值。

```js
let strObj = new String("42");
// JavaScript 会隐式地调用 strObj.valueOf()，返回 "42" 字符串。
console.log(strObj + 8);  // 输出: "428"
```

## String.fromCharCode(num1, num2, ...)
将 Unicode 编码点（数字）转换为字符的静态方法，它接受一个或多个整数参数，并返回一个由这些 Unicode 编码点对应的字符组成的字符串。
````js
let fromCharCode = String.fromCharCode(72, 101, 108, 108, 111);
console.log(fromCharCode); // 输出: "Hello"
````

## String.fromCodePoint(num1, num2, ...)
从 Unicode 编码点创建字符串。

```js
let smileys = String.fromCodePoint(0x1F600, 0x1F609, 0x1F60D);
console.log(smileys);  // 输出: 😀😉😍
```

## String.raw\`templateString\`
`String.raw` 是 JavaScript 中的一个内置标签模板（tagged template）函数。它允许你在模板字符串中获取 **原始的未经转义的字符串**，即保留字符串中的 **转义字符**（如 `\n`、`\t`、`\r` 等），而不会将它们解析为对应的特殊字符。这个方法对于处理原始字符串或需要直接使用带有反斜杠的字符串（例如文件路径、正则表达式等）非常有用。


```js
let strRaw = `Hello\nWorld\t!!`;
console.log(strRaw);  // 输出: "Hello
                      //          World    !!"
```

## at(index)
用于 **返回指定索引位置的字符**

```js
let strAt = 'Hello';
console.log(strAt.at(0)); // 输出: "H"
console.log(strAt.at(1)); // 输出: "e"
console.log(strAt.at(4)); // 输出: "o"
```
