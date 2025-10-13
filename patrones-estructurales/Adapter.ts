//Interfaz que esperamos

interface Payment {
    pay(amount: number): void;
}

//Servicio Externo
class StripeService {
    makePayment(value: number) {
        console.log(`Pagando $${value} con Stripe`);
    }
}

class StripeAdapter implements Payment {
    constructor(private stripe: StripeService) { }

    pay(amount: number) {
        this.stripe.makePayment(amount);
    }
}

//Uso
const payment: Payment = new StripeAdapter(new StripeService());
payment.pay(100);
