import {APP_URL} from '@env';
import {http} from '../../helpers/http';

export interface IAuthSignUp {
  fullname: string;
  email: string;
  password: string;
}

export interface IAuthSignIn {
  email: string;
  password: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  reset_code: string;
  email: string;
  new_password: string;
  confirm_password: string;
}

export const authToggleFunc = () => (dispatch: Function) => {
  dispatch({
    type: 'AUTH_DEFAULT',
  });
};

export const signUp =
  ({fullname, email, password}: IAuthSignUp) =>
  async (dispatch: Function) => {
    const form = new URLSearchParams({
      fullname,
      email,
      password,
    });
    try {
      const {data} = await http().post(`${APP_URL}/auth/sign-up`, form);
      dispatch({
        type: 'AUTH_SIGNUP',
        payload: data.data,
      });
    } catch (err: any) {
      dispatch({
        type: 'AUTH_SIGNUP_REJECTED',
        error: err.response.data.data,
      });
    }
  };

export const signIn =
  ({email, password}: IAuthSignIn) =>
  async (dispatch: Function) => {
    const form = new URLSearchParams({
      email,
      password,
    });
    try {
      const {data} = await http().post(`${APP_URL}/auth/sign-in`, form);
      dispatch({
        type: 'AUTH_SIGNIN',
        payload: data.data,
      });
    } catch (err: any) {
      dispatch({
        type: 'AUTH_SIGNIN_REJECTED',
        error: err.response.data.data,
      });
    }
  };

export const signOut = () => (dispatch: Function) => {
  dispatch({
    type: 'AUTH_SIGNOUT',
  });
};

export const forgotPassword =
  ({email}: IForgotPassword) =>
  async (dispatch: Function) => {
    const form = new URLSearchParams({
      email,
    });
    try {
      const {data} = await http().post(`${APP_URL}/auth/forgot-password`, form);
      dispatch({
        type: 'FORGOT_PASSWORD',
        payload: data.data,
      });
    } catch (err: any) {
      dispatch({
        type: 'FORGOT_PASSWORD_REJECTED',
        error: err.response.data.data,
      });
    }
  };

export const resetPassword =
  ({reset_code, email, new_password, confirm_password}: IResetPassword) =>
  async (dispatch: Function) => {
    const form = new URLSearchParams({
      reset_code,
      email,
      new_password,
      confirm_password,
    });
    console.log(form, 'test form');
    try {
      const {data} = await http().post(
        `${APP_URL}/auth/reset-password`,
        form.toString(),
      );
      dispatch({
        type: 'RESET_PASSWORD',
        payload: data.data,
      });
    } catch (err: any) {
      dispatch({
        type: 'RESET_PASSWORD_REJECTED',
        error: err.response.data.data,
      });
    }
  };
