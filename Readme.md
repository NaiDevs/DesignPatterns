# Design Patterns (Patrones de Diseño) — Resumen

Este repositorio contiene ejemplos de patrones de diseño en TypeScript y una pequeña CLI (`main.ts`) para listar y ejecutar los ejemplos.

## Diferencia entre una arquitectura y un patrón de diseño

- **Arquitectura**: La visión global del sistema. Define módulos, comunicación entre componentes, decisiones de despliegue, escalabilidad, seguridad y requisitos no funcionales. Ejemplos: microservicios, monolito, hexagonal.
- **Patrón de diseño**: Soluciones reutilizables y probadas a problemas locales de diseño de software (clases/objetos). Ejemplos: Factory, Adapter, Observer. Mientras que la arquitectura habla del plano general, los patrones son 'piezas' reutilizables dentro de ese plano.

## Tipos de patrones

- **Creacionales**: Abstracción de la creación de objetos (Factory Method, Abstract Factory, Builder, Prototype, Singleton).
- **Estructurales**: Cómo componer clases/objetos para formar estructuras mayores (Adapter, Facade, Composite, Decorator, Proxy, Bridge, Flyweight).
- **Comportamiento**: Comunicación y asignación de responsabilidades entre objetos (Strategy, Observer, Command, Chain of Responsibility, Iterator, State, Mediator, Memento, Visitor).

## Fundamentos de POO (con ejemplo `FactoryMethod`)

Los pilares principales y cómo se aplican en `Patrones Creacionales/FactoryMethod.ts`:

- **Herencia**: Permite a una clase derivar de otra. En el ejemplo se usa una interfaz `Food` que actúa como contrato que implementan `Pizza`, `Sushi`, `Empanada`.
- **Polimorfismo**: Permite usar instancias de distintas clases de forma intercambiable a través de una misma interfaz. `FoodFactory.createFood(...)` devuelve `Food` y el cliente llama `prepare()` sin conocer la implementación concreta.
- **Abstracción**: Separar la interfaz del detalle de implementación. La fábrica oculta la lógica de construcción; los clientes usan la interfaz `Food`.

Ejemplo rápido: si agregas `Taco` y lo registras en la fábrica, el cliente puede crear `Taco` sin modificar la lógica cliente.

## ¿Qué es `Record<>` en TypeScript?

`Record<K, T>` es un tipo utilitario:

- `K` es el conjunto de claves (normalmente literales tipo union o `keyof` de otro tipo).
- `T` es el tipo de los valores.

Ejemplo:

```ts
type Scores = Record<'math'|'cs'|'eng', number>;
// Equivale a: { math: number; cs: number; eng: number }
```

`Record` se usa para crear mapas seguros en tiempo de compilación y evitar claves arbitrarias.

## Patrones creacionales y cuándo usarlos

- **Factory Method**
	- Objetivo: definir una interfaz para crear un objeto, dejando que las subclases decidan qué clase instanciar.
	- Cuándo: cuando el código cliente debe trabajar con abstracciones y la elección de la implementación concreta debe ser flexible o configurable.

- **Abstract Factory**
	- Objetivo: proveer una interfaz para crear familias de objetos relacionados sin especificar sus clases concretas.
	- Cuándo: cuando necesitas garantizar que un conjunto de objetos compatibles se creen juntos (por ejemplo, conjunto de componentes UI coherentes para un tema).

- **Builder**
	- Objetivo: separar la construcción de un objeto complejo de su representación.
	- Cuándo: cuando tienes muchos parámetros opcionales o pasos de construcción y quieres construir variantes paso a paso.

- **Prototype**
	- Objetivo: crear nuevos objetos clonando un prototipo.
	- Cuándo: cuando la creación es costosa o quieres instancias basadas en un objeto plantilla.

- **Singleton**
	- Objetivo: asegurar una única instancia global de una clase.
	- Cuándo: uso limitado (logger global, caché), pero preferir inyección de dependencias cuando sea posible.

### Consejos

