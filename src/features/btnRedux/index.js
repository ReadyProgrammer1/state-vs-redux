import React from 'react'
import { connect } from 'react-redux'
import store from '../../config/store'


function ReduxButton(props) {

    const changeColor = () => {
        const color = store.getState().reduxButton.color === 'red' ? 'white' : 'red';

        store.dispatch({
            type: 'CHANGE_COLOR',
            payload: {
                color: color
            }
        })
    }
    
    return (
        <div style={{margin: '100px'}}>
            <button 
            className= {'btn-' + store.getState().reduxButton.color}
            onClick={changeColor}>Redux Button
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state.reduxButton,    
    }
}

export default connect(mapStateToProps)(ReduxButton)