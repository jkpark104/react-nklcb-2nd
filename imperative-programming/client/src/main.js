import { translator } from './lib/index.js';

/* 명령형 프로그래밍 ---------------------------------------------------------------- */

/* 미션 1. Vanilla(JavaScript) 버전으로 작성 */

/* 미션 2. jQuery 버전으로 작성 */
if ('jQuery' in window) {
  const { jQuery } = window;
  const translatorApp = $ => {
    // 버튼 요소 노드 찾기
    // jQuery 능력
    // jQuery 팩토리 함수 $(selector)
    const $translateButton = $('.button__translation');

    const handleTranslation = () => {
      // 모드를 토글
      translator.toggleLanguageMode();

      // UI 업데이트 렌더링
      updateRenderUI();
    };

    const updateRenderUI = () => {
      // translator의 현재 모드의 콘텐츠 가져오기
      const { headline, description } = translator.getContents();

      // 업데이트 할 문서의 요소를 찾아서 jQuery 인스턴스화 참조
      const $contents = $('.contents');
      const $headline = $contents.find(':header');
      const $description = $('p', $contents);

      // 텍스트 콘텐츠 업데이트
      $headline.text(headline);
      $description.text(description);

      // 번역 버튼의 레이블 업데이트
      let label = translator.getLabel();
      $translateButton.attr({
        title: label,
        'aria-label': label,
      });
    };

    // 찾은 버튼에 이벤트 연결 (jQuery 능력 활용 .on())
    $translateButton.on('click', handleTranslation);
  };

  jQuery(document).ready(translatorApp);
}

/* 미션 3. translator 객체를 class 문법으로 작성 */

/* 미션 4. translator 모듈을 분리해 ES 모듈로 관리 */
