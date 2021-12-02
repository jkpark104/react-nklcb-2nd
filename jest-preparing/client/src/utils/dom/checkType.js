export const isString = data =>
  Object.prototype.toString.call(data).slice(8, -1) === 'String';

export const isElement = data =>
  Object.prototype.toString.call(data).slice(-8, -1) === 'Element';
