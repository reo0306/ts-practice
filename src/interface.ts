interface Human {
    name: string;
    age: number;
    greeting(message: string): void;
}

class Developer implements Human {
    constructor(public name: string, public age: number) {}

    greeting(message: string): void {
        console.log(`Hello!`);
    }
}