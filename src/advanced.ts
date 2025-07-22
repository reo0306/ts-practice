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

function toUpperCase(x: string | number) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return '';
}

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
const input = document.getElementById('input') as HTMLInputElement;
input.value = 'initial input value';
