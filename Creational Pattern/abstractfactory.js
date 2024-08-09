// Abstract Product A
class Button {
    render() {
        throw new Error("Method 'render()' must be implemented.");
    }
}

// Abstract Product B
class Checkbox {
    render() {
        throw new Error("Method 'render()' must be implemented.");
    }
}

// Concrete Product A1
class LightButton extends Button {
    render() {
        console.log("Rendering light-themed button");
    }
}

// Concrete Product B1
class LightCheckbox extends Checkbox {
    render() {
        console.log("Rendering light-themed checkbox");
    }
}

// Concrete Product A2
class DarkButton extends Button {
    render() {
        console.log("Rendering dark-themed button");
    }
}

// Concrete Product B2
class DarkCheckbox extends Checkbox {
    render() {
        console.log("Rendering dark-themed checkbox");
    }
}

// Abstract Factory
class ThemeFactory {
    createButton() {
        throw new Error("Method 'createButton()' must be implemented.");
    }

    createCheckbox() {
        throw new Error("Method 'createCheckbox()' must be implemented.");
    }
}

// Concrete Factory 1
class LightThemeFactory extends ThemeFactory {
    createButton() {
        return new LightButton();
    }

    createCheckbox() {
        return new LightCheckbox();
    }
}

// Concrete Factory 2
class DarkThemeFactory extends ThemeFactory {
    createButton() {
        return new DarkButton();
    }

    createCheckbox() {
        return new DarkCheckbox();
    }
}
 
// Client Code
function renderUI(factory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();
    
    button.render();
    checkbox.render();
}

const lightFactory = new LightThemeFactory();
renderUI(lightFactory); 
const darkFactory = new DarkThemeFactory();
renderUI(darkFactory); 