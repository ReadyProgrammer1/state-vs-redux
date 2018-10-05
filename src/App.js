import React, { Component } from 'react';

import StateButton from '../src/features/btnState'
import ReduxButton from '../src/features/btnRedux'

class App extends Component {
  render() {
    return <div style={{margin: '50px 100px 100px 100px'}}>
            <h1>State vs Redux</h1>
            <StateButton />
            <ReduxButton />
          </div>
  }
}

export default App;
