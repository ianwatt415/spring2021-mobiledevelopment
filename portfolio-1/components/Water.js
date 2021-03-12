import React, {Component} from 'react'

class Water extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cups: 0
        };
    };


render() {
   
    return(
        <div>
            <h2>Cups of Water: {this.state.cups}</h2>
            <button onClick={() => this.setState({cups: this.state.cups + 1})}>Add</button>
            <button onClick={() => this.setState({cups: 0})}>Reset</button>
        </div>
    );

}
}

export default Water