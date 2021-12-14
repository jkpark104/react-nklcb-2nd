// snake_case
export function snakeCase(data) {
  return data.toString().replace(/\s/g, '_');
}
// kebab-case
export function kebabCase(data) {
  return data.toString().replace(/\s/g, '-');
}
// camelCase
export function camelCase(data) {
  return data.toString().replace(/\s\w/g, match => match.toUpperCase().trim());
}
// TitleCase
export function titleCase(data) {
  return data
    .toString()
    .replace(/^\w|\s\w/g, match => match.toUpperCase().trim());
}
