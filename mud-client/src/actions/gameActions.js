import axios from "axios";

export const INIT_START = "INIT_START";
export const INIT_SUCCESS = "INIT_SUCCESS";
export const INIT_FAILURE = "INIT_FAILURE";

export const init = () => dispatch => {
  dispatch({ type: INIT_START });
  return axios
    .get("https://lambda-mud-test.herokuapp.com/api/adv/init/")
    .then(res => {
      console.log('init', res.data);
      localStorage.setItem("token", res.data);
      dispatch({ type: INIT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: INIT_FAILURE,
        payload: err.response.data
      });
    });
};


export const GET_ROOMS_START = "GET_ROOMS_START";
export const GET_ROOMS_SUCCESS = "GET_ROOMS_SUCCESS";
export const GET_ROOMS_FAILURE = "GET_ROOMS_FAILURE";

export const getRooms = () => dispatch => {
  dispatch({ type: GET_ROOMS_START });
  return axios
    .get("https://lambda-mud-test.herokuapp.com/api/adv/rooms/")
    .then(res => {
      console.log('rooms', res.data);
      localStorage.setItem("token", res.data);
      dispatch({ type: GET_ROOMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: GET_ROOMS_FAILURE,
        payload: err.response.data
      });
    });
};


export const MOVE_START = "MOVE_START";
export const MOVE_SUCCESS = "MOVE_SUCCESS";
export const MOVE_FAILURE = "MOVE_FAILURE";

export const move = direction => dispatch => {
  dispatch({ type: MOVE_START });
  return axios
    .post("https://lambda-mud-test.herokuapp.com/api/adv/move", {
      direction: direction
    })
    .then(res => {
      console.log('move', res.data);
      localStorage.setItem("token", res.data);
      dispatch({ type: MOVE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: MOVE_FAILURE,
        payload: err.response.data
      });
    });
};
