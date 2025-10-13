interface Food {
    prepare(): void;
}

class Pizza implements Food {
    prepare() {
        console.log("Preparing Pizza...");
    }
}

class Sushi implements Food {
    prepare() {
        console.log("Preparing Sushi...");
    }
}

class Empanada implements Food {
    prepare() {
        console.log("Preparing Empanada...");
    }
}

const TiposDeComida = {
    "pizza": Pizza,
    "sushi": Sushi,
    "empanada": Empanada,
} as const;

class FoodFactory {
    static createFood(type: keyof typeof TiposDeComida): Food {
        return new TiposDeComida[type]();
    }
}

const factory = FoodFactory.createFood("sushi");
factory.prepare();


// Abstract Factory

class ArgentinaPizza extends Pizza {
    prepare() {
        console.log("Preparing Argentine Pizza with fainá...");
    }
}

class ArgentinaSushi extends Sushi {
    prepare() {
        console.log("Preparing Argentine Sushi with local ingredients...");
    }
}

class JapaneseSushi extends Sushi {
    prepare() {
        console.log("Preparing Japanese Sushi with fresh fish...");
    }
}

class JapanisePizza extends Pizza {
    prepare() {
        console.log("Preparing Japanese Pizza with seaweed...");
    }
}

interface FoodFactory {
    createPizza(): Pizza;
    createSushi(): Sushi;
}

class ArgentinaFoodFactory implements FoodFactory {
    createPizza(): Pizza {
        return new ArgentinaPizza();
    }
    createSushi(): Sushi {
        return new ArgentinaSushi();
    }
}

class JapaniseFoodFactory implements FoodFactory {
    createPizza(): Pizza {
        return new JapanisePizza();
    }
    createSushi(): Sushi {
        return new JapaneseSushi();
    }
}