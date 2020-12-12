import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_START
    }
}

export const fetchSuccess = () => {
    return {
        type: actionTypes.FETCH_SUCCESS
    }
}

export const setInfo = info => {
    return {
        type: actionTypes.SET_INFO,
        info
    }
}

export const setStatInfo = stat => {
    return {
        type: actionTypes.SET_STAT,
        stat
    }
}

export const initInfo = () => {
    return dispatch => {
        dispatch(fetchStart());
        axios.get('https://corona.lmao.ninja/v3/covid-19/countries')
            .then( response => {
                dispatch(setInfo(response.data));
                dispatch(fetchSuccess());
            })
    }
}

export const initStat = () => {
    return dispatch => {
        dispatch(fetchStart());
        axios.get('https://corona.lmao.ninja/v3/covid-19/all')
            .then( response => {
                dispatch(setStatInfo(response.data));
                dispatch(fetchSuccess());
            })
    }
}

