class Lasana {
    private size: string;
    private cheese: string;

    constructor(builder: LasanaBuilder) {
        this.size = builder.size;
        this.cheese = builder.cheese;
    }

    describe() {
        console.log(`Lasana de tamaño ${this.size} con queso ${this.cheese}.`);
    }
}

class LasanaBuilder {
    size: string = 'mediana';
    cheese: string = 'mozzarella';
    setSize(size: string): LasanaBuilder {
        this.size = size;
        return this;    
    }
    setCheese(cheese: string): LasanaBuilder {
        this.cheese = cheese;
        return this;
    }
    build(): Lasana {
        return new Lasana(this);
    }
}

const lasana = new LasanaBuilder()
    .setSize('grande')
    .setCheese('parmesano')
    .build();

const lasanita = new LasanaBuilder().setSize('pequeña').build();

lasana.describe();
lasanita.describe();