import {
  INIT_START,
  INIT_SUCCESS,
  INIT_FAILURE,
  ROOMS_START,
  ROOMS_SUCCESS,
  ROOMS_FAILURE,
  MOVE_START,
  MOVE_SUCCESS,
  MOVE_FAILURE
} from "../actions/gameActions";

const initialState = {
  error: null,
  uuid: "",
  name: "",
  title: "",
  description: "",
  players: [],
  rooms: []
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_START:
      return {
        ...state,
        error: null
      };
    case INIT_SUCCESS:
      return {
        ...state,
        error: null,
        uuid: action.payload.uuid,
        name: action.payload.name,
        title: action.payload.title,
        description: action.payload.description,
        players: action.payload.players
      };
    case INIT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case ROOMS_START:
      return {
        ...state,
        error: null
      };
    case ROOMS_SUCCESS:
      return {
        ...state,
        error: null,
        rooms: action.payload.rooms
      };
    case ROOMS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case MOVE_START:
      return {
        ...state,
        error: null,
        name: action.payload.name,
        title: action.payload.title,
        description: action.payload.description,
        players: action.payload.players
      };
    case MOVE_SUCCESS:
      return {
        ...state,
        error: null
      };
    case MOVE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
