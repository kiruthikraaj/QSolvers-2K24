## Milestone - 1

## Table of contents

- [Callback Functions](#callback-functions)
  - [Callback Hell](#callback-hell)
- [Promises](#promises)
  - [Converting Callbacks to Promises](#converting-callbacks-to-promises)
- [Bluebird Promises](#bluebird-promises)
  - [Promisify](#promisify)
  - [Promise.all](#promiseall)
  - [Promise.promisifyAll](#promisepromisifyall)
  - [Promise.map](#promisemap)
- [Async/ Await](#async-await)
  - [Converting Promises to Async/Await](#converting-promises-to-asyncawait)
  - [Try Catch in Async/Await](#try-catch-in-asyncawait)
- [HTTP](#http)
  - [HTTP Methods](#http-methods)
  - [HTTP Status Codes](#http-status-codes)
  - [HTTP Headers](#http-headers)
  - [HTTP Body](#http-body)
  - [Content Type](#content-type)

### Callback Functions

- A callback function is a function that is passed as an argument to another function. The callback function is called when a certain event occurs or when a task is completed.

```javascript
// a callback function is passed as an argument
function add(a, b, fn) {
  const c = a + b;
  fn(c); // the callback function is called with the sum as an argument
}

function display(result) {
  console.log(result); // the argument in the add() is passed to the callback function
}

add(1, 2, display); // 3
```

> [!NOTE]  
> Callback functions are commonly used in asynchronous programming to handle the completion of tasks.

### Callback Hell

- Callback hell is a situation where multiple nested callback functions are used in asynchronous programming. This can make the code difficult to read and maintain.

> [!IMPORTANT]  
> Callback hell can be avoided by using promises, async/await, and other asynchronous programming techniques.  
> **When a pyramid is created by multiple nested callbacks, it is called callback hell.**

```javascript
// A Simple Callback hell
function a(callback) {
  setTimeout(() => {
    console.log("a");
    callback();
  }, 1000);
}

function b(callback) {
  setTimeout(() => {
    console.log("b");
    callback();
  }, 1000);
}

function c(callback) {
  setTimeout(() => {
    console.log("c");
    callback();
  }, 1000);
}

a(() => {
  b(() => {
    c(() => {
      console.log("Callback hell is over");
    });
  });
});
// Output
// a
// b
// c
// Callback hell is over

// avoiding callback hell
// the below code can be used when promises are used

a()
  .then(() => {
    return b();
  })
  .then(() => {
    return c();
  })
  .then(() => {
    console.log("Callback hell is over");
  });
```

```javascript
// A more complex Callback hell
// passing result of one callback to another callback
function add(a, b, callback) {
  setTimeout(() => {
    const c = a + b;
    callback(c);
  });
}

function sub(a, b, callback) {
  setTimeout(() => {
    const c = a - b;
    callback(c);
  });
}

function mul(a, b, callback) {
  setTimeout(() => {
    const c = a * b;
    callback(c);
  });
}

add(1, 2, (sum) => {
  console.log("Callback 1:", sum); // the result the previous callback is passed to the next callback
  sub(sum, 1, (diff) => {
    console.log("Callback 2:", diff);
    mul(diff, 2, (prod) => {
      console.log("Callback 3:", prod);
    });
  });
});
// Output
// Callback 1: 3
// Callback 2: 2
// Callback 3: 4
```

### Promises

- Promises are used to handle asynchronous operations in JavaScript. A promise is an object that represents the eventual completion or failure of an asynchronous operation. A promise can be in one of three states: pending, fulfilled, or rejected.

```javascript
function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise is resolved");
    }, 1000);
  });
}
promise()
  .then((result) => {
    console.log(result); // Promise is resolved
  })
  .catch((error) => {
    console.error(error);
  });
```

### Bluebird Promises

- Bluebird is a popular promise library for JavaScript that provides additional features and performance improvements over the built-in promise implementation.

```bash

pnpm i -g bluebird # install bluebird globally

pnpm init  # creating package.json file

pnpm add bluebird # add the bluebird package to the project

```

```javascript
const Promise = require("bluebird"); // commonJS module, not using module syntax

function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a + b;
      resolve(c);
    }, 1000);
  });
}

add(1, 2)
  .then((sum) => {
    console.log(sum); // 3
  })
  .catch((error) => {
    console.error(error);
  });
```

### Features of Bluebird

#### Promisify

- The promisify method is used to convert a callback-based function to a promise-based function.

```javascript
const Promise = require("bluebird");

function add(a, b, callback) {
  setTimeout(() => {
    const c = a + b;
    callback(null, c); // passing null for error and c for result
  }, 1000);
}

const promise = Promise.promisify(add);

promise(1, 2)
  .then((sum) => {
    console.log(sum); // 3
  })
  .catch((error) => {
    console.error(error);
  });
```

#### Promise.all

- The Promise.all method is used to execute multiple promises concurrently and wait for all of them to complete.

```javascript
function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a + b;
      resolve(c);
    }, 1000);
  });
}

function sub(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a - b;
      resolve(c);
    }, 1000);
  });
}

function mul(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a * b;
      resolve(c);
    }, 1000);
  });
}

Promise.all([add(1, 2), sub(1, 2), mul(1, 2)])
  .then((results) => {
    console.log(results); // [3, -1, 2]
  })
  .catch((error) => {
    console.error(error);
  });
```

#### Promise.promisifyAll

- The Promise.promisifyAll method is used to convert an entire module to use promises.

```javascript
const fs = Promise.promisifyAll(require("fs"));

fs.readFileAsync("file.txt", "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

#### Promise.map

- The Promise.map method is used to execute an array of promises concurrently and wait for all of them to complete.

```javascript
const Promise = require("bluebird");

function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a + b;
      resolve(c);
    }, 1000);
  });
}

const numbers = [1, 2, 3, 4, 5];

Promise.map(numbers, (number) => add(number, 1))
  .then((results) => {
    console.log(results); // [2, 3, 4, 5, 6]
  })
  .catch((error) => {
    console.error(error);
  });
```

### Converting Callbacks to Promises

- Callback functions can be converted to promises using the Promise constructor.

```javascript
function add(a, b) {
  // the promise constructor is used to create a promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a + b;
      resolve(c);
    }, 1000);
  });
}

add(1, 2)
  .then((sum) => {
    console.log(sum); // 3
  })
  .catch((error) => {
    console.error(error);
  });
```

### Async/ Await

- Async/await helps in handling asynchronous operations in a synchronous manner.
- The async keyword is used to define an asynchronous function, and the await keyword is used to wait for the completion of an asynchronous operation.

> [!IMPORTANT]  
> `await` can only be used inside an async function.

```javascript
// Using async/await to avoid callback hell

function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a + b;
      resolve(c);
    }, 1000);
  });
}

function sub(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a - b;
      resolve(c);
    }, 1000);
  });
}

