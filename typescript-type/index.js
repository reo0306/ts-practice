"use strict";
let hasValue = false;
let count = 10;
let float = 2.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
const person = {
    name: 'Jack',
    age: 21,
};
// UNION型
const fruits = ['Apple', 'Banana', 'Grape', 1];
// タプル型
const book = ['business', 1500, false];
//book.push(21);
//console.log(book[3]); // 型違いでエラーになる
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
coffee.size = CoffeeSize.SHORT;
console.log(CoffeeSize.SHORT);
let anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.aaaa = 'aaaa';
let banana = 'banana';
// anyは型の安全性は無視
banana = anything;
// ユニオン型
let unionType = 10;
// 配列のユニオン型
let unionTypes = [1, 'hello'];
unionType = 'hello';
unionType.toUpperCase();
// リテラル型（決まった値のみ）。constを使うとリテラル型になる
const apple = 'apple';
// UNION型とリテラル型の組みあせ
let clothSize = 'large';
const cloth = {
    color: 'white',
    size: clothSize,
};
function add2(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    //console.log('hello');
}
console.log(sayHello());
let tmp;
// 関数の型注釈
const anotherAdd = function (num1, num2) {
    return num1 + num2;
};
// アロー関数
const dobuleNumber = (num) => num * 2;
const dobuleNumber2 = num => num * 2;
// コールバック関数
function doubleAndHandle(num, cb) {
    const dobuleNum = cb(num * 2);
    //console.log(dobuleNum);
}
doubleAndHandle(21, dobuleNum => {
    return dobuleNum;
});
let unknowInput;
let anyInput;
let text;
unknowInput = 'hello';
unknowInput = 21;
unknowInput = true;
text = anyInput;
// unknow型はtypeofで型を保証する必要がある
if (typeof unknowInput === 'string') {
    text = unknowInput;
}
// satisfies演算子 -> データの型チェック
// never型
function error(message) {
    throw new Error(message);
}
console.log(error('error'));
