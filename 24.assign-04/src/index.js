import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import 'styles/global.css';
import 'reportWebVitals';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { App, PurchaseButton } from 'components';

render(
  <StrictMode>
    <App />
    <PurchaseButton />
  </StrictMode>,
  document.getElementById('root')
);
