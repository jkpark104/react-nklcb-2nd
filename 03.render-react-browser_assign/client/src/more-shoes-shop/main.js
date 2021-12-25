import { App } from './components/index.js';

const {
  React,
  ReactDOM: { render },
} = window;

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
