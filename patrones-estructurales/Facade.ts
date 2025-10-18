class OrderService {
    createOrder() {
        console.log("Orden Creada");
    }
}

class PaymentService {
    processPayment() {
        console.log("Pago Procesado");
    }
}

class DeliveryService {
    dispatchOrder() {
        console.log("Pedido Despachado");
    }
}

class OrderFacade {
    constructor(
        private orderService = new OrderService(),
        private paymentService = new PaymentService(),
        private deliveryService = new DeliveryService()
    ) { }

    placeOrder() {
        this.orderService.createOrder();
        this.paymentService.processPayment();
        this.deliveryService.dispatchOrder();
    }
}

// Uso

const facade = new OrderFacade(
    new OrderService(),
    new PaymentService(),
    new DeliveryService()
);

facade.placeOrder();