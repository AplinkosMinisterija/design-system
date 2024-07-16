# Design System

[![npm version](https://badge.fury.io/js/%40aplinkosministerija%2Fdesign-system.svg)](https://badge.fury.io/js/%40aplinkosministerija%2Fdesign-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Design System library provides a set of UI components designed to streamline the development of consistent user interfaces among web applications.
## Installation

You can install the design system package via npm or yarn:

```bash
npm install @aplinkosministerija/design-system
```
or
```bash
yarn add @aplinkosministerija/design-system
```

## Usage

Before using our design system library, make sure to install and set up the styled-components package in your project. This package is essential for styling components within the design system, allowing for smooth integration and customization.

To use the styles provided by the design-system library, you need to import the CSS file into your main React application file (usually index.js, or App.js). This ensures that all components from the library are styled correctly. Add the following import statement to the top of your main application file:

```javascript
import '@aplinkosministerija/design-system/dist/style.css';
```

For the library to function properly, ensure to utilize the Theme type provided by the design system library when configuring styled-components.
```javascript
import { Theme } from '@aplinkosministerija/design-system';
```
When implementing global styles, you have the option to either create your own or import them from our library. However, if you choose to write your own global styles, it's important to remember to set the font-size to 62.5%. This adjustment is necessary because our design system relies on rem units rather than pixels. By setting the font-size to 62.5%, you can ensure consistent and predictable typography rendering across different screen sizes and devices.

In case you decide to implement your own global styles, add the following CSS to your global styles:
```css
html {
    font-size: 62.5%;
}
```

Otherwise, import global styles from the library:
```javascript
import { globalStyles } from '@aplinkosministerija/design-system';
const GlobalStyles = createGlobalStyle`${globalStyles(theme)}`;

```

Once styled-components are configured and the theme and global styles are set up, you can simply import components from the library and use them in your code.
```javascript
import { Button } from '@aplinkosministerija/design-system';

const App = () => {
    return (
        <div>
            <Button onClick={() => alert('Button clicked!')}>Click me</Button>
        </div>
    );
}

export default App;
```
## Components

[Components Showcase](https://ui.startupgov.lt/?path=/story/design-system-buttons-button--button-story)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

