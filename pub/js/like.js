'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const el=(<h3>like</h3>);

//const domContainer = document.querySelector('#like')
const domContainer = document.getElementById("like")
//ReactDOM.render(e(LikeButton), domContainer);
ReactDOM.render(el, domContainer);
