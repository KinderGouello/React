import React from 'react';

class App extends React.Component {
  render() {
    return <h1 className="hello">{this.props.testprop}</h1>
    // return React.createElement('h1', null, 'Hello world');
  }
}

App.propTypes = {
  testprop: React.PropTypes.string,
  truc: React.PropTypes.number.isRequired
}

App.defaultProps = {
  truc: 2
}

export default App
