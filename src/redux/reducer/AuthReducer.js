const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.data.token,
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    case "LOGIN_REJECTED":
      return {
        ...state,
        user: null,
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        user: null,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: "",
      };
    case "LOGIN_RESET":
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
