interface OrderChain {
    inStock: boolean;
    paid: boolean;
}

abstract class ValidationHandler {
    protected next?: ValidationHandler;
    
    setNext(handler: ValidationHandler): ValidationHandler {
        this.next = handler;
        return handler;
    }

    handle(order: OrderChain): boolean {
        if (this.next) {
            return this.next.handle(order);
        }
        return true;
    }
}

class StockValidation extends ValidationHandler {
    handle(order: OrderChain): boolean {
        if (order.inStock){
            return super.handle(order);
        }
        console.log('Sin Stock');
        return false;
    }
}

class PaymentValidation extends ValidationHandler {
    handle(order: OrderChain): boolean {
        if (order.paid) {
            return super.handle(order);
        }
        console.log('Pago no realizado');
        return false;
    }
}

const stock = new StockValidation();
const payment = new PaymentValidation();
stock.setNext(payment);

// Ejemplo de uso
const order1: OrderChain = { inStock: true, paid: true };
const order2: OrderChain = { inStock: false, paid: true };
const order3: OrderChain = { inStock: true, paid: false };

stock.handle(order1); // Pasa todas las validaciones
stock.handle(order2); // Sin Stock
stock.handle(order3); // Pago no realizado