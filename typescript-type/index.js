var hasValue = false;
var count = 10;
var float = 2.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
var person = {
    name: 'Jack',
    age: 21,
};
// UNION型
var fruits = ['Apple', 'Banana', 'Grape', 1];
// タプル型
var book = ['business', 1500, false];
//book.push(21);
//console.log(book[3]); // 型違いでエラーになる
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
coffee.size = CoffeeSize.SHORT;
console.log(CoffeeSize.SHORT);
var anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.aaaa = 'aaaa';
var banana = 'banana';
// anyは型の安全性は無視
banana = anything;
// ユニオン型
var unionType = 10;
// 配列のユニオン型
var unionTypes = [1, 'hello'];
unionType = 'hello';
unionType.toUpperCase();
// リテラル型（決まった値のみ）。constを使うとリテラル型になる
var apple = 'apple';
// UNION型とリテラル型の組みあせ
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: clothSize,
};
function add2(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('hello');
}
console.log(sayHello());
