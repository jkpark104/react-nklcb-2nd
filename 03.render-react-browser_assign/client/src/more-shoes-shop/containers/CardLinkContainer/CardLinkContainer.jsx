const { React } = window;

export class CardLinkContainer extends React.Component {
  render() {
    return <ul className="cardLinkContainer" {...this.props} />;
  }
}
