import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: [],
    statistics: {},
    loading: false,
    graphData: {}
}

const reducer = (state = initialState, actions) => {
    switch(actions.type) {
        case actionTypes.SET_INFO:
            return {
                ...state,
                data: actions.info
            };
        case actionTypes.SET_STAT:
            return {
                ...state,
                statistics: actions.stat
            }
        case actionTypes.SET_GRAPH_STAT:
            return {
                ...state,
                graphData: actions.data
            }
        case actionTypes.FETCH_START:
            return{
                ...state,
                loading: true
            }
        case actionTypes.FETCH_SUCCESS:
            return{
                ...state,
                loading: false
            }
        default: 
            return state
    }
}

export default reducer;