- No uses patrones por moda; úsalos cuando resuelvan un problema real.
- Empieza simple. Añade patrones si la complejidad futura lo requiere.
- Prefiere composición sobre herencia cuando sea posible.

## Patrones estructurales

Los patrones estructurales explican cómo ensamblar objetos y clases en estructuras más grandes, mientras se mantiene la flexibilidad y eficiencia.

- **Adapter** (`patrones-estructurales/Adapter.ts`)
	- Objetivo: convertir la interfaz de una clase en otra interfaz que el cliente espera.
	- Cuándo: cuando necesitas usar una clase existente pero su interfaz no coincide con la que necesitas.

- **Composite** (`patrones-estructurales/Composite.ts`)
	- Objetivo: componer objetos en estructuras de árbol para representar jerarquías parte-todo.
	- Cuándo: cuando necesitas tratar objetos individuales y composiciones de objetos de manera uniforme (ej: archivos y carpetas).

- **Decorator** (`patrones-estructurales/Decorator.ts`)
	- Objetivo: añadir responsabilidades a objetos de forma dinámica sin modificar su código.
	- Cuándo: cuando quieres extender funcionalidad sin usar herencia masiva o modificar clases existentes.

- **Facade** (`patrones-estructurales/Facade.ts`)
	- Objetivo: proporcionar una interfaz simplificada a un conjunto complejo de subsistemas.
	- Cuándo: cuando quieres ocultar la complejidad de un sistema y proveer una API más simple.

- **Proxy** (`patrones-estructurales/Proxy.ts`)
	- Objetivo: proporcionar un sustituto o marcador de posición para controlar el acceso a un objeto.
	- Cuándo: cuando necesitas lazy loading, control de acceso, logging, o caching para un objeto.

## Patrones de comportamiento

Los patrones de comportamiento se encargan de la comunicación efectiva y la asignación de responsabilidades entre objetos.

- **Chain of Responsibility** (`patrones-comportamiento/ChainOfResponsibility.ts`)
	- Objetivo: pasar una petición a lo largo de una cadena de manejadores hasta que uno la procese.
	- Cuándo: cuando múltiples objetos pueden manejar una petición y el manejador no se conoce de antemano.

- **Command** (`patrones-comportamiento/Command.ts`)
	- Objetivo: encapsular una petición como un objeto, permitiendo parametrizar clientes con diferentes peticiones.
	- Cuándo: cuando necesitas deshacer/rehacer operaciones, encolar peticiones, o registrar historial de acciones.

- **Observer** (`patrones-comportamiento/Observer.ts`)
	- Objetivo: definir una dependencia uno-a-muchos entre objetos para que cuando uno cambie, notifique a todos sus dependientes.
	- Cuándo: cuando un cambio en un objeto requiere cambiar otros, y no sabes cuántos objetos necesitan cambiar.

- **State** (`patrones-comportamiento/State.ts`)
	- Objetivo: permitir a un objeto alterar su comportamiento cuando su estado interno cambia.
	- Cuándo: cuando un objeto debe cambiar su comportamiento en tiempo de ejecución según su estado.

- **Strategy** (`patrones-comportamiento/Strategy.ts`)
	- Objetivo: definir una familia de algoritmos, encapsular cada uno y hacerlos intercambiables.
	- Cuándo: cuando tienes múltiples variantes de un algoritmo y quieres seleccionarlos en tiempo de ejecución.

## Glosario de términos

### `abstract class`
Una clase que no puede ser instanciada directamente y está diseñada para ser heredada por otras clases. Puede contener métodos abstractos (sin implementación) que las clases hijas deben implementar, así como métodos concretos con implementación.

```ts
abstract class Animal {
  abstract makeSound(): void; // Método abstracto (sin implementación)
  
  move(): void { // Método concreto
    console.log("El animal se mueve");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Guau!");
  }
}

// const a = new Animal(); // ❌ Error: no se puede instanciar
const dog = new Dog(); // ✅ Correcto
```

### `protected`
Modificador de acceso que hace que una propiedad o método sea accesible dentro de la clase que la define y en todas sus subclases, pero no desde fuera de la jerarquía de clases.

