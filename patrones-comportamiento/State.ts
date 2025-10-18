interface OrderState {
    next(order: OrderContext): void;
    getStatus(): string;
}

class newOrder implements OrderState {
    next(order: OrderContext): void {
        order.setState(new PreparingOrder());
    }

    getStatus(): string {
        return 'Nuevo';
    }
}

class PreparingOrder implements OrderState {
    next(order: OrderContext): void {
        order.setState(new ShippedOrder());
    }

    getStatus(): string {
        return 'En preparación';
    }
}

class ShippedOrder implements OrderState {
    next(order: OrderContext): void {
        order.setState(new DeliveredOrder());
    }

    getStatus(): string {
        return 'Enviado';
    }
}

class DeliveredOrder implements OrderState {
    next(order: OrderContext): void {
        console.log('La orden ya ha sido entregada.');
    }

    getStatus(): string {
        return 'Entregado';
    }
}

class OrderContext {
    private state: OrderState;

    constructor() {
        this.state = new newOrder();
    }

    setState(state: OrderState) {
        this.state = state;
    }

    next() {
        this.state.next(this);
    }

    getStatus() {
        return this.state.getStatus();
    }
}

const order = new OrderContext();
console.log(order.getStatus()); // 'Nuevo'

order.next();
console.log(order.getStatus()); // 'En preparación'

order.next();
console.log(order.getStatus()); // 'Enviado'

order.next();
console.log(order.getStatus()); // 'Entregado'