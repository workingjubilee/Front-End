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
        payload: err.response
          ? `${err.message}. ${err.response.data.message}`
          : err.message
      });
    });
};

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const logout = () => ({ type: LOGOUT_SUCCESS });

export const EDIT_USER_REQUEST = 'EDIT_USER_REQUEST';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_FAILURE = 'EDIT_USER_FAILURE';

export const editUser = edits => dispatch => {
  dispatch({ type: EDIT_USER_REQUEST });
  return axios
    .put(`${endpoint}/api/users/${edits.id}/`, edits)
    .then(res => {
      dispatch({ type: EDIT_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: EDIT_USER_FAILURE,
        payload: err.response
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
        payload: err.response
          ? `${err.message}. ${err.response.data.message}`
          : err.message
      });
    });
};

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

export const deleteUser = id => dispatch => {
  dispatch({ type: DELETE_USER_REQUEST });
  axios
    .delete(`${endpoint}/api/users/${id}/`)
    .then(res => {
      dispatch({ type: DELETE_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: DELETE_USER_FAILURE,
        payload: err.response
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
        payload: err.response
          ? `${err.message}. ${err.response.data.message}`
          : err.message
      });
    });
};

export const ADD_MED_REQUEST = 'ADD_MED_REQUEST';
export const ADD_MED_SUCCESS = 'ADD_MED_SUCCESS';
export const ADD_MED_FAILURE = 'ADD_MED_FAILURE';

export const addMed = newMed => dispatch => {
  dispatch({ type: ADD_MED_REQUEST });
  return axios
    .post(`${endpoint}/api/meds/`, newMed)
    .then(res => {
      dispatch({ type: ADD_MED_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: ADD_MED_FAILURE,
        payload: err.response
          ? `${err.message}. ${err.response.data.message}`
          : err.message
      });
    });
};

export const EDIT_MED_REQUEST = 'EDIT_MED_REQUEST';
export const EDIT_MED_SUCCESS = 'EDIT_MED_SUCCESS';
export const EDIT_MED_FAILURE = 'EDIT_MED_FAILURE';

export const editMed = editedMed => dispatch => {
  dispatch({ type: EDIT_MED_REQUEST });
  return axios
    .put(`${endpoint}/api/meds/${editedMed.id}`, editedMed)
    .then(res => {
      dispatch({ type: EDIT_MED_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: EDIT_MED_FAILURE,
        payload: err.response
          ? `${err.message}. ${err.response.data.message}`
          : err.message
      });
    });
};

export const DISCONTINUE_MED_REQUEST = 'DISCONTINUE_MED_REQUEST';
export const DISCONTINUE_MED_SUCCESS = 'DISCONTINUE_MED_SUCCESS';
export const DISCONTINUE_MED_FAILURE = 'DISCONTINUE_MED_FAILURE';

export const discontinueMed = editedMed => dispatch => {
  dispatch({ type: DISCONTINUE_MED_REQUEST });
  axios
    .put(`${endpoint}/api/meds/${editedMed.id}`, editedMed)
    .then(res => {
      dispatch({ type: DISCONTINUE_MED_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: DISCONTINUE_MED_FAILURE,
        payload: err.response
          ? `${err.message}. ${err.response.data.message}`
          : err.message
      });
    });
};

export const DELETE_MED_REQUEST = 'DELETE_MED_REQUEST';
export const DELETE_MED_SUCCESS = 'DELETE_MED_SUCCESS';
export const DELETE_MED_FAILURE = 'DELETE_MED_FAILURE';

export const deleteMed = medID => dispatch => {
  dispatch({ type: DELETE_MED_REQUEST });
  axios
    .delete(`${endpoint}/api/meds/${medID}`)
    .then(res => {
      dispatch({ type: DELETE_MED_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: DELETE_MED_FAILURE,
        payload: err.response
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
        payload: err.response
          ? `${err.message}. ${err.response.data.message}`
          : err.message
      });
    });
};

export const ADD_DIARY_REQUEST = 'ADD_DIARY_REQUEST';
export const ADD_DIARY_SUCCESS = 'ADD_DIARY_SUCCESS';
export const ADD_DIARY_FAILURE = 'ADD_DIARY_FAILURE';

export const addDiary = newDiary => dispatch => {
  dispatch({ type: ADD_DIARY_REQUEST });
  axios
    .post(`${endpoint}/api/diaries/`, newDiary)
    .then(res => {
      dispatch({ type: ADD_DIARY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: ADD_DIARY_FAILURE,
        payload: `${err.message}. ${err.response.data.message}`
      });
    });
};

export const EDIT_DIARY_REQUEST = 'EDIT_DIARY_REQUEST';
export const EDIT_DIARY_SUCCESS = 'EDIT_DIARY_SUCCESS';
export const EDIT_DIARY_FAILURE = 'EDIT_DIARY_FAILURE';

export const editDiary = (diary_id, diary_edits) => dispatch => {
  dispatch({ type: EDIT_DIARY_REQUEST });
  axios
    .put(`${endpoint}/api/diaries/${diary_id}`, diary_edits)
    .then(res => {
      dispatch({ type: EDIT_DIARY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: EDIT_DIARY_FAILURE,
        payload: err.response
          ? `${err.message}. ${err.response.data.message}`
          : err.message
      });
    });
};

export const DELETE_DIARY_REQUEST = 'DELETE_DIARY_REQUEST';
export const DELETE_DIARY_SUCCESS = 'DELETE_DIARY_SUCCESS';
export const DELETE_DIARY_FAILURE = 'DELETE_DIARY_FAILURE';

export const deleteDiary = diary_id => dispatch => {
  dispatch({ type: DELETE_DIARY_REQUEST });
  axios
    .delete(`${endpoint}/api/diaries/${diary_id}`)
    .then(res => {
      dispatch({ type: DELETE_DIARY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: DELETE_DIARY_FAILURE,
        payload: err.response
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
  return axios
    .get(`${endpoint}/api/users/${user_id}/rems/`)
    .then(res => {
      dispatch({ type: FETCH_REMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_REMS_FAILURE,
        payload: err.response
          ? `${err.message}. ${err.response.data.message}`
          : err.message
      });
    });
};

export const ADD_REMS_REQUEST = 'ADD_REMS_REQUEST';
export const ADD_REMS_SUCCESS = 'ADD_REMS_SUCCESS';
export const ADD_REMS_FAILURE = 'ADD_REMS_FAILURE';

export const addRems = remsList => dispatch => {
  dispatch({ type: ADD_REMS_REQUEST });
  return axios
    .post(`${endpoint}/api/rems/`, remsList)
    .then(res => {
      dispatch({ type: ADD_REMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: ADD_REMS_FAILURE,
        payload: err.response
          ? `${err.message}. ${err.response.data.message}`
          : err.message
      });
    });
};

export const FILTER_REMINDERS = 'FILTER_REMINDERS';

export const filterReminders = (startDate, endDate) => {
  return {
    type: FILTER_REMINDERS,
    startDate,
    endDate
  };
};

export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';

export const uploadImage = imgData => dispatch => {
  dispatch({ type: UPLOAD_IMAGE_REQUEST });
  return axios
    .post(`${endpoint}/api/upload`, imgData)
    .then(res => {
      dispatch({ type: UPLOAD_IMAGE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err.response);
      dispatch({ type: UPLOAD_IMAGE_FAILURE, payload: err.message });
    });
};

export const SET_IMAGE = 'SET_IMAGE';

export const setImage = image => {
  return {
    type: SET_IMAGE,
    payload: image
  };
};
