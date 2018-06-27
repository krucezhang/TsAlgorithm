class BaseCalculator {
    constructor(protected value: number = 0) {

    }

    public Add(operand: number): this {
        this.value += operand;
        return this;
    }

    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
}

let val = new BaseCalculator(2).Add(2).multiply(2);

class ScientificCalaculator extends BaseCalculator {
    constructor(value: number = 0) {
        super(value);
    }

    public Sin(): this {
        this.value = Math.sin(this.value);
        return this;
    }
}

let vs = new ScientificCalaculator(3).Sin().Add(2).multiply(2);