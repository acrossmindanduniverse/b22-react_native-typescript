// import {APP_URL} from '@env';
import {http} from '../../helpers/http';

const APP_URL = 'http://192.168.244.1:8000';

export interface IAuthSignUp {
  fullname: string;
  email: string;
  password: string;
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
