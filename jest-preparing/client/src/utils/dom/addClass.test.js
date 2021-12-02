// jest 활용
// 작성할 유틸리티 함수 호출
import { addClass } from './addClass.js';

test('node.addClass(document.body, "some") 함수 사용시 document.body는 some 클래스 이름을 소유한다.', () => {
  const targetNode = document.body;
  let addedClassName = 'some';
  addClass(targetNode, addedClassName);
  // expect(targetNode.classList.contains(addedClassName)).toBeTruthy();
  expect(addClass(document.body, addedClassName)).toHaveClass(addedClassName);
});

test(`문서의 #app 노드에 'anythin' 클래스 이름 설정이 가능하다.`, () => {
  // Jest가 돌아가는 Node.js 환경은 웹 브라우저가 아니다.

  document.body.innerHTML = `
  <div id="app"></div>
  `;

  const appNode = document.getElementById('app');
  let addedClassName = 'anything';

  addClass(appNode, addedClassName);
  expect(appNode).toHaveClass(addedClassName);
});