```ts
class Vehicle {
  protected engine: string = "V8";
  
  protected startEngine(): void {
    console.log("Motor encendido");
  }
}

class Car extends Vehicle {
  drive(): void {
    this.startEngine(); // ✅ Accesible en subclase
    console.log(`Conduciendo con motor ${this.engine}`);
  }
}

const car = new Car();
car.drive(); // ✅ Correcto
// car.startEngine(); // ❌ Error: protected, no accesible fuera
```

**Comparación de modificadores:**
- `public`: accesible desde cualquier lugar (por defecto en TS)
- `protected`: accesible en la clase y sus subclases
- `private`: solo accesible dentro de la misma clase

### `Record<K, T>`
Tipo utilitario de TypeScript que construye un objeto cuyas claves son del tipo `K` y valores del tipo `T`. Es útil para crear mapas o diccionarios con tipos seguros.

```ts
// Ejemplo 1: Mapeo de strings a números
type Scores = Record<string, number>;
const grades: Scores = {
  math: 95,
  english: 88,
  science: 92
};

// Ejemplo 2: Claves específicas con union types
type Status = 'pending' | 'approved' | 'rejected';
type StatusInfo = Record<Status, string>;

const messages: StatusInfo = {
  pending: "En espera de revisión",
  approved: "Solicitud aprobada",
  rejected: "Solicitud rechazada"
};

// Ejemplo 3: Uso común en patrones (Factory)
type FoodType = 'pizza' | 'sushi' | 'taco';
type FoodRegistry = Record<FoodType, () => Food>;
```

### `interface` vs `type`
Aunque similares, tienen diferencias sutiles:

- **Interface**: ideal para definir contratos de objetos, puede extenderse y ser implementada por clases.
- **Type**: más flexible, puede representar uniones, intersecciones, primitivos, etc.

```ts
// Interface: contratos de objetos
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

// Type: más versátil
type ID = string | number;
type Point = { x: number; y: number };
type Shape = Circle | Square | Triangle;
```

### `implements`
Palabra clave que indica que una clase debe cumplir con el contrato definido por una interfaz. La clase debe implementar todas las propiedades y métodos de la interfaz.

```ts
interface Drawable {
  draw(): void;
  color: string;
}

class Circle implements Drawable {
  color: string = "red";
  
  draw(): void {
    console.log(`Dibujando círculo ${this.color}`);
  }
}
```

### `extends`
Palabra clave usada para crear una jerarquía de herencia entre clases o para extender interfaces.

```ts
// Herencia de clases
class Animal {
  move(): void {
    console.log("Moviéndose");
  }
}

class Bird extends Animal {
  fly(): void {
    console.log("Volando");
  }
}

// Extensión de interfaces
interface Shape {
  color: string;
}

interface Circle extends Shape {
  radius: number;
}
```

### `readonly`
Modificador que indica que una propiedad solo puede ser asignada durante la inicialización y no puede ser modificada después.

```ts
class Config {
  readonly apiUrl: string = "https://api.example.com";
  
  constructor(url: string) {
    this.apiUrl = url; // ✅ OK en constructor
  }
  
  changeUrl(newUrl: string): void {
    // this.apiUrl = newUrl; // ❌ Error: readonly
  }
}
```

### `static`
Modificador que hace que una propiedad o método pertenezca a la clase misma en lugar de a las instancias. Útil para implementar Singleton o métodos utilitarios.

```ts
class MathHelper {
  static PI: number = 3.14159;
  
  static calculateArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

// Uso sin instanciar
console.log(MathHelper.PI);
console.log(MathHelper.calculateArea(5));
```

## Cómo ejecutar los ejemplos (rápido)

Requisitos: Node.js y npm instalados.

Instalar dependencias:

```powershell
npm install
```

Ejecutar el menú interactivo (lista carpetas y ejecuta archivos .ts):

```powershell
npm run cli
```

Ejecutar un ejemplo específico en modo development (ts-node):

```powershell
npm run dev
```

Compilar a JavaScript en `dist`:

```powershell
npm run build
```

Ejecutar JS compilado:

```powershell
npm start
```

