import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Post from './Post';

import './style.scss';

class App extends Component {
  state = {
    post: <Post />,
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Post data={this.state.post} />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
