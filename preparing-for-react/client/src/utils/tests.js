import throwError from './throwError.js';
// 기대(expect) 값을 검토하는 유틸리티
// 코드 사용 예시)
// expect(전달값).toBe(기대값)
// expect(전달값).not.toBe(기대값)
// expect(전달값).toBeInTheDocument(기대값)
// expect(전달값).not.toBeInTheDocument(기대값)

export function expect(received) {
  // 전달 값과 비교할 수 있는 유틸리티 모음 객체 반환
  return {
    toBe(expected) {
      // 전달값과 기대값을 비교해서 같지 않으면 오류 발생
      if (received !== expected)
        throwError(`${received}와 ${expected} 값은 동일하지 않습니다.`);
    },

    toBeTruthy() {
      if (received !== true)
        throwError(`${received} 값이 truthy 하지 않습니다.`);
    },

    toBeFalsy() {
      if (received !== false)
        throwError(`${received} 값이 falsy 하지 않습니다.`);
    },

    toBeInTheDocument() {
      if (!document.body.contains(received))
        throwError(`${received}는 문서에 존재하지 않습니다.`);
    },

    toHaveClass(expected) {
      if (!received.classList.contains(expected))
        throwError(`${expected} 요소가 없습니다.`);
    },

    not: {
      toBe(expected) {
        if (received === expected)
          throwError(`${received}와 ${expected} 값이 동일합니다.`);
      },

      toBeInTheDocument() {
        if (!document.body.contains(received))
          throwError(`${received}는 문서에 존재합니다.`);
      },
    },
  };
}

// 테스트(test) 유틸리티
// 코드 사용 예시)
// test('테스트 설명', () => {})
export function test(description, callback) {
  // 오류 발생 여부 감지
  try {
    callback();
    console.log(`😀 테스트 성공: ${description}`);
  } catch (error) {
    console.groupCollapsed(`😥 테스트 실패: ${description}`);
    console.log(error.message);
    console.groupEnd();
  }
}

// 기술(describe) 유틸리티
// 코드 사용 에시)
// describe('테스트 리스트 항목을 대변하는 레이블', () => { test(); test(); ... })
export function describe(testLabel, callback) {
  console.group(testLabel);
  callback();
  console.groupEnd();
}
