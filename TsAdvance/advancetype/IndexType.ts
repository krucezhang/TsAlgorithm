function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: "Jarid",
    age: 22
};

let strings: string[] = pluck(person, ["name"]);

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name];
}