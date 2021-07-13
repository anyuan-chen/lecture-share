import { LOGIN, LOGOUT } from "../actions/actions";

export const authenticationReducer = (authStatus = false, action) => {
  const { type } = action;
  switch (type) {
    case LOGIN: {
      return true;
    }
    case LOGOUT: {
      return false;
    }
    default:
      return authStatus;
  }
};
