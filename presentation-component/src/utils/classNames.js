import { isObject } from './typeis';

export const classNames = (...classNames) =>
  classNames
    .map((className) =>
      isObject(className)
        ? Object.keys(
            Object.fromEntries(
              Object.entries(className).filter(([, value]) => value)
            )
          ).join(' ')
        : className
    )
    .join(' ');
