# NodeJS Milestone-2

## Exporting Modules:

## ECMAScript module system

Exporting a module is done by using the export keyword.

There are two types of exports:

- Named Exports
- Default Exports

`Named Exports:`

Named exports are useful to export several values. During the import, it is mandatory to use the same name of the corresponding object.

export const PI = 3.14;
export function add(a, b) {
  return a + b;
}
export class Person {
  constructor(name) {
    this.name = name;
  }
}

`Default Exports:`

Default exports are useful to export only a single value. During the import, it is not mandatory to use the same name of the corresponding object.

export default function greet(name) {
  return `Hello, ${name}!`;
}

## CommonJs module system

Exporting a module is done by using the module.exports object.

    // Single Export
    module.exports = function greet(name) { /* ... */ };

    // Multiple Exports
    module.exports = {
      pi: 3.14,
      add(a, b) { /* ... */ },
      Person
    };


## Exporting Literals:

`script.js`
        
        module.exports = "hello"

`index.js`
        
        const msg = require("./script"); 
        console.log(msg); 

## Exporting functions:

`script.js`
        
        function add(a,b){
            return a+b;
        }

        function sub(a,b){
            return a-b;
        }

        module.exports = {add, sub}

`index.js`
        
        const {add, sub} = require('./script')

        console.log(add(2,3))
        console.log(sub(4,2))


## Exporting Objects:
        
`script.js`

        module.exports = {
            name: "Kanish",
            age : 22
        }        

`index.js`
                
        const person = require('./script')
        console.log(person.name)
        console.log(person.age)

---

## Consuming Modules

## ECMAScript module system

Importing a module is done by using the import keyword.

There are two types of imports:

- Named Imports
- Default Imports

## Named Imports:

Named imports are useful to import several values. During the import, it is mandatory to use the same name of the corresponding object.

  import { name, age } from "demo.js";

## Default Imports:

Default imports are useful to import only a single value. During the import, it is not mandatory to use the same name of the corresponding object.

  import name from "demo.js";

---


- Exporting modules in Node.js is fundamental for organizing and structuring your code. 

- You can export functionality such as variables, functions, objects, or classes from one file so that they can be imported and used in another file.

---

## How modules are imported in NodeJS:

The CommonJs module system uses the require function to load the modules.

By default, the CommonJs module system is used in Node.js.


        const greet = require('./bookingServices');


`Call require():`

- When you call require('moduleName'), Node.js starts the process to load and execute the module.

`Check Cache`:

- Node.js first checks if the module is already in the cache (Module._cache). If it is, it returns the cached module.

`Create Module Instance`:

- If the module is not in the cache, Node.js creates a new Module instance for it.


`Load Module`:

Node.js then loads the module,

- For JSON Files: It reads the file, parses the JSON content, and assigns it to module.exports.

- For JavaScript Files: It reads the file, wraps the content in a function, and compiles it to JavaScript code. This allows the module to use exports, require, and module within its code.

`Compile and Execute`:

JavaScript files are wrapped in a function that takes exports, require, module, __filename, and __dirname as arguments. This function is then compiled and executed.

`Return Module Exports`:

After loading and executing the module, Node.js returns the module.exports property of the module.

---
- The ECMAScript module system uses the import keyword to load the modules.

>The require() call is synchronous and the import statement is asynchronous.

---


# Event Emitters:

EventEmitter provides a simple way to handle events. You can think of it as a publisher-subscriber pattern where:

- Emitters publish (emit) named events.
- Listeners subscribe to (handle) these events by attaching callback functions.

## Importing Event emitters:

        const EventEmitter = require('events');

## Creating EventEmitter class:

The EventEmitter class is used to create event emitters.

        const emitter = new EventEmitter();

## Register Event Emitters:

The on method is used to listen for specific events.

        emitter.on('eventName', (data) => {
        console.log('Event received with data:', data);
        });

## Emit an event: 

The emit method is used to emit an event.

        emitter.emit('eventName', 'Hello');

## Example:

        const EventEmitter = require('events');

        const taskEmitter = new EventEmitter();


        taskEmitter.on('taskCompleted', (taskName) => {
        console.log(`Notification: Task "${taskName}" has been completed.`);
        });

        function completeTask(taskName) {
        console.log(`Task "${taskName}" is being completed.`);
        taskEmitter.emit('taskCompleted', taskName);
        }

        completeTask('Write documentation');
        completeTask('Fix bugs');
        completeTask('Deploy application');

---

### once()  method:

It will listen to the event only once.

        const EventEmitter = require('events');

        const taskEmitter = new EventEmitter();

        taskEmitter.once('taskCompleted', (taskName) => {
        console.log(`One-time Notification: Task "${taskName}" has been completed.`);
        });

        function completeTask(taskName) {
        console.log(`Task "${taskName}" is being completed.`);
        taskEmitter.emit('taskCompleted', taskName);
        }

        completeTask('Write documentation'); // This will trigger the one-time listener
        completeTask('Fix bugs'); // This will not trigger the one-time listener
        completeTask('Deploy application'); // This will not trigger the one-time listener

---

## removeListener() event:

It is used to remove the listener for the event

        const EventEmitter = require('events');

        const myEmitter = new EventEmitter();

        function onGreeting(name) {
        console.log(`Hello, ${name}!`);
        }

        myEmitter.on('greeting', onGreeting);

        myEmitter.emit('greeting', 'Kanish'); // This will trigger the listener

        myEmitter.removeListener('greeting', onGreeting);

        myEmitter.emit('greeting', 'Kumar'); // This will not trigger the listener

---
### WebSockets:

- WebSockets provide a full-duplex communication channel over a single, long-lived connection, enabling real-time data exchange between a client and a server. 

- Unlike HTTP, which follows a request-response model, WebSockets allow for bi-directional communication where the server can send data to the client anytime.


### Exception Handling:

Error event is used to handle errors

        const EventEmitter = require("events");

        const eventEmitter = new EventEmitter();

        eventEmitter.on("error", (err) => {
        console.log(`Error: ${err.message}`);
        });

        eventEmitter.emit("error", new Error("An error occurred"));

---

### Try and catch:

Try and catch used to handle exceptions

        try {
        throw new Error("An error occurred");
        } catch (err) {
        console.log(`Error: ${err.message}`);
        }

---

## Event Loop:

