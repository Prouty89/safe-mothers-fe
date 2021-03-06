import axiosWithAuth from '../utilities/axiosWithAuth';
import {Mixpanel} from '../utilities/mixpanel/Mixpanel';
import {ERROR, types} from './index';

const {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    ERROR_CLEAN,
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGOUT,
} = types;


export const loginUser = (data, history) => {
    return dispatch => {
        dispatch({type: LOGIN_START});
        return axiosWithAuth()
            .post('auth/login', data)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                Mixpanel.track('Login Success');
                dispatch({type: LOGIN_SUCCESS, payload: res.data});
                history.push('/dashboard');
            })
            .catch(err => {
                Mixpanel.track('Login Error');
                console.log('ERROR', err)
                dispatch({type: LOGIN_FAILURE, payload: err.response.data.message ? err.response.data.message : ERROR});
            });
    };
};

export const registerUser = data => dispatch => {
    dispatch({type: REGISTER_USER_START});
    return axiosWithAuth()
        .post('/auth/register', data)
        .then(res => {
            Mixpanel.track('Register Success');
            dispatch({type: REGISTER_USER_SUCCESS, payload: res.data});
        })
        .catch(err => {
            Mixpanel.track('Login Failed');
            dispatch({type: REGISTER_USER_FAILURE, payload: err});
        });
};

export const errorClean = () => {
    return dispatch =>
        dispatch({type: ERROR_CLEAN});
};

export const logout = () => {
    return dispatch => {
        dispatch({type: LOGOUT});
        localStorage.removeItem('token');
    };
};
