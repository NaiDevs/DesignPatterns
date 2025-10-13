interface Food {
    getDescription(): string;
    getCost(): number;
}

class BasicFood implements Food {
    getDescription() {
        return "Pollito Chuco";
    }

    getCost() {
        return 50;
    }
}

class RepolloDecorator implements Food {
    constructor(private food: Food) { }

    getDescription() {
        return `${this.food.getDescription()}, con repollo`;
    }

    getCost() {
        return this.food.getCost() + 10;
    }
}

class CaldoDecorator implements Food {
    constructor(private food: Food) { }

    getDescription() {
        return `${this.food.getDescription()}, con caldo extra`;
    }

    getCost() {
        return this.food.getCost() + 20;
    }
}


//Uso

let pollo: Food = new BasicFood();

pollo = new RepolloDecorator(pollo);
pollo = new CaldoDecorator(pollo);

console.log(pollo.getDescription());
console.log(pollo.getCost());