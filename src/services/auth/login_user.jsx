import { API_ENDPOINTS } from '../../utils/api-endpoints';
import { CookieKeys, CookieStorage } from '../../utils/cookies';
import { useMutation } from '@tanstack/react-query';
import { http3 } from '../../utils/http3';


export const reduxLoginUser = async (input) => {
  return await http3.post(API_ENDPOINTS.LOGIN_USER, input)
}

const loginUser = async (input) => {
  return await http3.post(API_ENDPOINTS.LOGIN_USER, input).then((result) => {
    CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
    return result;
  }).catch((err) => {
  });;
}



const useLoginUser = () => {
  return useMutation(loginUser);
};

export { loginUser, useLoginUser };