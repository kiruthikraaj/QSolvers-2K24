# Milestone 2: HTML and DOM Basics

## Table of Contents

1. [HTML Basics](#html-basics)

   - [What is HTML?](#what-is-html)
   - [What is XHTML?](#what-is-xhtml)
   - [Elements and Attributes](#elements-and-attributes)
     - [Self Closing Tags](#self-closing-tags)
     - [Opening and Closing Tags](#opening-and-closing-tags)
     - [Semantic and Non-Semantic Elements](#semantic-and-non-semantic-elements)
   - [Formatting and Styling](#formatting-and-styling)
   - [Comments](#comments)

2. [Document Object Model](#document-object-model)

   - [DOM Structure](#dom-structure)
   - [DOM Manipulation Methods](#dom-manipulation-methods)
   - [DOM Event Listeners](#dom-event-listeners)

3. [CSS Layouts](#css-layouts)

   - [Float Layout](#float-layout)
   - [Flexbox Layout](#flexbox-layout)
   - [Grid Layout](#grid-layout)
   - [Box Model](#box-model)

4. [Classes and IDs](#classes-and-ids)

5. [Charsets](#charsets)
   - [ASCII Charset](#ascii-charset)
   - [UTF-8 Charset](#utf-8-charset)

## HTML Basics

### What is HTML?

HTML (HyperText Markup Language) is used for creating web pages. It defines the structure and content of a web page.

### What is XHTML?

XHTML (Extensible HyperText Markup Language) is a stricter and cleaner version of HTML. It follows the XML syntax rules.

```
- All tags must be closed.
- All tags must be lowercase.
- All attributes must be in quotes.
```

### Elements and Attributes

HTML elements are the building blocks of web pages. Elements are created using tags and some tags are self-closing, while others have opening and closing tags:

#### Self Closing Tags

Some self closing tags include `<img/>`, `<br/>`, `<input/>` and `<hr/>`

#### Opening and Closing Tags

Opening tags are like `<p>` and closing tags are like `</p>`. The content goes between the opening and closing tags.

```html
<p>This is a paragraph</p>
<img src="" alt="Image" />
```

#### Semantic and Non-Semantic Elements

Semantic elements describe the content they contain, while non-semantic elements do not. Examples of semantic elements include `<header>`, `<footer>`, `<article>`, and `<section>`

```html
<header>This is a header</header>
<footer>This is a footer</footer>
<article>This is an article</article>
<section>This is a section</section>
```

### Formatting and Styling

You can format text using tags like `<strong>`, `<em>`, `<u>`, etc. For styling, you can use inline CSS or an external stylesheet:

```html
<p style="color: blue;">This is a blue paragraph.</p>
<link rel="stylesheet" href="styles.css" />
<!-- import external stylesheet-->
```

### Comments

HTML comments are useful for leaving notes in your code

```html
<!-- This is a comment -->
```

## Document Object Model

The DOM is a programming interface for HTML documents. The DOM can be accessed and manipulated using JavaScript. The DOM is a tree-like structure where each node represents part of the document

### DOM Structure

The DOM represents a document as a tree structure:

```
document
 └── html
     ├── head
     │   ├── title
     │   └── meta
     └── body
         ├── h1
         ├── p
         └── div
             ├── p
             └── img
```

### DOM Manipulation Methods

Some common methods for DOM manipulation:

```javascript
// Creating a new element
let newDiv = document.createElement("div");
let newP = document.createElement("p");

// Accessing an element
let element = document.getElementById("id");

// Modifying an element
element.innerHTML = "content";

// Adding a child element
newDiv.appendChild(newP);

// Removing an element
element.remove();

// Adding an event listener
element.addEventListener("click", myFunction);

// Changing styles
element.style.color = "red";

// Querying elements
let elements = document.querySelectorAll(".class");
let element = document.querySelector("#id");

// Traversing the DOM
element.parentNode;
element.childNodes;
element.firstChild;
element.lastChild;

// Modifying attributes
element.setAttribute("src", "image.jpg");
element.getAttribute("src");

// Modifying classes
element.classList.add("new");
element.classList.remove("old");

// Modifying text content
element.textContent = "new text";

// Modifying HTML content
element.innerHTML = "text";

// Modifying value
element.value = "Hello";
```

### DOM Event Listeners

Event listeners are used to trigger functions when an event occurs

```javascript
// single click event
document.getElementByTagName("button").addEventListener("click", function () {
  alert("Button was clicked!");
});

// double click event
document
  .getElementByTagName("button")
  .addEventListener("dblclick", function (e) {
    alert(`Button was double clicked at ${e.clientX}, ${e.clientY}`);
  });

// mouse over event
document.getElementById("id").addEventListener("mouseover", function () {
  alert("Mouse over the button!");
});

// mouse move event
document
  .getElementByClassName("container")
  .addEventListener("mousemove", function (e) {
    alert(`Mouse is at ${e.clientX}, ${e.clientY}`);
  });

// scroll event
document.addEventListener("scroll", function () {
  alert("Scrolling!");
});

// submit event
document.getElementByTagName("form").addEventListener("submit", function (e) {
  alert(`Hi ${e.target.value.name} your email is ${e.target.value.email}`);
});
```

## CSS Layouts

### Float Layout

Float is used for positioning and formatting content

```css
.float-left {
  float: left;
}
```

### Flexbox Layout

Flexbox is a one-dimensional layout method for displaying items in rows or columns

```css
.container {
  display: flex; /* defaults to row */
  flex-direction: col;
  justify-content: space-between;
}
```

### Grid Layout

Grid is a two-dimensional layout system

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

### Box Model

Container for all HTML elements, it consists of: margin, border, padding, and the actual content

```css
.box {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
```

## Classes and IDs

Classes and IDs are used to identify elements for styling and manipulation. IDs are unique, while classes can be used multiple times. A class starts with a period `.` and an ID starts with a hash `#`.

```html
<div id="id" class="new">This element has an ID and two classes.</div>
```

## Charsets

### ASCII Charset

ASCII (American Standard Code for Information Interchange) is a character encoding standard for electronic communication. It represents text in computers, telecommunications equipment, and other devices.

- Dollar Sign $: 36
- A: 65
- a: 97

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="ASCII" />
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```

### UTF-8 Charset

UTF-8 is a character encoding capable of encoding all possible characters (Unicode). It is the most widely used character encoding on
the web.

- Dollar Sign $: U+0024
- Rupee Sign ₹: U+20B9

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```
