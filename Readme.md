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

## Patrones estructurales (ejemplos en este repo)

Estos son los dos patrones estructurales que agregaste en la carpeta `patrones-estructurales`:

- **Adapter** — convierte la interfaz de un servicio/objeto externo a la interfaz que tu aplicación espera. Ejemplo: `patrones-estructurales/Adapter.ts`.
- **Decorator** — envuelve instancias para añadir responsabilidades de forma dinámica sin cambiar la clase original. Ejemplo: `patrones-estructurales/Decorator.ts`.

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

