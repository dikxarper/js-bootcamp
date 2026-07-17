# Notes for 4th day

## Lexical Scope

JavaScript использует лексическую область видимости (lexical scope).

1. В текущей области.
2. Затем во внешней.
3. Затем ещё выше.
4. До глобальной области.

Поиск идёт по месту объявления функции, а не по месту её вызова.

## Параметры и аргументы

Параметры — переменные при объявлении функции. Параметр по умолчанию используется только когда аргумент отсутствует или равен undefined.

function add(a, b) {}

Аргументы — значения при вызове функции.

add(2, 3);

a, b → параметры

2, 3 → аргументы

## Shadowing

Локальная переменная с тем же именем скрывает внешнюю.

let x = 10;

function test() {
    let x = 20;
}

Внутри функции используется x = 20.

## Function Declaration and Function Expression

Function Declaration:

```javascript

function sayHello() {
    return "Hello";
}

```

Function Expression:

```javascript

const sayHello = function () {
    return "Hello";
};

```

Именной Function Expression. `greet` доступно снаружи, а `sayHello` доступно только внутри самой функции:

```javascript

const greet = function sayHello() {
  console.log(typeof sayHello);
};

greet();

```
