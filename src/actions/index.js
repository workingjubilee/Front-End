import axios from "axios";
require("dotenv").config();
const endpoint = process.env.REACT_APP_ENDPOINT;

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_USER });
  axios
    .get(`${endpoint}/api/auth`, creds)
    .then(res => {
      dispatch({ type: LOGIN_USER_SUCCESS });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.id);
    })
    .catch(err => {
      dispatch({
        type: LOGIN_USER_FAILURE,
        payload: `${err.message}. ${err.response.data.message}`
      });
    });
};

export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

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
