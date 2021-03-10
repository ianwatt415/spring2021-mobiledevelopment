import React, {Component} from 'react'

class Resistance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0
        };
    };


render() {
   
    return(
        <div>
            <h2>Hours of Resistance: {this.state.hours}</h2>
            <button onClick={() => this.setState({hours: this.state.hours + 1})}>Add</button>
            <button onClick={() => this.setState({hours: 0})}>Reset</button>
        </div>
    );

}
}

export default Resistance