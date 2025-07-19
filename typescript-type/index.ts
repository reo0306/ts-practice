let hasValue: boolean = false;
let count: number = 10;
let float: number = 2.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

const person: {
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 21,
}

// UNION型
const fruits: (string | number)[] = ['Apple', 'Banana', 'Grape', 1];

// タプル型
const book: [string, number, boolean] = ['business', 1500, false];
//book.push(21);
//console.log(book[3]); // 型違いでエラーになる

enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
}
coffee.size = CoffeeSize.SHORT;
console.log(CoffeeSize.SHORT);

let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.aaaa = 'aaaa';
let banana = 'banana';
// anyは型の安全性は無視
banana = anything;

// ユニオン型
let unionType: number | string = 10;
// 配列のユニオン型
let unionTypes: (number | string)[] = [1, 'hello'];
unionType = 'hello';
unionType.toUpperCase();

// 型の別名（type型）
type ClothSize = 'small' | 'medium' | 'large';

// リテラル型（決まった値のみ）。constを使うとリテラル型になる
const apple: 'apple' = 'apple';

// UNION型とリテラル型の組みあせ
let clothSize: ClothSize = 'large'
const cloth: {
    color: string,
    size: 'small' | 'medium' | 'large',
} = {
    color: 'white',
    size: clothSize,
}

function add2(num1: number, num2: number): number {
    return num1 + num2;
}

function sayHello(): void {
    //console.log('hello');
}
console.log(sayHello());
let tmp: undefined;

// 関数の型注釈
const anotherAdd: (n1: number, n2: number) => number = function (num1: number, num2: number): number {
    return num1 + num2;
};

// アロー関数
const dobuleNumber = (num: number): number => num * 2;
const dobuleNumber2: (num: number) => number = num => num * 2;

// コールバック関数
function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const dobuleNum = cb(num * 2);
    console.log(dobuleNum);
}
doubleAndHandle(21, dobuleNum => {
    return dobuleNum
});

let unknowInput: unknown;
let anyInput: any;
let text:string;
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
function error(message: string): never {
    throw new Error(message);
}
console.log(error('error'));