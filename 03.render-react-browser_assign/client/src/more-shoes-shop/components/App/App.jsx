import { AppHeader, CardLink } from '../index.js';
import { CardLinkContainer } from '../../containers/index.js';

const { React } = window;

export class App extends React.Component {
  render() {
    return (
      <div className="more-shoes-shop">
        <AppHeader />
        <CardLinkContainer>
          <CardLink imageName="shoes-1" />
          <CardLink imageName="shoes-2" />
        </CardLinkContainer>
      </div>
    );
  }
}
