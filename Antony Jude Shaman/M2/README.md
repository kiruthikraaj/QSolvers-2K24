## Milestone - 2

### Table of Contents

- [Exporting and Consuming Modules](#exporting-and-consuming-modules)
  - [Exporting Modules](#exporting-modules)
  - [Consuming Modules](#consuming-modules)
- [How modules are loaded](#how-modules-are-loaded)

- [Event Emitters](#event-emitters)
  - [Passing arguments to event listeners](#passing-arguments-to-event-listeners)
  - [Exception handling](#exception-handling)
  - [Try and Catch](#try-and-catch)
- [Event Loop](#event-loop)
  - [Microtask Queue](#microtask-queue)
  - [Timer Queue](#timer-queue)
  - [I/O Queue](#i/o-queue)
  - [I/O Polling](#i/o-polling)
  - [Check Queue](#check-queue)
  - [Close Queue](#close-queue)

### Exporting and Consuming Modules

#### Exporting Modules

#### File Extension

- The file extension for `ECMAScript modules` is `.mjs` or `.js`.

- The file extension for `CommonJs modules` is `.js` or `.cjs`.

#### ECMAScript module system

- Exporting a module is done by using the `export` keyword.

- There are two types of exports:

  - Named Exports
  - Default Exports

- Named Exports:

  - Named exports are useful to export several values. During the import, it is mandatory to use the same name of the corresponding object.

    ```javascript
    export const name = "Antony";
    export const age = 21;
    export const city = "Chennai";
    ```

- Default Exports:

  - Default exports are useful to export only a single value. During the import, it is not mandatory to use the same name of the corresponding object.

    ```javascript
    const name = "Antony";
    export default name;
    ```

#### CommonJs module system

- Exporting a module is done by using the `module.exports` object.

- There are two types of exports:

  - Named Exports
  - Default Exports

- Named Exports:

  - Named exports are useful to export several values. During the import, it is mandatory to use the same name of the corresponding object.

    ```javascript
    module.exports.name = function name() {
      return "Antony";
    };
    ```

- Default Exports:

  - Default exports are useful to export only a single value. During the import, it is not mandatory to use the same name of the corresponding object.

    ```javascript
    module.exports = function name() {
      return "Antony";
    };
    ```

#### Consuming Modules

#### ECMAScript module system

- Importing a module is done by using the `import` keyword.

- There are two types of imports:

  - Named Imports
  - Default Imports

- Named Imports:

  - Named imports are useful to import several values. During the import, it is mandatory to use the same name of the corresponding object.

    ```javascript
    import { name, age, city } from "./eg.js";
    ```

- Default Imports:

  - Default imports are useful to import only a single value. During the import, it is not mandatory to use the same name of the corresponding object.

    ```javascript
    import name from "./eg.js";
    ```

#### CommonJs module system

- Importing a module is done by using the `require` function.

- There are two types of imports:

  - Named Imports
  - Default Imports

- Named Imports:

  - Named imports are useful to import several values. During the import, it is mandatory to use the same name of the corresponding object.

    ```javascript
    const module = require("./eg.js");
    console.log(module.name());
    ```

- Default Imports:

  - Default imports are useful to import only a single value. During the import, it is not mandatory to use the same name of the corresponding object.

    ```javascript
    const name = require("./eg.js");
    console.log(name());
    ```

### How modules are loaded

#### ECMAScript module system

- The ECMAScript module system uses the `import` keyword to load the modules.

- Using `type=module` in package.json file, we can specify that the project is using the ECMAScript module system.

  ```json
  {
    "type": "module"
  }
  ```

- CommonJS modules can be imported into ECMAScript modules by using the `import` keyword.

  ```javascript
  import module from "./eg.js";
  ```

#### CommonJs module system

- The CommonJs module system uses the `require` function to load the modules.

- By default, the CommonJs module system is used in Node.js.

- ECMAScript modules can be imported into CommonJs modules by using the `require` function.

  ```javascript
  const module = require("./eg.js");
  ```

> [!IMPORTANT]
>
> The `require()` call is synchronous and the `import` statement is asynchronous.
> The `require()` caches the module after the first time it is loaded.

### Event Emitters

- Event emitters are used to handle and respond to multiple events.

- The `EventEmitter` class is used to create event emitters.

- The `on` method is used to listen to an event.

- The `emit` method is used to emit an event.

```javascript
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("hello", () => {
  console.log("Hello Everyone");
});

eventEmitter.emit("hello");
```

- The `once` method is used to listen to an event only once.

```javascript
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.once("hello", () => {
  console.log("Hello Everyone");
});

eventEmitter.emit("hello");
eventEmitter.emit("hello"); // This will not be executed
```

- The `removeListener` method is used to remove a listener.

```javascript
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const hello = () => {
  console.log("Hello Everyone");
};

eventEmitter.on("hello", hello);

eventEmitter.emit("hello");

eventEmitter.removeListener("hello", hello);
```

### Passing arguments to event listeners

- Arguments can be passed to event listeners by using the `emit` method.

```javascript
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("hello", (name) => {
  console.log(`Hello ${name}`);
});

eventEmitter.emit("hello", "Antony");
```

### Exception handling

- The `error` event is used to handle exceptions.

```javascript
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("error", (err) => {
  console.log(`Error: ${err.message}`);
});

eventEmitter.emit("error", new Error("An error occurred"));
```

### Try and Catch

- The `try` and `catch` blocks are used to handle exceptions.

```javascript
try {
  throw new Error("An error occurred");
} catch (err) {
  console.log(`Error: ${err.message}`);
}
```

// tell about event loop and event loop phases

### Event Loop

- The event loop is a mechanism that allows Node.js to perform non-blocking I/O operations.

- The event loop is responsible for handling events, callbacks, and timers.

- The event loop phases are executed in a specific order.

- The event loop is responsible for handling asynchronous operations.

- The event loop is responsible for handling I/O operations.

```javascript
const fs = require("fs").promises;

fs.readFile("eg.txt", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
```

- The event loop consists of several queues:

  - Microtask Queue
  - Timer Queue
  - I/O Queue
  - Check Queue
  - Close Queue

> [!IMPORTANT]
>
> The order of the queues is based on their priority.

### Microtask Queue

- The microtask queue is responsible for handling process.nextTick and promises.

```javascript
process.nextTick(() => {
  console.log("Process Next Tick");
});

Promise.resolve().then(() => {
  console.log("Promise");
});
```

> [!NOTE]
>
> The microtask queue has the highest priority.
> The microtask queue is checked after each phase of the event loop.

### Timer Queue

- The timer queue is responsible for handling setTimeout and setInterval.

```javascript
setTimeout(() => {
  console.log("Set Timeout");
}, 0);
```

> [!NOTE]
>
> The timer queue has the second-highest priority.

### I/O Queue

- The I/O queue is responsible for handling I/O operations.

```javascript
const fs = require("fs");

fs.readFile("eg.txt", "utf-8", () => {
  console.log("Read File");
});
```

> [!NOTE]
>
> The I/O queue has the third-highest priority.

### I/O Polling

- The I/O polling phase is responsible for keep checking if an I/O operation is completed without blocking the event loop.

### Check Queue

- The check queue is responsible for handling setImmediate.

```javascript
setImmediate(() => {
  console.log("Set Immediate");
});
```

> [!NOTE]
>
> The check queue has the fourth-highest priority.

### Close Queue

- The close queue is responsible for handling close events.

```javascript
const eventEmitter = require("events");

eventEmitter.once("close", () => {
  console.log("Close Event");
});

eventEmitter.emit("close");
```
