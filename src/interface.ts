interface Nameable {
    name: string;
}

interface Human extends Nameable {
    age: number;
    greeting(message: string): void;
}

class Developer implements Human {
    constructor(public name: string, public age: number, public experience) {}

    greeting(message: string): void {
        console.log(message);
    }
}

const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    greeting(message: string) {
        console.log(message);
    }
}
let user: Human = tmpDeveloper;
