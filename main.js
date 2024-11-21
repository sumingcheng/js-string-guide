/* charAt 返回指定索引位置的字符 */
console.log('charAt:', 'Why'.charAt(0)); // W
/* charCodeAt 返回指定位置字符串的 Unicode 编码 */
console.log('charCodeAt:', 'Why'.charCodeAt(0)); // 87
/* concat 链接两个字符串，形成新的 */
console.log('concat:', '???'.concat('😂')); // ???😂
/* endsWith 判断字符串是否以指定的字符串结尾 */
console.log('endsWith:', 'Why'.endsWith('y')); // true
/* includes 判断字符串里面是否包含你指定的字符串 */
console.log('includes:', 'Why'.includes('h')); // true
/* indexOf 返回字符串中指定文本首次出现的位置 */
console.log('indexOf:', 'Why'.indexOf('h')); // 1
console.log('indexOf:', 'Why'.indexOf('😀')); // -1
/* lastIndexOf 返回字符串中指定文本最后一次出现的位置 */
console.log('lastIndexOf:', '啊这？别吧！'.lastIndexOf('别')); // 3
console.log('lastIndexOf:', '啊这？别吧！'.lastIndexOf('😀')); // -1
/* localeCompare 比较两个字符串，返回一个数字表示比较结果 */
console.log('apple'.localeCompare('banana')); // 输出 -1，说明 'apple' 排在 'banana' 前
console.log('banana'.localeCompare('apple')); // 输出 1，说明 'banana' 排在 'apple' 后
console.log('apple'.localeCompare('apple')); // 输出 0，说明两个字符串相等
console.log(['banana', 'cherry', 'apple'].sort((a, b) => a.localeCompare(b))); // 输出: ['apple', 'banana', 'cherry']
/* match */
console.log('match:', 'Why'.match(/h/)); // [ 'h', index: 1, input: 'Why', groups: undefined ]

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

/* matchAll  匹配所有正则表达式实例，返回一个迭代器 */

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

/* normalize 返回字符串的 Unicode 规范化形式 */
// 用户输入的名字，有的来自键盘，有的来自粘贴，可能编码不同
const name1 = 'José'; // 'e' + 重音符号（U+0065 和 U+0301）
const name2 = 'José'; // 单一字符 'é'（U+00E9）

// 比较两个字符串（标准化前）
console.log(name1 === name2); // 预期输出: false

// 使用 normalize 方法进行标准化
const normalized1 = name1.normalize('NFC');
const normalized2 = name2.normalize('NFC');

// 再次比较标准化后的字符串
console.log(normalized1 === normalized2); // 预期输出: true

/* padEnd 填充指定长度的字符串 */
const str = 'Hello';
const padded = str.padEnd(10, '*');
console.log(padded); // 输出: "Hello*****"

/* padStart 往前填*/
const str2 = 'Hello';
const padded2 = str2.padStart(10, '*');
console.log(padded2); // 输出: "*****Hello"

/* repeat 重复指定次数的字符串 */
console.log('repeat:', '😂'.repeat(3)); // 😂😂😂

/* replace 替换字符串 */
console.log('replace:', '😂'.replace('😂', '😅')); // 😅
const newStr = 'Hello, world!'.replace(/(\w+)/g, (match) => match.toUpperCase());
console.log(newStr); // 输出: "HELLO, WORLD!"

/* search 方法通常用于需要在较大数据集中检索特定模式或关键词的场景 */
console.log('Hello, world!'.search(/world/)); // 输出: 7
console.log('Hello, world!'.search(/JavaScript/)); // 输出: -1

/* slice  切一段*/
console.log('012345678'.slice(0, 5)); // 输出: 01234

/* startsWith 判断字符串是否以指定的字符串开头 */
console.log('startsWith:', 'No~'.startsWith('N')); // true
console.log(str.startsWith('world', 7)); // false

/* substr  替换与正则表达匹配的字符串*/
console.log('replace:', '😂'.replace('😂', '😅')); // 😅
const substr = 'Hello, world!'.replace(/(\w+)/g, (match) => match.toUpperCase());
console.log(substr); // 输出: "HELLO, WORLD!"

/* search 正则搜索，搜到返回字符串开始的位置*/
let searchStr = '123456W3Schools!';
let n = searchStr.search(/w3schools/i); // 忽略大小写
console.log(n); // 6

