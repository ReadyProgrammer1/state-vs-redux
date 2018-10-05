const initialState = {
    color: ''
}

const btnReduxReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'CHANGE_COLOR':
            return {
                ...action.payload
            }
        default: return state
    }
}

export default btnReduxReducer