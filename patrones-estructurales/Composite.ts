interface FoodItem {
    getName(): string;
    getPrice(): number;
}

class SimpleFood implements FoodItem { 
    constructor(private name: string, private price: number) {}

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

class Combo implements FoodItem {
    private items: FoodItem[] = [];

    addItem(item: FoodItem) {
        this.items.push(item);
    }

    getName() {
        return `Combo ${this.items.map(i => i.getName()).join(', ')}`;
    }

    getPrice() {
        return this.items.reduce((sum, i) => sum + i.getPrice(), 0);
    }
}

// Uso

const burger = new SimpleFood("Hamburguesa", 5);
const fries = new SimpleFood("Papas Fritas", 2);
const soda = new SimpleFood("Refresco", 1.5);


const combo = new Combo();
combo.addItem(burger);
combo.addItem(fries);
combo.addItem(soda);

console.log(combo.getName()); // Combo Hamburguesa, Papas Fritas, Refresco
console.log(`Precio Total: $${combo.getPrice()}`); // Precio Total: $8.5