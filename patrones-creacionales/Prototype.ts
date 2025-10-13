interface Clonable<T> {
    clone(): T;
}

class Order implements Clonable<Order> {
    items: string[];
    address: string;

    constructor(items: string[], address: string) {
        this.items = items;
        this.address = address;
    }

    clone(): Order {
        return new Order([...this.items], this.address);
    }
}

const originalOrder = new Order(['pizza', "sushi"], "sector Chamelecon");
const clonedOrder = originalOrder.clone();

clonedOrder.items.push("empanada")

console.log("Orden Original", originalOrder.items);
console.log("Orden Clonada", clonedOrder.items);