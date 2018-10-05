import { createStore, combineReducers } from 'redux'
import btnReduxReducer from '../features/btnRedux/reducer'

const rootReducer = combineReducers({
    reduxButton: btnReduxReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store