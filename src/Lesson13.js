import React from 'react';
import ReactDOM from 'react-dom';

class Lesson13 extends React.Component {
    constructor() {
        super();
        this.state = {increasing: false}
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log(this.props.val);
        this.setState({
            increasing: nextProps.val > this.props.val
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0
    }

    update() {
        ReactDOM.render(<Lesson13 val={this.props.val + 1} />, document.getElementById('root'))
    }

    render() {
        console.log(this.state.increasing)
        return (
            <button onClick={this.update.bind(this)}>
                {this.props.val}
            </button>
        )
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log(`prevProps: ${prevProps.val}`)
    }
}

Lesson13.defaultProps = {val: 0}

export default Lesson13