import axios from 'axios';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post('https://mud-js.herokuapp.com/api/registration/', creds)
    .then(res => {
      console.log('register', res);
      dispatch({ type: REGISTER_SUCCESS });
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch({
        type: REGISTER_FAILURE,
        payload: err.response.data.non_field_errors
      });
    });
};