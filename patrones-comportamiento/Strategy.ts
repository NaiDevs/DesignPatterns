interface ShippingStrategy {
    calculate(amount: number): number;
}

class DistanceShipping implements ShippingStrategy {
    calculate(amount: number) {
        return amount * 1.2;
    }
}

class FreeShipping implements ShippingStrategy {
    calculate(_amount: number) {
        return 0;
    }
}

class ShippingContext {
    constructor(private strategy: ShippingStrategy) {}

    getShippingCost(amount: number) {
        return this.strategy.calculate(amount);
    }
}

const context = new ShippingContext(new DistanceShipping());
console.log('Costo de envío con DistanceShipping:', context.getShippingCost(100)); // 120

const freeContext = new ShippingContext(new FreeShipping());
console.log('Costo de envío con FreeShipping:', freeContext.getShippingCost(100)); // 0