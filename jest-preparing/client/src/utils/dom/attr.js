import throwError from './throwError.js';
import { isElement, isString } from './checkType.js';

export const getAttr = (node, attrName) => {
  try {
    if (!isElement(node)) throwError('첫번째 전달인자는 요소노드가 아닙니다.');
    if (!isString(attrName))
      throwError('두번째 전달인자는 문자 유형이 아닙니다.');
    return node.getAttribute(attrName);
  } catch (error) {
    throwError(error.message);
  }
};
