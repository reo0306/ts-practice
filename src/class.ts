class Person {
    static species = 'Homo sapiens';

    static isAdult(age: number) {
        if (age > 17) return true;

        return false;
    }

    constructor(readonly name: string, protected age: number) {
    }

    incrementAge() {
        this.age += 1;
    }

    gretting(this: Person) {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    }
}

class Teacher extends Person {
    get subject(): string {
        if (!this._subject) {
            throw new Error('There is no subject.')
        }
        return 'Music';
    }

    set subject(value) {
        if (!this._subject) {
            throw new Error('There is no subject.')
        }
        this._subject = value;
    }

    constructor(name: string, age: number, private _subject: string) {
        super(name, age);
        //super.gretting();
    }
    gretting(this: Person) {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I tearch ${this.subject}`);
    }
}
const teacher = new Teacher('Quill', 38, 'Math');
console.log(teacher.subject);
teacher.gretting();