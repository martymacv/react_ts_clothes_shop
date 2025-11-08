# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Основные типы в TypeScript
## Примитивные типы
### string - строки
```let name: string = "Иван";```
### number - числа (целые и дробные)
```
let age: number = 25;
let pi: number = 3.14;
```
### boolean - логические значения
```let isActive: boolean = true;```
### null и undefined - специальные типы
```
let maybeNull: null = null;
let maybeUndefined: undefined = undefined;
```
### symbol - уникальные идентификаторы
```let sym1: symbol = Symbol("id");```
### bigint - большие целые числа
```let big: bigint = 123456789012345678901234567890n;```
## Составные типы
### Array - массивы
```
let numbers: number[] = [1, 2, 3];
let arr: Array<string> = ["a", "b", "c"];
```
### Tuple - кортежи (массивы с фиксированным размером)
```let person: [string, number] = ["Иван", 25];```
### Enum - перечисления
```
enum Color {
    Red,
    Green,
    Blue
}
```
### Any - любой тип (отключает проверку типов)
```
let anyVar: any = "Hello";
anyVar = 42;
```
### Unknown - безопасный аналог any
```
let unknownVar: unknown = "Hello";
// Нужно явно проверять тип перед использованием
```
## Объектные типы
### Object - базовый тип объекта
```let obj: object = { name: "Иван" };```
### Interface - описание структуры объекта
```
interface User {
    name: string;
    age: number;
}
```
### Type Alias - псевдонимы типов
```
type Coordinates = {
    x: number;
    y: number;
}
```
## Функциональные типы
### Function - типы функций
```
let add: (a: number, b: number) => number;
add = (x, y) => x + y;
```
## Условные типы
### Optional - необязательные свойства
```
interface User {
    name: string;
    age?: number;
}
```
### Readonly - неизменяемые свойства
```
interface User {
    readonly id: number;
    name: string;
}
```
## Объединения и пересечения
### Union - объединение типов
```let id: string | number;```
### Intersection - пересечение типов
```
interface Person {
    name: string;
}

interface Address {
    city: string;
}

type PersonWithAddress = Person & Address;
```
## Встроенные типы
### Promise - промисы
```
function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        resolve("Данные");
    });
}
```
### Generator - генераторы
```
function* generateId(): Generator<number> {
    let id = 0;
    while (true) {
        yield id++;
    }
}
```
## Дополнительные возможности
### Generic - обобщенные типы
```
function identity<T>(arg: T): T {
    return arg;
}
```
### Mapped Types - маппинг типов
```
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}
```
### Conditional Types - условные типы
```type IsString<T> = T extends string ? true : false;```

Это основные типы TypeScript, которые покрывают большинство потребностей при разработке. Каждый тип можно комбинировать с другими для создания более сложных структур данных.