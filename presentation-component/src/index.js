import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { App, IconButton } from './components';
render(
  <StrictMode>
    <App greetingMessage={'Presentational Component'} />
    <IconButton type="UPLOAD" />
    <IconButton type="UPLOADING" />
    <IconButton type="COMPLETE" />
    <IconButton type="FAIL" />
    <IconButton type="NOT_ALLOWED" />
  </StrictMode>,
  document.getElementById('root')
);
