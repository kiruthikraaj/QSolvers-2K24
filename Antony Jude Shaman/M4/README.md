# Milestone 4

## Table of Contents

1. [CSS](#css)

   - [Why CSS?](#why-css)
   - [CSS Syntax](#css-syntax)

2. [Preprocessor](#preprocessor)

   - [SASS and SCSS](#sass-and-scss)
   - [Key Features](#key-features)
   - [Syntax Comparison](#syntax-comparison)
   - [Workflow of preprocessors](#workflow-of-preprocessors)

3. [CSS Postprocessors](#css-postprocessors)

4. [Basic CSS Properties](#basic-css-properties)
   - [Height and Width](#height-and-width)
   - [Margins, Paddings, and Borders](#margins-paddings-and-borders)
   - [Background](#background)
   - [Text and Font](#text-and-font)
   - [Box Model and Flexbox](#box-model-and-flexbox)

## CSS

Cascading Style Sheets is a styling language used to describe the presentation of HTML documents.

1. Inline CSS
2. Internal CSS
3. External CSS

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <!-- Importing external CSS -->
    <link rel="stylesheet" href="styles.css" />
    <style>
      /* Internal CSS */
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1 style="color: blue;">Hello, World!</h1>
    <!-- Inline CSS -->
    <p class="hello">Hello</p>
    <!-- External CSS -->
  </body>
</html>
```

### Why CSS?

- Separates content from presentation
- Improves website look and feel
- Enables consistent styling across multiple pages
- Allows responsive design for different devices

### CSS Syntax

```css
selector {
  property: value;
}
```

## Preprocessor

A CSS preprocessor is a program that extends the capabilities of standard CSS by adding features not available in regular CSS.

### SASS and SCSS

Syntactically Awesome Style Sheets and Sassy CSS are CSS preprocessors that provide more CSS functionalities.

### File Extensions

- SASS: `.sass`
- SCSS: `.scss`

### Key Features

- **Variables** - Define static values for reuse

  ```css
  $primary-color: #000;
  $padding: 10px;

  body {
    color: $primary-color;
    padding: $padding;
  }
  ```

- **Nesting** - Nest CSS selectors inside one another

  ```css
  div {
    width: 100%;
    p {
      font-size: 16px;
      span {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
  ```

- **Mixins** - Reusable group of CSS declarations

  ```css
  @mixin content-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    @include content-center;
  }
  ```

- **Functions** - Perform operations on values

```css
@function divide($a, $b) {
  @return $a / $b;
}

.container {
  width: divide(100px, 2);
}
```

- **Importing** - Break CSS code into separate files and reuse them

```css
@import "form";

body {
  background-color: #f0f0f0;
}
```

_form.scss_

```css
form {
  padding: 10px;
  margin: 10px;
}
```

- **Inheritance** - Share styles between selectors

```css
.hello /* Placeholder selector */ {
  padding: 10px;
  border: 1px solid #000;
}

.submit-button {
  @extend .hello;
  background-color: #f0f0f0;
}
```

- **Control Directives** - Use `@if`, `@for`, and `@each` for conditional logic

```css
@for $i from 1 through 3 {
  .item-{$i} {
    width: 100px * $i;
  }
}

@if $theme == light {
  body {
    background-color: #fff;
    color: #000;
  } @else {
    body {
      background-color: #000;
      color: #fff;
    }
  }
}
```

### Syntax Comparison

#### SASS

```sass
.container
  width: 100%
  .content
    font-size: 16px
```

#### SCSS

```scss
.container {
  width: 100%;
  .content {
    font-size: 16px;
  }
}
```

### Workflow of preprocessors

1. Write code in preprocessor syntax
2. Compile to standard CSS
3. Use compiled CSS in web projects

## CSS Postprocessors

CSS postprocessors are tools that optimize and enhance CSS code in post-production to improve performance and maintainability

### Key Features

- **Autoprefixer** - Adds vendor prefixes to CSS properties

- **CSSNano** - Minifies CSS code by removing whitespace and comments

- **PurgeCSS** - Removes unused CSS styles from the code

- **Stylelint** - Lints CSS code for errors and warnings

## Basic CSS Properties

### Height and Width

```css
div {
  height: 100px;
  width: 200px;
}
```

### Margins, Paddings, and Borders

```css
div {
  margin: 10px;
  padding: 15px;
  border: 1px solid black;
}
```

### Background

```css
div {
  background-color: #f0f0f0;
  background-image: url("image.jpg");
  background-size: cover;
}
```

### Text and Font

```css
div {
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-align: center;
}
```

### Box Model and Flexbox

```css
div {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
```
