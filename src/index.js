import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './App';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,500,700', 'sans-serif'],
  },
});

const printInConsole = () => {
  const msg = '%c Projeto técnico da Stone. Meu github: github.com/tupizz';
  const styles = [
    'font-size: 16px',
    'font-family: monospace',
    'background: white',
    'display: inline-block',
    'color: black',
    'padding: 16px 25px',
    'border: 1px dashed;',
  ].join(';');
  // eslint-disable-next-line no-console
  console.log(msg, styles);
};

printInConsole();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
