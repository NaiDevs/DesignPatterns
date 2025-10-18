interface Observer {
    update(orderId: string): void;
}

class Kitchen implements Observer {
    update(orderId: string): void {
        console.log(`Cocina: Preparando la orden ${orderId}`);
    }
}

class Delivery implements Observer {
    update(orderId: string): void {
        console.log(`Delivery: Orden ${orderId} está lista para ser entregada`);
    }
}

class OrderSubject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    notify(orderId: string): void {
        this.observers.forEach(observer => observer.update(orderId));
    }
}

const subject = new OrderSubject();
subject.addObserver(new Kitchen());
subject.addObserver(new Delivery());

subject.notify('12345');