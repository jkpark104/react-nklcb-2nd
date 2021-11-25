// 다시 내보내기 (re-exports) 문법
// 이름으로 내보낸 모듈을 다시 내보낼 때

export * from './textFormatting.js';

// 기본으로 내보낸 모듈을 다시 내보낼 때
export { default as throwError } from './throwError.js';
