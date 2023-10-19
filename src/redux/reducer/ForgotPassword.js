const initialState = {
  email: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const ForgotPassword = (state = initialState, action) => {
  switch (action.type) {
    case "FORGOTPASSWORD_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "FORGOTPASSWORD_SUCCESS":
      return {
        ...state,
        email: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    case "FORGOTPASSWORD_REJECTED":
      return {
        ...state,
        user: null,
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    case "FORGOTPASSWORD_RESET":
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

export default ForgotPassword;
