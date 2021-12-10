import React from 'react';

export function Emoji({ source, label, className, ...restProps }) {
  return (
    <figure className={`emoji ${className}`.trim()} data-testid="wrapper">
      <img src={source} alt={label} title={label} {...restProps} />
    </figure>
  );
}

Emoji.defaultProps = {
  className: '',
};
