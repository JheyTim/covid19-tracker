import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setInfo = info => {
    return {
        type: actionTypes.SET_INFO,
        info
    }
}

export const initInfo = () => {
    return dispatch => {
        axios.get('https://corona.lmao.ninja/v2/countries')
            .then( response => {
                dispatch(setInfo(response.data));
            })
    }
}