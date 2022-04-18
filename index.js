const redux = require('redux')

// React-um orinak senc kgrenq
// import redux from 'redux'


const initialState = {count: 0}

const counterReducer = (state = initialState, action) => {
    if(action.type === 'hanel') {
        return {
            count: state.count - 1
        }
    }

    if(action.type === 'gumarel') {
        return {
            count: state.count + 1
        }
    }

    return state
}

const store = redux.createStore(counterReducer);


const subscriber = () => {
    const state = store.getState();
    console.log(state);
}

store.subscribe(subscriber)

store.dispatch({type: 'hanel'})
store.dispatch({type: 'hanel'})
store.dispatch({type: 'hanel'})
store.dispatch({type: 'hanel'})
store.dispatch({type: 'hanel'})
store.dispatch({type: 'hanel'})
store.dispatch({type: 'hanel'})
store.dispatch({type: 'hanel'})
store.dispatch({type: 'gumarel'})
store.dispatch({type: 'gumarel'})
store.dispatch({type: 'gumarel'})
store.dispatch({type: 'gumarel'})
store.dispatch({type: 'gumarel'})
