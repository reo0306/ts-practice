// 型を引数として渡せる,制約をつける
function copy<T extends { name: string }>(value: T): T {
    return value;
}
console.log(copy({ name: 'Quill'}));

const arrowFunc = <T>(num: T) => num;