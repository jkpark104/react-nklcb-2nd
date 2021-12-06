export const transformText = (text) => {
  return text.toString().replace(/\n\s+/g, '').trim();
};
