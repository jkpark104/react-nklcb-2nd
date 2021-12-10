export const typeis = (d) => {
  return Object.prototype.toString.call(d).toLowerCase().slice(8, -1);
};

export const isObject = (d) => typeis(d) === 'object';
