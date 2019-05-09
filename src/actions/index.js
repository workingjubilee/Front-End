import axios from 'axios';
import { httpsify } from '../utilities/httpsify';

const endpoint = httpsify(process.env.REACT_APP_BACKEND);

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const logIn = () => dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post(`${endpoint}/api/auth/login/`, null, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem('userID', res.data.id);
      return res.data;
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.response.data.message
          ? `${err.message}. ${err.response.data.message}`
          : err.message
      });
    });
};

export const EDIT_USER = 'EDIT_USER';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_FAILURE = 'EDIT_USER_FAILURE';

export const updateInfo = creds => dispatch => {
  dispatch({ type: EDIT_USER });
  return axios
    .put(`${endpoint}/api/users/${creds.id}/`, creds)
    .then(res => {
      dispatch({ type: EDIT_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: EDIT_USER_FAILURE,
        payload: err.response.data.message
          ? `${err.message}. ${err.response.data.message}`
          : err.message
      });
    });
};

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const fetchUser = id => dispatch => {
  dispatch({ type: FETCH_USER_REQUEST });
  axios
    .get(`${endpoint}/api/users/${id}/`)
    .then(res => {
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_USER_FAILURE,
        payload: err.response.data.message
          ? `${err.message}. ${err.response.data.message}`
          : err.message
      });
    });
};

export const FETCH_MEDS_REQUEST = 'FETCH_MEDS_REQUEST';
export const FETCH_MEDS_SUCCESS = 'FETCH_MEDS_SUCCESS';
export const FETCH_MEDS_FAILURE = 'FETCH_MEDS_FAILURE';

export const fetchMeds = user_id => dispatch => {
  dispatch({ type: FETCH_MEDS_REQUEST });
  axios
    .get(`${endpoint}/api/users/${user_id}/meds/`)
    .then(res => {
      dispatch({ type: FETCH_MEDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_MEDS_FAILURE,
        payload: err.response.data.message
          ? `${err.message}. ${err.response.data.message}`
          : err.message
      });
    });
};

export const FETCH_DIARY_REQUEST = 'FETCH_DIARY_REQUEST';
export const FETCH_DIARY_SUCCESS = 'FETCH_DIARY_SUCCESS';
export const FETCH_DIARY_FAILURE = 'FETCH_DIARY_FAILURE';

export const fetchDiary = user_id => dispatch => {
  dispatch({ type: FETCH_DIARY_REQUEST });
  axios
    .get(`${endpoint}/api/users/${user_id}/diaries/`)
    .then(res => {
      dispatch({ type: FETCH_DIARY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_DIARY_FAILURE,
        payload: err.response.data.message
          ? `${err.message}. ${err.response.data.message}`
          : err.message
      });
    });
};

export const FETCH_REMS_REQUEST = 'FETCH_REMS_REQUEST';
export const FETCH_REMS_SUCCESS = 'FETCH_REMS_SUCCESS';
export const FETCH_REMS_FAILURE = 'FETCH_REMS_FAILURE';

export const fetchRems = user_id => dispatch => {
  dispatch({ type: FETCH_REMS_REQUEST });
  axios
    .get(`${endpoint}/api/users/${user_id}/rems/`)
    .then(res => {
      dispatch({ type: FETCH_REMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_REMS_FAILURE,
        payload: err.response.data.message
          ? `${err.message}. ${err.response.data.message}`
          : err.message
      });
    });
};
