import { Logo, IconButton, CardLink } from './components/index.js';

const { React, ReactDOM } = window;

ReactDOM.render(
  <div className="more-shoes-shop">
    <header className="header">
      <h1 className="more-shoes-shop-title">
        <Logo />
      </h1>
      <div className="button-group">
        <IconButton />
        <IconButton shape="cart" label="장바구니" />
      </div>
    </header>
    <ul className="cardLink-list">
      <CardLink imageName="shoes-1" />
      <CardLink imageName="shoes-2" />
    </ul>
  </div>,
  document.getElementById('root')
);
