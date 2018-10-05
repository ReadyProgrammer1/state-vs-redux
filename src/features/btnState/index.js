import React from 'react'

import '../../../src/index.css'

class StateButton extends React.Component{

    constructor() {
        super()

        this.state = {
            color: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange = () => {
        const color = this.state.color === 'red' ? 'white' : 'red';
        this.setState({ color });
    }

    render() {
      return (
         
        <div style={{margin: '100px'}}>
            <button 
            className= {'btn-' + this.state.color}
            onClick={this.handleChange}>this.setState
            </button>
        </div>
      )
    }

}

  export default StateButton

