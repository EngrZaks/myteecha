import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import * as toggleReducers from "./signupReducer";
const reducers = combineReducers({
  account: accountReducer,
  signup: toggleReducers.toggleSignUp,
  signin: toggleReducers.toggleSignIn,
});

export default reducers;
