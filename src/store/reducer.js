const initialState = {
    counter: 5
}

const reducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'DECREMENT') {
        if(state.counter > 0) {
            return {
                counter: state.counter - 1
            }
        }
    }
    if(action.type === 'ADD') {
        return {
            counter: state.counter + 5
        }
    }
    if(action.type === 'SUBTRACT') {
        return {
            counter: state.counter - 5
        }
    }
    return state
}

export default reducer;