// 型を引数として渡せる,制約をつける
function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
    value[key];
    return value;
}
console.log(copy({ name: 'Quill', age: 38}, 'name'));

// キーからユニオン型を作る
type K = keyof { name: string, age: number};

class LightDatabase<T extends string | number | boolean> {
    private data: T[] = [];
    add(item: T) {
        this.data.push(item);
    }
    remove(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}

const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase.get());

interface TmpDatabase<T> {
    id: number,
    data: T[],
}

const tmpDatabase: TmpDatabase<number> = {
    id: 3,
    data: [32]
}

type TmpDatabase2<T> {
    id: number,
    data: T[],
}

// ユーティリティタイプ
interface Todo {
    title: string,
    text: string,
}
// 全部オプションにする
type Todoable = Partial<Todo>
// 全部readonlyにする
type ReadTodo= Readonly<Todo>

const fetchData: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000)
});

fetchData.then(data => {
    data.toUpperCase();
});

// 配列の型
const vegetables: Array<string> = ['Tomato', 'Broccoli', 'Asparagus'];

interface ResponseData<T extends { message: string} = any> {
    data: T,
    status: number,
}
let GenericsTmp2: ResponseData;

interface Vagetables {
    readonly tomato: string,
    pumpkin: string,
}
let GenericsTmp3: keyof Vagetables;

// マップドタイプ
// 「-」で打ち消す
type MappedTypes = {
    -readonly [P in keyof Vagetables]-?: string
}

// コンディショナルタイプ
// tomato型がstringに代入できるならnumber そうじゃないならboolean
//type ConditionalTypes = 'tomato' extends string ? number: boolean;
type ConditionalTypes = string extends 'tomato' ? number: boolean;
type ConditionalTypesInfer = { tomato: string } extends { tomato: infer R } ? R : boolean;
type DistributiveConditionalTypes<T> = T extends 'tomato' ? number : boolean;
let GenericsTmp4: DistributiveConditionalTypes<'tomato' | 'pumpkin'>
let GenericsTmp5: NonNullable<string | null>;