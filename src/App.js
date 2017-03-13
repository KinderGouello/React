import React from 'react';
import ReactDOM from 'react-dom';

// class App extends React.Component {
//   render() {
//     return <h1 className="hello"><Heart testCustomValidation="Test56" /> {this.props.testprop}</h1>
//     // return React.createElement('h1', null, 'Hello world');
//   }
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentEvent: '---',
      a: ''
    }
    this.update = this.update.bind(this)
  }

  update(event) {
    this.setState({currentEvent: event.type})
  }

  updateInput() {
    this.setState({
      a: this.a.value,
      b: this.refs.b.value,
      c: ReactDOM.findDOMNode(this.c).value,
      d: this.d.refs.inputd.value
    })
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
        <hr/>
        <input
          ref={ node => this.a = node }
          type="text"
          onChange={this.updateInput.bind(this)}
        />
        {this.state.a}
        <hr/>
        <input
          ref="b"
          type="text"
          onChange={this.updateInput.bind(this)}
        />
        {this.state.b}
        <hr/>
        <Input
          ref={ component => this.c = component }
          update={this.updateInput.bind(this)}
        />
        {this.state.c}
        <hr/>
        <InputD
          ref={ component => this.d = component }
          update={this.updateInput.bind(this)}
        />
        {this.state.d}
        <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}

class Input extends React.Component {
  render() {
    return <input type="text" onChange={this.props.update} />
  }
}

class InputD extends React.Component {
  render() {
    return <div><input ref="inputd" type="text" onChange={this.props.update} /></div>
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