function mul(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a * b;
      resolve(c);
    }, 1000);
  });
}

async function calculate() {
  const sum = await add(1, 2);
  console.log("Callback 1:", sum);
  const diff = await sub(sum, 1);
  console.log("Callback 2:", diff);
  const prod = await mul(diff, 2);
  console.log("Callback 3:", prod);
}

calculate();

// Output
// Callback 1: 3
// Callback 2: 2
// Callback 3: 4
```

> [!IMPORTANT]  
> **Why async needed in JS?**
>
> - JavaScript is single-threaded, meaning that it can only execute one task at a time.
> - Asynchronous programming allows JavaScript to perform multiple tasks concurrently, without blocking the main thread.
> - Event loop is used to handle asynchronous operations in JavaScript.

### Converting Promises to Async/Await

- Promises can be converted to async/await functions by using the async keyword with the function that returns a promise.

```javascript
function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a + b;
      resolve(c);
    }, 1000);
  });
}

async function result() {
  const res = await add(1, 2);
  console.log(res);
}
```

### Try Catch in Async/Await

- The try/catch block can be used to handle errors in async/await functions.

```javascript
function add(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("Invalid Input"));
    }
    const c = a + b;
    resolve(c);
  });
}

async function result(a, b) {
  try {
    const res = await add(a, b);
    console.log(res);
  } catch (error) {
    console.error("Something went wrong");
  }
}

result(1, 2); // 3
result("1", 2); // Something went wrong
```

> [!NOTE]  
> This is similar to the .then() and .catch() methods used with promises. The try block is used to handle the resolved value, and the catch block is used to handle the rejected value.

### HTTP

- HTTP stands for Hypertext Transfer Protocol, which is the protocol used for transmitting data over the web.

#### HTTP Methods

- HTTP defines several methods that indicate the desired action to be performed on a resource.

1. GET - Retrieve data from a server.
2. POST - Send data to a server to create a new resource.
3. PUT - Send data to a server to update an existing resource.
4. DELETE - Delete a resource on the server.

### HTTP Status Codes

- HTTP status codes are used to indicate the result of an HTTP request.

1. 200 - OK: The request was successful.
2. 201 - Created: The request has been fulfilled and a new resource has been created.
3. 301 - Moved Permanently: The requested resource has been permanently moved to a new location.
4. 302 - Found: The requested resource has been temporarily moved to a new location.
5. 400 - Bad Request: The request could not be understood by the server.
6. 404 - Not Found: The requested resource could not be found.
7. 500 - Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.

### HTTP Headers

- HTTP headers are used to provide additional information about the request or response.

1. Content-Type: Indicates the media type of the resource.

2. Content-Length: Indicates the size of the resource in bytes.

3. Accept: Indicates the media types that are acceptable for the response.

4. Authorization: Contains credentials for authenticating the client with the server.

5. User-Agent: Contains information about the user agent making the request.

6. Cache-Control: Specifies caching directives for the request or response.

7. Connection: Specifies options that are desired for the connection.

### HTTP Body

- The HTTP body contains the data that is being sent in the request or response.

1. In a POST request, the body contains the data that is being sent to the server to create a new resource.

2. In a GET request, the body is empty as the request is only retrieving data from the server.

3. In a response, the body contains the data that is being sent back to the client.

4. The body can be in various formats such as JSON, XML, HTML, etc.

### Content Type

- The Content-Type header is used to indicate the media type of the resource in the body of the request or response.

1. application/json: Indicates that the body contains JSON data.

2. text/html: Indicates that the body contains HTML data.

3. application/xml: Indicates that the body contains XML data.

4. image/jpeg: Indicates that the body contains a JPEG image.

5. text/plain: Indicates that the body contains plain text.

6. multipart/form-data: Indicates that the body contains form data with files.

7. application/x-www-form-urlencoded: Indicates that the body contains form data in URL-encoded format.
