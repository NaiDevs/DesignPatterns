interface OrderHistory {
    getOrders(userId: string): string[];
}

class RealOrderHistory implements OrderHistory {
    getOrders(userId: string): string[] {
        console.log(`Recuperando órdenes para el usuario ${userId} desde la base de datos...`);
        return [`Pedido 1`, `Pedido 2`];
    }
}

class OrderHistoryProxy implements OrderHistory {
    private cache: Record<string, string[]> = {};
    constructor(private realOrderHistory: RealOrderHistory) { }

    getOrders(userId: string) {
        if (!this.cache[userId]) {
            this.cache[userId] = this.realOrderHistory.getOrders(userId);
        }
        return this.cache[userId];
    }
}

// Uso
const history: OrderHistory = new OrderHistoryProxy(new RealOrderHistory());
console.log(history.getOrders("usuario123")); // Llama al RealOrderHistory
console.log('==========================================');
console.log(history.getOrders("usuario123")); // Usa la caché