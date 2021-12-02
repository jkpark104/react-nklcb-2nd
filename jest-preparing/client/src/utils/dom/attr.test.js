import { getAttr } from './attr.js';

const defaultHTML = `
    <div id="app">
      <h1 class="headline">React 앱 개발</h1>
    </div>`;

describe('attr() 유틸리티', () => {
  beforeEach(() => {
    document.body.innerHTML = defaultHTML;
  });

  test('$heading의 클래스 이름은 "headline"이다.', () => {
    expect(getAttr(document.querySelector('.headline'), 'class')).toBe(
      'headline'
    );
  });

  // getAttr() 유틸리티 테스트 코드 작성
  // setAttr() 유틸리티 테스트 코드 작성
  // attr() 유틸리티 테스트 코드 작성
});
