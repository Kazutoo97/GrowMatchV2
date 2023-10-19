import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import RegisterReducer from "./RegisterReducer";
import ForgotPassword from "./ForgotPassword";

export const reducer = combineReducers({
  Auth: AuthReducer,
  Username: RegisterReducer,
  ForgotPassword,
});
