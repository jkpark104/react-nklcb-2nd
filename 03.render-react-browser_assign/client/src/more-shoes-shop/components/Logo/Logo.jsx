const { React } = window;

const ratio = {
  width: 54,
  height: 16,
};

const getWidthRatioFromHeight = (heightValue) => {
  let { width, height } = ratio;
  return (width / height) * heightValue;
};

export const Logo = ({ textColor, dotColor, label, size }) => {
  let widthValue = getWidthRatioFromHeight(size);

  return (
    <svg
      width={widthValue}
      height={size}
      viewBox={`0 0 ${widthValue} ${size}`}
      fill="none"
    >
      <title>{label}</title>
      <path
        d="M1.456 2.16V14H3.584V9.056C3.584 7.952 3.408 6.272 3.28 5.168H3.344L4.288 7.952L6.128 12.928H7.488L9.312 7.952L10.272 5.168H10.336C10.208 6.272 10.048 7.952 10.048 9.056V14H12.208V2.16H9.584L7.616 7.696C7.36 8.448 7.152 9.216 6.896 9.984H6.816C6.576 9.216 6.352 8.448 6.096 7.696L4.08 2.16H1.456ZM19.8163 14.224C22.9523 14.224 25.1123 11.872 25.1123 8.032C25.1123 4.192 22.9523 1.936 19.8163 1.936C16.6803 1.936 14.5203 4.176 14.5203 8.032C14.5203 11.872 16.6803 14.224 19.8163 14.224ZM19.8163 12.176C18.0563 12.176 16.9363 10.544 16.9363 8.032C16.9363 5.456 18.0083 3.968 19.8163 3.968C21.6243 3.968 22.6962 5.456 22.6962 8.032C22.6962 10.544 21.5763 12.176 19.8163 12.176ZM33.8728 14H36.5128L33.7448 9.152C35.1048 8.624 36.0008 7.552 36.0008 5.744C36.0008 3.008 34.0487 2.16 31.5528 2.16H27.4248V14H29.7928V9.52H31.4408L33.8728 14ZM29.7928 7.648V4.032H31.3288C32.8648 4.032 33.6808 4.464 33.6808 5.744C33.6808 7.024 32.8648 7.648 31.3288 7.648H29.7928ZM38.331 2.16V14H45.771V12.016H40.699V8.848H44.859V6.864H40.699V4.128H45.595V2.16H38.331Z"
        fill={textColor}
      />
      <path
        d="M50.0948 14.224V11.952H47.7588V14.224H50.0948Z"
        fill={dotColor}
      />
    </svg>
  );
};

// React 모든 컴포넌트(함수, 클래스)는 props의 기본 값을
// .defaultProps로 설정한다.
Logo.defaultProps = {
  textColor: '#242CF8',
  dotColor: '#FF6B00',
  label: 'MORE.',
  size: ratio.height,
};
