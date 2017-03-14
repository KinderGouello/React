import React from 'react';

class Lesson14 extends React.Component {
    constructor() {
        super();
        this.state = {items: []}
    }
    
    componentWillMount() {
        fetch('http://swapi.co/api/people/?format=json')
            .then(response => response.json())
            .then((response) => {
                this.setState({items: response.results})
            })
    }
    
    filter(event) {
        this.setState({
            filter: event.target.value
        })
    } 

    render() {
        let items = this.state.items
        // {items.map((item) => {
        //     return <h4 key={item.name}>{item.name}</h4>
        // })}
        
        if (this.state.filter) {
            items = items.filter( item => {
                return item.name.toLowerCase().includes(this.state.filter.toLowerCase())
            })
        }
        
        return (
            <div>
                <input
                    type="text"
                    onChange={this.filter.bind(this)}
                />
                {items.map(item =>
                    <Person key={item.name} person={item} />
                )}
            </div>
        )
    }
}

const Person = (props) => <h4>{props.person.name}</h4>

export default Lesson14