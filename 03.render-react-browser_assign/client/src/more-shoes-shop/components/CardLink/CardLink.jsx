const { React } = window;

const cardInfo = {
  1: {
    title: '랄켈라 베이직 부츠',
    desc: `FW시즌 필수 아이템! 착-붙는 핏의 부츠를 만나보세요`,
  },
  2: {
    title: '폭닥폭닥 스니커즈',
    desc: '따뜻하면서 예쁜 다리라인을 원한다면 폭닥폭닥 키높이 스니커즈',
  },
};

export function CardLink({ imageName }) {
  const cardNumber = imageName.replace(/[^0-9]/g, '');

  return (
    <li className="cardLink">
      <h2 className="cardLink-title">{cardInfo[cardNumber].title}</h2>
      <p className="cardLink-desc">{cardInfo[cardNumber].desc}</p>
      <img
        className="cardLink-image"
        src={`./assets/${imageName}.jpg`}
        alt={imageName}
      />
    </li>
  );
}
