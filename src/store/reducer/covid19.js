import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: []
}

const reducer = (state = initialState, actions) => {
    switch(actions.type) {
        case actionTypes.SET_INFO:
            return {
                ...state,
                data: actions.info
            };
        default: 
            return state
    }
}

export default reducer;