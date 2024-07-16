# Milestone 5

## Table of Contents

1. [CSS](#css)

   - [Why CSS?](#why-css)
   - [CSS Syntax](#css-syntax)
   - [CSS Selectors and Combinators](#css-selectors-and-combinators)
   - [Pseudo-classes and Pseudo-elements](#pseudo-classes-and-pseudo-elements)
   - [Combining Selectors](#combining-selectors)
   - [Specificity Hierachy](#specificity-hierachy)
   - [!important](#!important)
   - [Units of Measurement](#units-of-measurement)
   - [CSS Functions](#css-functions)
   - [CSS Variables](#css-variables)
   - [CSS Comments](#css-comments)

## CSS Selectors and Combinators

### Selectors - To Target Elements and apply styles

1. **Universal Selector**: Selects all elements.

   ```css
   * {
     margin: 0;
     padding: 0;
   }
   ```

2. **Element Selector**: Selects all elements of a type.

   ```css
   div {
     color: blue;
   }
   ```

3. **Class Selector**: Selects elements with class attribute.

   ```css
   .hello {
     background-color: yellow;
   }
   ```

4. **ID Selector**: Selects an element with id attribute.

   ```css
   #hello {
     font-size: 24px;
   }
   ```

5. **Attribute Selector**: Selects elements with a specific attribute or attribute value.
   ```css
   [type="text"] {
     border: 1px solid black;
   }
   ```

### Combinators - To Describe Relationships between Selectors

1. **Descendant Combinator**: Selects all descendants of an element.

   ```css
   div p {
     margin-bottom: 10px;
   }
   ```

2. **Child Combinator**: Selects direct children of an element.

   ```css
   ul > li {
     list-style-type: square;
   }
   ```

3. **Adjacent Sibling Combinator**: Selects an element that directly follows another element.

   ```css
   h1 + p {
     font-weight: bold;
   }
   ```

4. **General Sibling Combinator**: Selects all elements that are siblings of an element.
   ```css
   h1 ~ p {
     color: gray;
   }
   ```

### Pseudo-classes and Pseudo-elements

##### **Pseudo-classes**: Select elements based on a certain state.

1. :hover - Activated when mouse is hovered

```css
a:hover {
  color: red;
  text-decoration: underline;
}
```

2. :active - Activated by clicking on the element

```css
button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
```

3. :focus - Activated when an element is focused through keyboard or mouse click

```css
input:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
```

4. :first-child - Selects the first child element

```css
li:first-child {
  font-weight: bold;
}
```

5. :nth-child() - Selects elements based on their position

```css
tr:nth-child(even) {
  background-color: #f2f2f2;
}
```

6. :not() - Applies to elements that don't match the selector

```css
input:not([type="submit"]) {
  border: 1px solid #ccc;
}
```

7. :checked - Activated when a checkbox or radio button is checked

```css
input[type="checkbox"]:checked {
  color: green;
}
```

##### **Pseudo-elements**: Allow you to style a specific part of an element.

1. **::before** and **::after** - Insert content before or after an element's content

```css
.quote::before {
  content: "«";
}
.quote::after {
  content: "»";
}
```

2. **::first-line** - Selects the first line of a block-level element

```css
p::first-line {
  font-weight: bold;
  font-size: 1.2em;
}
```

3. **::first-letter** - Selects the first letter of a block-level element

```css
p::first-letter {
  font-size: 2em;
  float: left;
  margin-right: 5px;
}
```

4. **::selection** - Apply modifications to the selected text by the user

```css
::selection {
  background-color: yellow;
  color: black;
}
```

5. **::placeholder** - Styles the placeholder text of form elements

```css
input::placeholder {
  color: #999;
  font-style: italic;
}
```

6. **::scrollbar** - Styles the scrollbar of an element

```css
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 162, 255, 0.959);
  border-radius: 5px;
}
```

### Combining Selectors

You can combine multiple selectors to create more specific rules:

```css
div.container + p.text {
  /* combined selector */
  font-size: 16px;
}
```

This selects all `<p>` elements with the class "text" that are immediately preceded by a `<div>` element with the class "container".

### Specificity Hierachy

1. **!important**: Highest priority
2. **Inline Styles**: Highest priority after `!important`
3. **ID Selectors**: More specific than class selectors
4. **Class, Pseudo-class, Attribute Selectors**: More specific than element selectors
5. **Element and Pseudo-element Selectors**: Least specific

### !important

The `!important` rule overrides all other rules and should be used cautiously. It is used to give a rule the highest priority

```css
p {
  color: red !important;
}
```

> [!NOTE]
> It is recommended to avoid using `!important` as it can make debugging and maintaining styles difficult.\_

### Units of Measurement

1. **Absolute Units**:

   - `px` - Pixels - Single dot on a screen
   - `pt` - Points - 1/72 of an inch
   - `in` - Inches - measurement in metric system
   - `cm` - Centimeters - measurement in metric system
   - `mm` - Millimeters - measurement in metric system

2. **Relative Units**:

   - `em` - Relative to the font-size of the immediate parent
   - `rem` - Relative to the font-size of the root element (html)
   - `vw` - Relative to 1% of the width of the viewport
   - `vh` - Relative to 1% of the height of the viewport
   - `%` - Relative to the parent element

3. **Viewport Units**:

   - `vw` - 1% of the viewport width
   - `vh` - 1% of the viewport height
   - `vmin` - 1% of the viewport's smaller dimension (width or height)
   - `vmax` - 1% of the viewport's larger dimension (width or height)

### CSS Functions

1. **rgb()** - Defines a color using the RGB color model

   ```css
   p {
     color: rgb(255, 0, 0);
   }
   ```

2. **rgba()** - Defines a color using the RGB color model with an alpha for transparency

   ```css
   p {
     color: rgba(255, 0, 0, 0.5);
   }
   ```

3. **hsl()** - Defines a color using the HSL color model

   ```css
   p {
     color: hsl(120, 100%, 50%);
   }
   ```

4. **hsla()** - Defines a color using the HSL color model with an alpha for transparency

   ```css
   p {
     color: hsla(120, 100%, 50%, 0.3);
   }
   ```

5. **url()** - Defines a URL to an image

   ```css
   div {
     background-image: url("image.jpg");
   }
   ```

6. **calc()** - Performs a calculation to determine a CSS property value

   ```css
   div {
     width: calc(100% - 50px);
   }
   ```

7. **var()** - Defines a custom property value

   ```css
   :root {
     --primary-color: #ff0000;
   }

   p {
     color: var(--primary-color);
   }
   ```

8. **attr** - Retrieves the value of an attribute on the selected element

   ```css
   a::after {
     content: attr(href);
   }
   ```

9. **min()** and **max()** - Returns the smallest or largest value from a list of comma-separated expressions

   ```css
   div {
     width: min(100%, 300px);
     height: max(100%, 200px);
   }
   ```

10. **clamp()** - Restricts a value to be within a specified range

    ```css
    div {
      font-size: clamp(1rem, 2vw, 2rem);
    }
    ```

### CSS Variables

CSS variables are custom properties that allow you to store and reuse values in your stylesheets.

```css
:root {
  --primary-color: #ff0000;
  --padding: 10px;
}
```

### CSS Comments

Comments in CSS are used to explain the code and are not displayed in the browser.

```css
/* This is a single-line comment */

/*
  This is a
  multi-line comment
*/
```
