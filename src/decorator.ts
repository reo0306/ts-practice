/* デコレーターは定義に実行。インスタンス化に実行されるわけじゃない */

// デコレーターファクトリー
function Logging(message: string) {
    console.log("Logging Factory");
    return function (constructor: Function) {
        console.log(message);
        console.log(constructor);
    }
}

function Component(template: string, selector: string) {
    console.log("Component Factory");
    return function<T extends { new(...args: any[]): { name: string }}>(constructor: T) {
        return class extends constructor { 
            constructor(...args: any[]) {
                super(...args);
                console.log("Component");
                const mountedElemen = document.querySelector(selector);
                const instance = new constructor();
        
                if (mountedElemen) {
                    mountedElemen.innerHTML = template;
                    mountedElemen.querySelector('h1')!.textContent = instance.name;
                }
            }
        }
    }
}

// 下から上にデコレーターは実行される。デコレーターファクトリーは上から下
@Logging('Logging User')
@Component('<h1>{{ name }}</h1>', '#app')
class User {
    name = 'Quill';
    constructor(public age: number) {
        console.log('User was created!');
    }
}

const user1 = new User(23);
const user2 = new User(231);
const user3 = new User(231);