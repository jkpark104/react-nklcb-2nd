import { App } from './components';
import { createElement as h } from 'react';
import { render } from 'react-dom';

// ReactDOM render
render(h(App, { greetingMessage: '안녕! React 🎨' }), document.getElementById('root'));
