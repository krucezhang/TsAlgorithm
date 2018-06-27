interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

function getSmallPet(): Bird | Fish {
    let result = {} as Bird | Fish;

    return result;
}


let pet = getSmallPet();

if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
} else {
    (<Bird>pet).fly();
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}


//Typeof 绫诲瀷淇濇姢
function isNumber(value: any): value is number {
    return typeof value === "number";
}

function isString(value: any): value is string {
    return typeof value === "string";
}

//function PadLeft(value: string, padding: number | string) {
//    if (typeof padding === "number") {
//        return Array(padding + 1).join(" ") + value;
//    }
//    if (typeof padding === "string") {
//        return padding + value;
//    }

//    throw new Error(`Expected string or number, got ${padding}`);
//}

//instanceof 绫诲瀷淇濇姢
