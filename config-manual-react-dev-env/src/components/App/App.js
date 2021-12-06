import { createElement as h } from 'react';

// App Component
export default function App(props) {
  return h('div', { className: 'app' }, h('h1', null, props.greetingMessage));
}
