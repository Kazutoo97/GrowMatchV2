const initialState = {
  registerUserName: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        registerUserName: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    case "REGISTER_REJECTED":
      return {
        ...state,
        user: null,
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    case "REGISTER_RESET":
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

export default RegisterReducer;
