import axios from 'axios';
require('dotenv').config();
const endpoint = process.env.REACT_APP_BACKEND;

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const logIn = creds => dispatch => {
  dispatch({ type: LOGIN_USER });
  return axios
    .post(`${endpoint}/api/auth/login`, creds)
    .then(res => {
      dispatch({ type: LOGIN_USER_SUCCESS });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userID', res.data.id);
    })
    .catch(err => {
      dispatch({
        type: LOGIN_USER_FAILURE,
        payload: `${err.message}. ${err.response.data.message}`
      });
    });
};

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_USER });
  return axios
    .post(`${endpoint}/api/auth/register`, creds)
    .then(res => {
      dispatch({ type: REGISTER_USER_SUCCESS });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userID', res.data.id);
    })
    .catch(err => {
      dispatch({
        type: REGISTER_USER_FAILURE,
        payload: `${err.message}. ${err.response.data.message}`
      });
    });
};

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const getUser = id => dispatch => {
  dispatch({ type: FETCH_USER });
  axios
    .get(`${endpoint}/api/users/${id}`)
    .then(res => {
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_USER_FAILURE,
        payload: `${err.message}. ${err.response.data.message}`
      });
    });
};

export const FETCH_MEDS = 'FETCH_MEDS';
export const FETCH_MEDS_SUCCESS = 'FETCH_MEDS_SUCCESS';
export const FETCH_MEDS_FAILURE = 'FETCH_MEDS_FAILURE';

export const fetchMeds = user_id => dispatch => {
  dispatch({ type: FETCH_MEDS });
  axios
    .get(`${endpoint}/api/users/${user_id}/meds`)
    .then(res => {
      dispatch({ type: FETCH_MEDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_MEDS_FAILURE,
        payload: `${err.message}. ${err.response.data.message}`
      });
    });
};