/* slice 截取字符串的一部分，并返回一个新的字符串，不会修改原字符串。一般用来取一段数据*/
const slicedText = 'slicedText'.slice(1, 5);
console.log('🚀 ~ slicedText:', slicedText); // 🚀 ~ slicedText: lice

/* split 将字符串拆分为数组 */
let data = 'name, age, city, country';
let items = data.split(', ');
console.log('🚀 ~ items:', items); // 🚀 ~ items: [ 'name', 'age', 'city', 'country' ]

/* startsWith */
let startsWith = 'Hello world';
// 检查字符串是否以 "Hello" 开始
console.log(startsWith.startsWith('Hello')); // 输出 true
// 检查字符串是否以 "hello" 开始，忽略大小写
console.log(startsWith.toLowerCase().startsWith('hello'.toLowerCase())); // 输出 true
// 从索引6开始检查是否以 "world" 开始
console.log(startsWith.startsWith('world', 6)); // 输出 true

/* substr 从字符串中提取一个子字符串，根据指定的开始索引和长度。它非常适合从字符串中获取特定部分。 */
let substrText = 'Hello world';
let subStr = substrText.substr(6, 5);
console.log('🚀 ~ subStr:', subStr);

/* substring 从字符串中提取一个子字符串，根据两个指定的索引（开始和结束索引）。 */
let substring = 'sumingcheng';

// 提取 "ming"
let part1 = substring.substring(2, 6);
console.log(part1); // 输出 "ming"

// 提取 "cheng"
let part2 = substring.substring(6);
console.log(part2); // 输出 "cheng"

// 提取 "sum"
let part3 = substring.substring(0, 3);
console.log(part3); // 输出 "sum"

/* toLocaleLowerCase 主机的语言环境把字符串转换为小写 */
let toLocaleLowerCase = 'Hello World!';
console.log(toLocaleLowerCase.toLocaleLowerCase()); // 输出: hello world!

/* toLocaleUpperCase 主机的语言环境把字符串转换为大写 */
let toLocaleUpperCase = 'Hello World!';
console.log(toLocaleUpperCase.toLocaleUpperCase()); // 输出: HELLO WORLD!

/* toLowerCase 将字符串转换为小写 */
console.log('🚀 ~ toLowerCase:', 'AAAAAAAAAAA'.toLowerCase());

/* toUpperCase 将字符串转换为大写 */
console.log('🚀 ~ toUpperCase:', 'aaaaaaaaaa'.toUpperCase());

/* toString  */
let strNumber = 123;
console.log(strNumber.toString()); // 输出: "123"
let obj = {
  name: 'sum',
  age: 18,
};
console.log(obj.toString()); // 输出: "[object Object]"

/* trim */
const s = '   Why😂   ';
console.log(s.trim());

/* trimStart()  trimLeft() */
const trimStart = '    1 Why😂 1    ';
console.log(trimStart.trimStart());
console.log(trimStart.trimLeft());

/* trimEnd()  trimRight() */
const trimEnd = '    1 Why😂 1    ';
console.log(trimEnd.trimEnd()); // 输出: "    1 Why😂 1"
console.log(trimEnd.trimRight()); // 输出: "    1 Why😂 1"

/* valueOf */
let strObj = new String('42');
// JavaScript 会隐式地调用 strObj.valueOf()，返回 "42" 字符串。
console.log(strObj + 8); // 输出: "428"

/* String.fromCharCode */
let fromCharCode = String.fromCharCode(72, 101, 108, 108, 111);
console.log(fromCharCode); // 输出: "Hello"

/* String.fromCodePonit */
let smileys = String.fromCodePoint(0x1f600, 0x1f609, 0x1f60d);
console.log(smileys); // 输出: 😀😉😍

/* String.raw */
let strRaw = `Hello\nWorld\t!!`;
console.log(strRaw); // 输出: "Hello
//          World    !!"

/* codePonitAt */
let codePointStr = 'Hello';
console.log(codePointStr.codePointAt(0)); // 输出: 72  (字符 'H' 的 Unicode 编码点)
console.log(codePoincodePointStrtAt.codePointAt(1)); // 输出: 101 (字符 'e' 的 Unicode 编码点)

/* at  */
let strAt = 'Hello';
console.log(strAt.at(0)); // 输出: "H"
console.log(strAt.at(1)); // 输出: "e"
console.log(strAt.at(4)); // 输出: "o"
