interface IUserState {
  userData: null;
  authToggle: boolean;
  forgotToggle: boolean;
  resetToggle: boolean;
  errorSignUp: string;
  errorSignIn: string;
  errorForgotPassword: string;
  errorResetPassword: string;
}

const initialState: IUserState = {
  userData: null,
  authToggle: false,
  forgotToggle: false,
  resetToggle: false,
  errorSignUp: '',
  errorSignIn: '',
  errorForgotPassword: '',
  errorResetPassword: '',
};

const users = (state = initialState, action: any) => {
  switch (action.type) {
    case 'AUTH_SIGNUP': {
      return {
        ...state,
        authToggle: !state.authToggle,
      };
    }
    case 'AUTH_SIGNIN': {
      return {
        ...state,
        userData: action.payload,
      };
    }
    case 'AUTH_SIGNIN_REJECTED': {
      return {
        ...state,
        errorSignIn: action.error,
      };
    }
    case 'AUTH_SIGNUP_REJECTED': {
      return {
        ...state,
        errorSignUp: action.error,
      };
    }
    case 'FORGOT_PASSWORD': {
      return {
        ...state,
        forgotToggle: !state.forgotToggle,
      };
    }
    case 'FORGOT_PASSWORD_REJECTED': {
      return {
        ...state,
        errorForgotPassword: action.error,
      };
    }
    case 'RESET_PASSWORD': {
      return {
        ...state,
        resetToggle: !state.resetToggle,
      };
    }
    case 'RESET_PASSWORD_REJECTED': {
      return {
        ...state,
        errorResetPassword: action.error,
      };
    }
    case 'AUTH_DEFAULT': {
      return {
        ...state,
        authToggle: false,
        forgotToggle: false,
        resetToggle: false,
        errorForgotPassword: '',
        errorSignIn: '',
        errorSignUp: '',
        errorResetPassword: '',
      };
    }
    case 'AUTH_SIGNOUT': {
      return initialState;
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default users;
