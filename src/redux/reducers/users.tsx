const initialState = {
  authData: [],
  authToggle: false,
  errorSignUp: '',
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SIGNUP': {
      return {
        ...state,
        authData: action.payload,
        authToggle: !state.authToggle,
      };
    }
    case 'AUTH_DEFAULT': {
      return {
        ...state,
        authToggle: false,
      };
    }
    case 'AUTH_SIGNUP_REJECTED': {
      return {
        ...state,
        errorSignUp: action.error,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default users;
