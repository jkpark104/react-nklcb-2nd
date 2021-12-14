import React from 'react';
import reactLogoPath, {
  ReactComponent as ReactLogo,
} from '../../assets/react.svg';

import ReactLogo2 from '@/assets/react.svg?react';
console.log(ReactLogo2);

console.log(reactLogoPath); // asset SVG (file path)
console.log(ReactLogo); // SVGR (React Component)

export default function App({ greetingMessage }) {
  return (
    <div className="app">
      <img src={reactLogoPath} alt="리엑트" />
      <ReactLogo title="React UI Library" />
      <h1>{greetingMessage}</h1>
    </div>
  );
}
