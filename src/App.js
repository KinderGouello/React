import React from 'react';

// class App extends React.Component {
//   render() {
//     return <h1 className="hello"><Heart testCustomValidation="Test56" /> {this.props.testprop}</h1>
//     // return React.createElement('h1', null, 'Hello world');
//   }
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {currentEvent: '---'}
    this.update = this.update.bind(this)
  }

  update(event) {
    this.setState({currentEvent: event.type})
  }

  render() {
    return (
      <div>
        <textarea
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          onClick={this.update}
          onTouchStart={this.update}
          onTouchMove={this.update}
          onTouchEnd={this.update}
          cols="30"
          rows="10">
        </textarea>
        <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}

class Heart extends React.Component {
  render() {
    return <span>&hearts; {this.props.testCustomValidation}</span>;
  }
}

Heart.propTypes = {
  testCustomValidation(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`${propName} n'est pas défini`)
    }

    if (props[propName].length < 6) {
      return new Error(`${propName} too short`)
    }
  }
}

App.propTypes = {
  testprop: React.PropTypes.string,
  truc: React.PropTypes.number.isRequired,
}

App.defaultProps = {
  truc: 2
}

export default App
