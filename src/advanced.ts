interface Enginner {
    name: string,
    role: string,
}

interface Blogger {
    name: string,
    follower: number,
}

//type EnginnerBlogger = Enginner & Blogger;
interface EnginnerBlogger extends Enginner, Blogger {}

const quill: EnginnerBlogger = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000,
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

// 関数のオーバーロード（typescriptに正しく型を伝える）
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
interface TmpFunc {
    (x: string): number,
    (x: number): number,
}
const upperHello: TmpFunc = function (x: string | number) { return 0; };
/*interface FuncA {
    (a: number, b: string): number,
    (a: string, b: number): number,
}
interface FuncB {
    (a: string): number,
}
let intersectionFunc: FuncA & FuncB;
intersectionFunc = function (a: number | string, b?: number | string) { return 0; };*/
interface FuncA {
    (a: number, b: string): number,
}
interface FuncB {
    (a: string): string,
}
let unionFunc: FuncA | FuncB;

type NomadWorker = Enginner | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role)
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}

class Dog {
    kind: 'dog' = 'dog'
    speak() {
        console.log('bow-wow');
    }
}

class Bird {
    kind: 'bird' = 'bird' // tag付きユニオン
    speak() {
        console.log('tweet-tweet')
    }
    fly() {
        console.log('flutter')
    }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());

// 型アサーション（型を強制指定）
//const input = <HTMLInputElement>document.getElementById('input');
//const input = document.getElementById('input') as HTMLInputElement;
//input.value = 'initial input value';
(document.getElementById('input') as HTMLInputElement).value = 'initial input value';

// No NULLアサーション
//const input = document.getElementById('input')!;
//input.value = 'initial input value';
//(document.getElementById('input') as HTMLInputElement).value = 'initial input value';

// indexシグネチャー
interface Designer {
    name: string,
    [index: string]: string, // indexシグネチャー（オプション?はできない、readonlyはできる）
}
const designer: Designer = {
    name: 'Quill',
}

let foo = 'name';
designer[foo].toUpperCase()

interface DownloadData {
    id: number,
    user?: {
        name?: {
            first: string,
            last: string,
        }
    }
}

// optionalチェーニング
const downloadedData: DownloadData = {
    id: 1
}
console.log(downloadedData.user?.name?.first);

// ナレッシュコアーリング（phpのUFO演算子）null or undefinedなら
const userData = downloadedData.user ?? 'no-user'

// LookUp型（indexアクセス型）
type id = DownloadData["id"];

// 型の互換性（数字とENUMはお互い、いれることはできる）
enum Color {
    RED,
    BLUE,
}
class AvancedPerson {
    name: string = 'Peter'
    age: number = 35;
}
class AvancedCar {
    name: string = 'Prius'
    age: number = 5;
}
let target = new AvancedPerson();
let source = new AvancedCar();
target = source;

// restパラメータ / label tpul
function advencedFn(...args: readonly [age: number, name: string, hasPets?: boolean, ...scores: number[]]) {
}
//advencedFn(0, 'a', true, 3, 3, 3, 3);
advencedFn(26, 'aaa', true, 3, 3, 3);

function advencedFn2(...args: readonly number[]) {
}
advencedFn2(1,2);

// constアサーション
let milk = 'milk' as const;
let drink = milk;
const array = [10, 20] as const;
const peter = {
    name: 'Peter',
    age: 38,
} as const;

// 型の中にtypeofを使う。
type PeterType = typeof peter;

// シンボル型（他のデータと被らないデータ）
const symbol1: unique symbol = Symbol(); // 例）afjkafjalfklafjlajfal
const symbol2 = Symbol(); // 例）djfdddfdkfjasfkjallld
const obj = {
    [symbol1]: 'hello',
}
function myFnc(mySymbol: typeof symbol1) {}
myFnc(symbol1);
//myFnc(symbol2);
console.log(symbol1,symbol2);