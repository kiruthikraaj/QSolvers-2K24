## Milestone 1

### History of Js

- JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. Initially, it was called Mocha, but later it was changed to LiveScript, and finally, it was named JavaScript. The main reason behind creating JavaScript was to make web pages more interactive. JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.

- Js is a single-threaded language and it can only do one thing at a time. However, it is also non-blocking, which means it can handle multiple requests at the same time. This is achieved by using callbacks, promises, and async/await.

### ECMAScript

- ECMAScript is a standard for scripting languages, such as JavaScript. It was created to standardize JavaScript to help foster multiple independent implementations.

- Other languages that implement ECMAScript include JScript by Microsoft and ActionScript by Adobe.

### How javascript and ECMA are related

- JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript is a superset of ECMAScript. ECMAScript is the standard, JavaScript is the implementation of the standard.

- Ecma (formally European Computer Manufacturers Association) is a non-profit organization that develops standards in computer hardware, communications, and programming languages. ECMAScript is the standard upon which JavaScript is based, and it's also known as the European Computer Manufacturers Association Script.

- It defines the syntax, semantics, and behavior that JavaScript engines must follow.

### DOM and Browser Object Model

#### DOM:

- The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of nodes, such as elements and text. The DOM provides a way for programs to interact with the structure and content of a document.

#### BOM:

- The Browser Object Model (BOM) is a programming interface for web browsers. It provides objects and methods for interacting with the browser itself, such as opening new windows, controlling the history, and managing cookies.

```javascript
// Example of BOM manipulation

// Open a new window

window.open("https://www.google.com", "_blank");

// Close the current window

window.close();

// Get the current URL

console.log(window.location.pathname);

// Access the history object

console.log(window.history.back());

// Access the navigator object

console.log(window.navigator.userAgent);

// Access the screen object

console.log(window.screen.width);

// Access the document object

console.log(window.document.title);

// Copy text to the clipboard

navigator.clipboard.writeText("Hello, world!");
```
