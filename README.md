# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
 

A project inspired by john smilga

#### React-Toastify

Import and set up the react-toastify library.

[React Toastify](https://fkhadra.github.io/react-toastify/introduction)

```sh
npm i react-toastify
```

main.jsx

```js
import 'react-toastify/dist/ReactToastify.css';
```

App.jsx

```js
import { ToastContainer, toast } from 'react-toastify';

toast.success('awesome');
toast.error('error message');

return (
  <main>
    ...............
    <ToastContainer position='top-center' />
  </main>
);
```

#### Create Color

In the App component, create logic to generate a new list of colors when the user submits a new color value. Use react-toastify to display an error message if the values.js library cannot generate a color, and also display a toast message if the user tries to submit an empty value.

#### Clipboard

In the SingleColor component, set up a click handler that saves the hex value of the color to the browser clipboard.

To save some value in the navigator clipboard, you can use the Clipboard API, which is a part of the Web API provided by modern browsers. The Clipboard API allows web developers to interact with the user's clipboard, including reading and writing data to it.

Here is an example of how to save a string value to the clipboard using the Clipboard API:

```js
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (error) {
    console.error('Failed to copy text: ', error);
  }
}

const textToCopy = 'Hello, world!';
copyToClipboard(textToCopy);
```