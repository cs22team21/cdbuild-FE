import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../actions/registerAction";

const initialState = {
  registering: false,
  registered: false,
  regMessage: "",
  error: ""
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        registering: true,
        registered: false,
        regMessage: ""
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        registerd: true,
        regMessage: "Account created"
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        registering: false,
        registered: false
      };
    default:
      return state;
  }
};
