import { Logo, IconButton } from '../index.js';
const { React } = window;

export class AppHeader extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="more-shoes-shop-title">
          <Logo />
        </h1>
        <div className="button-group">
          <IconButton />
          <IconButton shape="cart" label="장바구니" />
        </div>
      </header>
    );
  }
}
