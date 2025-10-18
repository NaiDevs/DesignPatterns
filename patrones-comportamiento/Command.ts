interface Command {
    execute(): void;
    undo(): void;
}

class AddItemCommand implements Command {
    constructor(private order: string[], private item: string, private logs: string[] = []) {}

    execute(): void {
        this.order.push(this.item);
        this.logs.push(`Agregado ${this.item}`);
    }

    undo(): void {
        this.order.pop();
    }
}

const order: string[] = [];

const addPizza = new AddItemCommand(order, 'Pizza');
addPizza.execute();
console.log(order); // ['Pizza']

addPizza.undo();
console.log(order); // []